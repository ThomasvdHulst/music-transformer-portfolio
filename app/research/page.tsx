import SectionHeading from '@/components/SectionHeading';
import ResourceCard from '@/components/ResourceCard';
import { FileText, Github, BookOpen, Database, Layers, TrendingUp, Cpu, Zap } from 'lucide-react';
import Image from 'next/image';
import resources from '@/content/resources.json';

// Map icon names to actual icon components
const iconMap: { [key: string]: any } = {
  FileText,
  Github,
  BookOpen,
  Database,
};

export default function ResearchPage() {
  return (
<div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-academic-blue-light to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Research & Technical Details
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Details on the Music Transformer architecture, training approach, and results.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Research Resources"
            subtitle="Papers, code, and datasets"
            centered
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource) => (
              <ResourceCard
                key={resource.id}
                title={resource.title}
                description={resource.description}
                icon={iconMap[resource.icon]}
                href={resource.href}
                isExternal={resource.isExternal}
                isDownload={resource.isDownload}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Model Architecture"
            subtitle="Transformer-based design overview"
          />
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <Layers className="mr-3 text-academic-blue" size={28} />
                Core Components
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-semibold text-lg mb-2">Relative Self-Attention</h4>
                  <p className="text-gray-600 text-sm">
                    An attention mechanism that uses relative positional information to handle 
                    sequences of varying length. This helps capture long-range patterns in music.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-semibold text-lg mb-2">Multi-Head Attention</h4>
                  <p className="text-gray-600 text-sm">
                    Multiple attention heads process different aspects of musical structure 
                    like harmony, melody, and rhythm in parallel.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-semibold text-lg mb-2">Feed-Forward Networks</h4>
                  <p className="text-gray-600 text-sm">
                    Position-wise layers that apply non-linear transformations to learn 
                    complex mappings between input and output sequences.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <Cpu className="mr-3 text-academic-blue" size={28} />
                Model Specifications
              </h3>
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <div className="space-y-4">
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Layers:</span>
                    <span className="text-gray-600">6 transformer blocks</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Hidden Size:</span>
                    <span className="text-gray-600">512 dimensions</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Attention Heads:</span>
                    <span className="text-gray-600">8 heads per layer</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Feed-Forward Size:</span>
                    <span className="text-gray-600">2048 dimensions</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Relative Attention Window:</span>
                    <span className="text-gray-600">1024 events</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Parameters:</span>
                    <span className="text-gray-600">~25 million</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Vocabulary Size:</span>
                    <span className="text-gray-600">391 tokens</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Context Window:</span>
                    <span className="text-gray-600">2048 events</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Training Methodology"
            subtitle="Data, optimization, and training procedures"
          />
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <Database className="text-academic-blue mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3">Dataset</h3>
              <p className="text-gray-600 mb-4">
                Trained on the MAESTRO v3.0.0 dataset containing over 200 hours of 
                virtuosic piano performances captured with precise timing and dynamics.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• ~1,200 compositions</li>
                <li>• Professional performances</li>
                <li>• High-resolution MIDI</li>
                <li>• Aligned audio recordings</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <Zap className="text-academic-blue mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3">Optimization</h3>
              <p className="text-gray-600 mb-4">
                AdamW optimizer with Transformer learning rate scheduling and gradient clipping 
                for stable convergence during training.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Optimizer: AdamW</li>
                <li>• Effective batch size: 16 (batch size 2 × 8 accumulation steps)</li>
                <li>• Learning rate schedule: Transformer with 4000 warmup steps</li>
                <li>• Gradient clipping: 1.0</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <TrendingUp className="text-academic-blue mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3">Training Time</h3>
              <p className="text-gray-600 mb-4">
                Trained using the full Music Transformer configuration on a MacBook Pro with 
                an M3 Pro chip, completing in approximately 8 hours training time.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Duration: ~8 hours</li>
                <li>• Hardware: Apple MacBook Pro (M3 Pro)</li>
                <li>• Device: Apple Silicon (MPS backend)</li>
                <li>• Regular checkpointing and evaluation</li>
              </ul>
            </div>
          </div>

          <div className="bg-academic-blue-light p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Training Metrics</h3>
            <div className="bg-white rounded p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg text-gray-900 text-center md:text-left">
                    Training Loss
                  </h4>
                  <Image
                    src="/images/train-loss.png"
                    alt="Training loss over time"
                    width={800}
                    height={500}
                    className="w-full h-auto rounded-md shadow-sm"
                  />
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg text-gray-900 text-center md:text-left">
                    Training Accuracy
                  </h4>
                  <Image
                    src="/images/train-accuracy.png"
                    alt="Training accuracy over time"
                    width={800}
                    height={500}
                    className="w-full h-auto rounded-md shadow-sm"
                  />
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg text-gray-900 text-center md:text-left">
                    Training Perplexity
                  </h4>
                  <Image
                    src="/images/train-perplexity.png"
                    alt="Training perplexity over time"
                    width={800}
                    height={500}
                    className="w-full h-auto rounded-md shadow-sm"
                  />
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg text-gray-900 text-center md:text-left">
                    Learning Rate Schedule
                  </h4>
                  <Image
                    src="/images/train-learningrate.png"
                    alt="Learning rate schedule over training"
                    width={800}
                    height={500}
                    className="w-full h-auto rounded-md shadow-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Results & Evaluation"
            subtitle="Quantitative and qualitative performance metrics"
          />
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-6">Quantitative Metrics</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Evaluation Loss</span>
                    <span className="text-academic-blue font-bold">1.9232</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-academic-blue h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Perplexity (evaluation set)</span>
                    <span className="text-academic-blue font-bold">6.91</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-academic-blue h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Token Accuracy</span>
                    <span className="text-academic-blue font-bold">42.99%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-academic-blue h-2 rounded-full" style={{ width: '43%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-6">Qualitative Assessment</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>Musical Coherence:</strong> Generated pieces show consistent 
                  themes and structure with recognizable phrase boundaries and 
                  harmonic progressions.
                </p>
                <p>
                  <strong>Stylistic Accuracy:</strong> The model reproduces characteristics 
                  of different genres.
                </p>
                <p>
                  <strong>Expressive Quality:</strong> Variations in dynamics and timing 
                  give the output a less mechanical quality.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

