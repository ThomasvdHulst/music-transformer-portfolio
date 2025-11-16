'use client';

import { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';
import { Midi } from '@tonejs/midi';

interface MidiPlayerProps {
  midiUrl: string;
  title: string;
  description?: string;
}

export default function MidiPlayer({ midiUrl, title, description }: MidiPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const synthRef = useRef<any | null>(null);
  const toneModuleRef = useRef<any | null>(null);
  const midiDataRef = useRef<Midi | null>(null);
  const notesRef = useRef<
    {
      time: number;
      duration: number;
      name: string;
      velocity: number;
    }[]
  >([]);
  const nextNoteIndexRef = useRef(0);
  const positionRef = useRef(0); // current playback position in seconds
  const lastTimestampRef = useRef<number | null>(null); // last RAF timestamp
  const isPlayingRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      isPlayingRef.current = false;
      if (synthRef.current) {
        synthRef.current.dispose();
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const resetPlayback = () => {
    isPlayingRef.current = false;
    setIsPlaying(false);
    positionRef.current = 0;
    nextNoteIndexRef.current = 0;
    lastTimestampRef.current = null;
    setCurrentTime(0);
    setProgress(0);
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    if (synthRef.current) {
      synthRef.current.releaseAll();
    }
  };

  // Load MIDI file
  useEffect(() => {
    const loadMidi = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Stop any current playback when loading a new MIDI
        resetPlayback();

        const response = await fetch(midiUrl);
        const arrayBuffer = await response.arrayBuffer();
        const midi = new Midi(arrayBuffer);
        midiDataRef.current = midi;
        setDuration(midi.duration);

        // Flatten and sort all notes for manual scheduling
        const notes: {
          time: number;
          duration: number;
          name: string;
          velocity: number;
        }[] = [];
        midi.tracks.forEach((track) => {
          track.notes.forEach((note) => {
            notes.push({
              time: note.time,
              duration: note.duration,
              name: note.name,
              velocity: note.velocity,
            });
          });
        });
        notes.sort((a, b) => a.time - b.time);
        notesRef.current = notes;
        nextNoteIndexRef.current = 0;
        positionRef.current = 0;
        lastTimestampRef.current = null;
        setCurrentTime(0);
        setProgress(0);

        setIsLoading(false);
      } catch (err) {
        setError('Failed to load MIDI file');
        setIsLoading(false);
      }
    };

    loadMidi();
  }, [midiUrl]);

  const stepPlayback = (timestamp: number) => {
    const midi = midiDataRef.current;
    const notes = notesRef.current;
    const synth = synthRef.current;

    if (!midi || !synth || !isPlayingRef.current) {
      animationFrameRef.current = null;
      return;
    }

    if (lastTimestampRef.current == null) {
      // First frame after play/resume
      lastTimestampRef.current = timestamp;
    }

    const deltaMs = timestamp - lastTimestampRef.current;
    lastTimestampRef.current = timestamp;
    const deltaSeconds = deltaMs / 1000;

    // Advance position
    positionRef.current += deltaSeconds;
    const position = positionRef.current;
    const totalDuration = midi.duration;

    // Update UI
    setCurrentTime(Math.min(position, totalDuration));
    setProgress(Math.min(100, (position / totalDuration) * 100));

    // Trigger any notes that fall within this time slice
    const prevPosition = position - deltaSeconds;
    let i = nextNoteIndexRef.current;
    while (i < notes.length && notes[i].time <= position) {
      const note = notes[i];
      if (note.time > prevPosition) {
        synth.triggerAttackRelease(
          note.name,
          note.duration,
          undefined,
          note.velocity
        );
      }
      i++;
    }
    nextNoteIndexRef.current = i;

    // Check for end of track
    if (position >= totalDuration || i >= notes.length) {
      isPlayingRef.current = false;
      setIsPlaying(false);
      setCurrentTime(totalDuration);
      setProgress(100);
      animationFrameRef.current = null;
      return;
    }

    animationFrameRef.current = requestAnimationFrame(stepPlayback);
  };

  const handlePlay = async () => {
    if (!midiDataRef.current) return;

    try {
      // Lazy-load Tone.js from its ESM build only when the user clicks play
      if (!toneModuleRef.current) {
        const ToneModule: any = await import('tone/build/esm/index.js');
        toneModuleRef.current = ToneModule;
      }

      const Tone = toneModuleRef.current;

      // Start or resume the audio context in response to a user gesture
      await Tone.start();

      // Lazily create a more realistic piano instrument after the context is started
      if (!synthRef.current) {
        // Show loading state while the piano samples are fetched (especially important on mobile networks)
        setIsLoading(true);

        const sampler = new Tone.Sampler({
          // Using Tone.js Salamander grand piano samples for a natural piano sound
          urls: {
            A0: 'A0.mp3',
            C1: 'C1.mp3',
            'D#1': 'Ds1.mp3',
            'F#1': 'Fs1.mp3',
            A1: 'A1.mp3',
            C2: 'C2.mp3',
            'D#2': 'Ds2.mp3',
            'F#2': 'Fs2.mp3',
            A2: 'A2.mp3',
            C3: 'C3.mp3',
            'D#3': 'Ds3.mp3',
            'F#3': 'Fs3.mp3',
            A3: 'A3.mp3',
            C4: 'C4.mp3',
            'D#4': 'Ds4.mp3',
            'F#4': 'Fs4.mp3',
            A4: 'A4.mp3',
            C5: 'C5.mp3',
            'D#5': 'Ds5.mp3',
            'F#5': 'Fs5.mp3',
            A5: 'A5.mp3',
            C6: 'C6.mp3',
            'D#6': 'Ds6.mp3',
            'F#6': 'Fs6.mp3',
            A6: 'A6.mp3',
            C7: 'C7.mp3',
            'D#7': 'Ds7.mp3',
            'F#7': 'Fs7.mp3',
            A7: 'A7.mp3',
            C8: 'C8.mp3',
          },
          release: 1.2,
          baseUrl: 'https://tonejs.github.io/audio/salamander/',
        }).toDestination();

        // Wait until all required samples are loaded before starting playback
        if (sampler.loaded instanceof Promise) {
          await sampler.loaded;
        }

        // Slight volume trim so it sits comfortably in the mix
        sampler.volume.value = -6;
        synthRef.current = sampler;

        setIsLoading(false);
      }

      // Start or resume manual playback loop
      if (!isPlayingRef.current) {
        isPlayingRef.current = true;
        setIsPlaying(true);
        lastTimestampRef.current = null; // reset RAF timing
        animationFrameRef.current = requestAnimationFrame(stepPlayback);
      }
    } catch (err) {
      console.error('Failed to play MIDI file', err);
      setError('Failed to play MIDI file');
    }
  };

  const handlePause = () => {
    if (!isPlayingRef.current) return;

    isPlayingRef.current = false;
    setIsPlaying(false);
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    if (synthRef.current) {
      synthRef.current.releaseAll();
    }
  };

  const handleStop = () => {
    resetPlayback();
  };

  const handleReset = () => {
    handleStop();
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      {description && (
        <p className="text-sm text-gray-600 mb-4">{description}</p>
      )}

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div
            className="bg-academic-blue h-full transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between mt-1 text-xs text-gray-600">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center space-x-3">
        <button
          onClick={isPlaying ? handlePause : handlePlay}
          disabled={isLoading || !!error}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-academic-blue text-white hover:bg-academic-blue-dark disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : isPlaying ? (
            <Pause size={20} fill="white" />
          ) : (
            <Play size={20} fill="white" />
          )}
        </button>

        <button
          onClick={handleReset}
          disabled={isLoading || !!error}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:bg-gray-50 disabled:cursor-not-allowed transition-colors"
          aria-label="Reset"
        >
          <RotateCcw size={18} />
        </button>

        {isLoading && (
          <span className="text-sm text-gray-600">
            Loading...
          </span>
        )}
      </div>
    </div>
  );
}

