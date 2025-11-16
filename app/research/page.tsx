import SectionHeading from '@/components/SectionHeading';
import ResourceCard from '@/components/ResourceCard';
import { FileText, Github, BookOpen, Database, Layers, TrendingUp, Cpu, Zap } from 'lucide-react';
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
              An in-depth exploration of the Music Transformer architecture, training methodology, 
              and experimental results.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Research Resources"
            subtitle="Access papers, code, and datasets"
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
            subtitle="Understanding the transformer-based design"
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
                    Novel attention mechanism that incorporates relative positional information, 
                    allowing the model to process sequences of arbitrary length while maintaining 
                    computational efficiency. This is crucial for capturing long-range musical dependencies.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-semibold text-lg mb-2">Multi-Head Attention</h4>
                  <p className="text-gray-600 text-sm">
                    Multiple attention heads learn different aspects of musical structure simultaneously—
                    harmony, melody, rhythm, and dynamics—enabling rich, multi-dimensional representations.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-semibold text-lg mb-2">Feed-Forward Networks</h4>
                  <p className="text-gray-600 text-sm">
                    Position-wise feed-forward layers provide non-linear transformations, 
                    allowing the model to learn complex mappings from input to output sequences.
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
                    <span className="text-gray-600">12 transformer blocks</span>
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
                    <span className="font-medium">Parameters:</span>
                    <span className="text-gray-600">~41 million</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Vocabulary Size:</span>
                    <span className="text-gray-600">~388 tokens</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Context Window:</span>
                    <span className="text-gray-600">2048 events</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-academic-blue to-academic-blue-dark text-white p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">Architecture Diagram</h4>
                <div className="bg-white/10 rounded p-4 text-center h-48 flex items-center justify-center">
                  <p className="text-sm">
                    [Placeholder for detailed architecture diagram showing transformer layers, 
                    attention mechanisms, and data flow]
                  </p>
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
                Adam optimizer with learning rate scheduling and gradient clipping 
                for stable convergence over extended training runs.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Learning rate: 0.0001</li>
                <li>• Batch size: 32</li>
                <li>• Warmup steps: 4000</li>
                <li>• Gradient clipping: 1.0</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <TrendingUp className="text-academic-blue mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3">Training Time</h3>
              <p className="text-gray-600 mb-4">
                Trained for approximately 300,000 steps across multiple GPUs, 
                with regular checkpointing and evaluation.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Duration: ~1 week</li>
                <li>• Hardware: 4x NVIDIA V100</li>
                <li>• Evaluation every 5K steps</li>
                <li>• Best checkpoint saved</li>
              </ul>
            </div>
          </div>

          <div className="bg-academic-blue-light p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Training Metrics</h3>
            <div className="bg-white rounded p-6 h-64 flex items-center justify-center">
              <p className="text-gray-600 text-center">
                [Placeholder for training loss curves, perplexity graphs, and convergence plots]
              </p>
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
                    <span className="font-medium">Perplexity (test set)</span>
                    <span className="text-academic-blue font-bold">4.23</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-academic-blue h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Note Accuracy</span>
                    <span className="text-academic-blue font-bold">87.3%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-academic-blue h-2 rounded-full" style={{ width: '87%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Timing Precision</span>
                    <span className="text-academic-blue font-bold">91.8%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-academic-blue h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-6">Qualitative Assessment</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>Musical Coherence:</strong> Generated compositions maintain 
                  thematic consistency and structural integrity across extended passages, 
                  with clear phrase boundaries and harmonic progression.
                </p>
                <p>
                  <strong>Stylistic Accuracy:</strong> The model successfully captures 
                  genre-specific characteristics, from classical counterpoint to 
                  contemporary jazz harmonies.
                </p>
                <p>
                  <strong>Expressive Quality:</strong> Dynamic variation and timing 
                  nuances create musically expressive performances that sound natural 
                  and intentional rather than mechanical.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Sample Analysis</h3>
            <div className="bg-gray-50 rounded p-6 h-64 flex items-center justify-center">
              <p className="text-gray-600 text-center">
                [Placeholder for musical analysis visualizations: pitch distributions, 
                rhythm patterns, harmonic analysis, etc.]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Work */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Future Developments"
            subtitle="Ongoing research and planned enhancements"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-academic-blue-light to-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Interactive Demo</h3>
              <p className="text-gray-700 mb-3">
                Real-time interactive keyboard interface for live music generation and 
                collaborative composition with the AI.
              </p>
              <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">
                Coming Soon
              </span>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Multi-Instrument</h3>
              <p className="text-gray-700 mb-3">
                Extending the model to generate full orchestral arrangements and 
                ensemble performances beyond solo piano.
              </p>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                In Progress
              </span>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Style Transfer</h3>
              <p className="text-gray-700 mb-3">
                Conditional generation allowing users to specify style, mood, and 
                structural parameters for customized compositions.
              </p>
              <span className="inline-block bg-gray-200 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">
                Planned
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

