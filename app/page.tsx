import Link from 'next/link';
import MidiPlayer from '@/components/MidiPlayer';
import SectionHeading from '@/components/SectionHeading';
import { ArrowRight, Music, Brain, Sparkles } from 'lucide-react';
import musicSamples from '@/content/musicSamples.json';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-academic-blue-light to-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              RiskOptimix Music Transformer
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              A Recreation of Google's Music Transformer model
            </p>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Using the transformer architecture and attention mechanisms to generate expressive musical compositions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/research"
                className="inline-flex items-center justify-center px-8 py-3 bg-academic-blue text-white font-medium rounded-lg hover:bg-academic-blue-dark transition-colors"
              >
                Explore Research
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <a
                href="#samples"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-academic-blue font-medium rounded-lg border-2 border-academic-blue hover:bg-academic-blue-light transition-colors"
              >
                Listen to Samples
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What is the Music Transformer?"
            subtitle="Understanding the Music Transformer"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-academic-blue-light rounded-full mb-4">
                <Brain className="text-academic-blue" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Self-Attention</h3>
              <p className="text-gray-600">
                Relative positional encoding enables the model to capture long-range 
                dependencies in musical sequences, maintaining coherence over extended compositions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-academic-blue-light rounded-full mb-4">
                <Music className="text-academic-blue" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Musical Structure</h3>
              <p className="text-gray-600">
                The model learns hierarchical musical structures from thousands of performances, 
                understanding harmony, melody, rhythm, and expressive timing.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-academic-blue-light rounded-full mb-4">
                <Sparkles className="text-academic-blue" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Creative Generation</h3>
              <p className="text-gray-600">
                Generates compositions that are both stylistically coherent and 
                creatively interesting, balancing learned patterns with variation.
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-4xl mx-auto">
            <p className="text-gray-700 leading-relaxed mb-6">
                The Music Transformer is a neural network that applies the transformer 
                architecture—originally designed for language tasks—to music generation. 
                It treats musical notes as sequences, similar to words in a sentence, 
                learning patterns from existing music to generate new compositions.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                What makes this model interesting is its use of <strong>relative self-attention</strong>, 
                which helps it handle long musical sequences while keeping track of timing 
                relationships between notes. This allows it to generate complete pieces that 
                maintain some consistency in style and structure.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This project is my recreation of Google's Music Transformer architecture, 
                trained on piano performances to learn patterns in melody, harmony, and timing. 
                The goal was to understand how these models work and demonstrate the results.
              </p>
          </div>
        </div>
      </section>

      {/* Music Showcase Section */}
      <section id="samples" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Generated Music Samples"
            subtitle="Explore compositions created by the Music Transformer"
            centered
          />

          <p className="text-gray-700 leading-relaxed mb-6">
            These samples are all a continuation of a random piece from the MAESTRO dataset. The first
            part of the piece is the original piece, and the second part is the continuation generated by the model.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {musicSamples.map((sample) => (
              <MidiPlayer
                key={sample.id}
                midiUrl={sample.midiUrl}
                title={sample.title}
                description={sample.description}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              These samples demonstrate the model's ability to generate different musical pieces.
            </p>
            <Link
              href="/research"
              className="inline-flex items-center text-academic-blue font-medium hover:text-academic-blue-dark"
            >
              Learn more about the generation process
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="How It Works"
            subtitle="From training data to music generation"
            centered
          />
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-academic-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Data Collection</h3>
              <p className="text-gray-600 text-sm">
                MIDI recordings from the MAESTRO dataset provide 
                training examples of piano performances.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-academic-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Preprocessing</h3>
              <p className="text-gray-600 text-sm">
                Musical events are converted into tokens representing 
                notes, timing, velocity, and other musical elements.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-academic-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Training</h3>
              <p className="text-gray-600 text-sm">
                The model learns to predict the next musical event based on 
                previous notes, learning patterns from the training data.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-academic-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Generation</h3>
              <p className="text-gray-600 text-sm">
                The trained model creates new music by predicting 
                and selecting musical events one at a time.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-academic-blue-light to-blue-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Technical Details</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Check out the architecture details, training process, 
              and results on the research page.
            </p>
            <Link
              href="/research"
              className="inline-flex items-center justify-center px-8 py-3 bg-academic-blue text-white font-medium rounded-lg hover:bg-academic-blue-dark transition-colors"
            >
              View Research Details
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

