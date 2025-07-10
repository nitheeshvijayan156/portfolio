import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 'zenso',
      title: 'Zenso – Sign Language Translator',
      description: 'Real-time AI mobile app to translate sign language to/from speech using advanced Transformer architecture.',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['PyTorch', 'Transformers', 'Mobile AI', 'Real-time'],
      highlights: ['Encoder-decoder Transformer', 'Multi-pathway landmark encoder', 'Dynamic S3 deployment'],
      featured: true
    },
    {
      id: 'dms',
      title: 'Document Management System',
      description: 'AI-based enterprise system to manage RFPs and bills with OCR, embeddings, and intelligent querying.',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['OCR', 'Vector DB', 'RAG', 'Enterprise'],
      highlights: ['25% boost in retrieval', 'Smart categorization', 'Chatbot interface'],
      featured: true
    },
    {
      id: 'loan-advisor',
      title: 'Loan Advisor Chatbot',
      description: 'Intelligent chatbot built with React + Node.js that matches users with top-3 lenders.',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'TypeScript', 'ML'],
      highlights: ['ML ranking model', 'Explainability features', 'Dockerized backend'],
      featured: false
    },
    {
      id: 'collision-detection',
      title: 'Collision Detection & Prevention',
      description: 'Published IEEE research using YOLOv8 for real-time vehicle and pedestrian detection.',
      image: 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['YOLOv8', 'Computer Vision', 'IEEE', 'Research'],
      highlights: ['IEEE TQCEBT 2024', 'Night vision enhancement', 'Real-time detection'],
      featured: false
    }
  ];

  return (
    <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">Projects</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of AI/ML projects that solve real-world problems with production-ready solutions
          </p>
        </div>

        {/* Featured Projects */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project) => (
              <div key={project.id} className="bg-gray-800/50 rounded-lg overflow-hidden hover:bg-gray-800/70 transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Highlights:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {project.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Details
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Other Projects */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-8">Other Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.filter(p => !p.featured).map((project) => (
              <div key={project.id} className="bg-gray-800/30 rounded-lg p-6 hover:bg-gray-800/50 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/projects/${project.id}`}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm"
                >
                  Learn More
                  <ArrowRight className="ml-1 w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;