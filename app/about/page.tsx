import Image from 'next/image';
import SectionHeading from '@/components/SectionHeading';
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-academic-blue-light to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About the Project
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Learn about the RiskOptimix Music Transformer project.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="md:col-span-1">
              <div className="bg-gradient-to-br from-academic-blue-light to-blue-50 rounded-lg p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-academic-blue overflow-hidden relative">
                    <Image
                      src="/images/profile-photo.jpg"
                      alt="Portrait of Thomas van der Hulst"
                      fill
                      sizes="128px"
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gray-700 font-medium">
                    Thomas van der Hulst
                  </p>
                  <p className="text-gray-500 text-sm">
                    Econometrics &amp; Operations Research MSc student
                  </p>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About Me
              </h2>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  Hi! I&apos;m <strong>Thomas</strong>, a Master&apos;s student in Econometrics 
                  and Operations Research at the Vrije Universiteit Amsterdam. I have a passion 
                  for both machine learning and piano music, and this project brings those 
                  two interests together.
                </p>
                <p>
                  I wanted to understand how transformer models actually work beyond just 
                  using them as black boxes. The Music Transformer seemed like a great way to 
                  learn—it applies the transformer architecture to something I care about 
                  (music) rather than the typical language tasks. Plus, working with MIDI data 
                  and generating piano pieces made the learning process more engaging and fun.
                </p>
                <p>
                  This project is part of my portfolio and represents what I learned about 
                  neural networks, attention mechanisms, and music generation. If you&apos;re 
                  interested in the technical details or want to try something similar, 
                  feel free to check out the code and resources I&apos;ve shared.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      {/* Professional Background */}
      {/*
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Professional Background"
            subtitle="Experience and expertise"
          />
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">[Current Position]</h3>
              <p className="text-academic-blue mb-3">[Institution/Company] • [Year - Present]</p>
              <p className="text-gray-600">
                [Brief description of your current role, responsibilities, and relevant 
                work related to machine learning, music, or related fields. Highlight 
                accomplishments and areas of focus.]
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">[Previous Position]</h3>
              <p className="text-academic-blue mb-3">[Institution/Company] • [Year - Year]</p>
              <p className="text-gray-600">
                [Description of previous relevant experience, projects, or research 
                that contributed to your expertise in AI, music technology, or 
                computational creativity.]
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-academic-blue mb-3">[Degree] in [Field] • [University]</p>
              <p className="text-gray-600">
                [Brief description of your educational background, relevant coursework, 
                thesis topics, or academic achievements that relate to this project.]
              </p>
            </div>
          </div>
        </div>
      </section>
      */}

      

      {/* Skills & Expertise */}
      {/*
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Skills & Expertise"
            subtitle="Technical capabilities and areas of focus"
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-32 font-medium text-gray-700">Python/PyTorch</div>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-academic-blue h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-32 font-medium text-gray-700">Deep Learning</div>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-academic-blue h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-32 font-medium text-gray-700">Music Theory</div>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-academic-blue h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-32 font-medium text-gray-700">MIDI/Audio</div>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-academic-blue h-2 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Areas of Interest</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-academic-blue mr-2">•</span>
                  <span>Transformer architectures and attention mechanisms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-academic-blue mr-2">•</span>
                  <span>Generative models for creative applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-academic-blue mr-2">•</span>
                  <span>Music information retrieval and analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-academic-blue mr-2">•</span>
                  <span>Human-AI collaboration in artistic domains</span>
                </li>
                <li className="flex items-start">
                  <span className="text-academic-blue mr-2">•</span>
                  <span>Interpretability and explainability in AI systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      */}

      {/* Project Motivation */}
  
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Project Motivation"
            subtitle="Why I recreated the Music Transformer"
          />
          
          <div className="prose prose-lg text-gray-700 max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed mb-6">
              I started this project because I wanted to really understand how transformer 
              models work. Reading papers is one thing, but implementing one from scratch 
              teaches you what&apos;s actually important and where the tricky parts are.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              I chose the Music Transformer specifically because:
            </p>
            <ul className="space-y-3 mb-6">
              <li>
                <strong>It combines my interests:</strong> I&apos;ve picked up learning piano recently, 
                so working with music data kept me motivated through the challenging parts
              </li>
              <li>
                <strong>It&apos;s more interesting than text:</strong> Music has clear structure 
                and timing that you can actually hear, making it easier to debug and understand 
                what the model is learning
              </li>
              <li>
                <strong>It taught me practical skills:</strong> Beyond transformers, I learned 
                about sequence modeling, attention mechanisms, and working with temporal data
              </li>
            </ul>
            <p className="text-lg leading-relaxed">
              If you&apos;re working on something similar or just curious about how this all works, 
              feel free to explore the code and reach out with questions.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Get In Touch"
            subtitle="Connect for collaborations, questions, or discussions"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a
              href="mailto:t.van.der.hulst@student.vu.nl"
              className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all text-center group"
            >
              <Mail className="text-academic-blue mx-auto mb-4 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-sm text-gray-600 mb-3">
                For inquiries and collaborations
              </p>
              <span className="text-academic-blue text-sm font-medium">
                t.van.der.hulst@student.vu.nl
              </span>
            </a>
            
            <a
              href="www.linkedin.com/in/thomas-van-der-hulst-17884a265"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all text-center group"
            >
              <Linkedin className="text-academic-blue mx-auto mb-4 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
              <p className="text-sm text-gray-600 mb-3">
                Professional network
              </p>
              <span className="text-academic-blue text-sm font-medium inline-flex items-center">
                View Profile
                <ExternalLink size={14} className="ml-1" />
              </span>
            </a>
            
            <a
              href="https://github.com/thomasvanderhulst"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all text-center group"
            >
              <Github className="text-academic-blue mx-auto mb-4 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-lg font-semibold mb-2">GitHub</h3>
              <p className="text-sm text-gray-600 mb-3">
                Code and open source projects
              </p>
              <span className="text-academic-blue text-sm font-medium inline-flex items-center">
                @thomasvanderhulst
                <ExternalLink size={14} className="ml-1" />
              </span>
            </a>
          </div>

          <div className="bg-gradient-to-r from-academic-blue-light to-blue-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">Interested in Collaborating?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              I&apos;m always open to discussing new ideas, research collaborations, or 
              potential applications of this technology. Whether you&apos;re working on 
              similar projects or have suggestions for improvements, I&apos;d love to hear from you.
            </p>
            <a
              href="mailto:t.van.der.hulst@student.vu.nl"
              className="inline-flex items-center justify-center px-8 py-3 bg-academic-blue text-white font-medium rounded-lg hover:bg-academic-blue-dark transition-colors"
            >
              Send a Message
              <Mail className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

