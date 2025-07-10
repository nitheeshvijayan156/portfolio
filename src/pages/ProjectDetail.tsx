import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();

  const projectData = {
    zenso: {
      title: 'Zenso – Sign Language Translator',
      subtitle: 'Real-time AI mobile app to translate sign language to/from speech',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200',
      overview: 'Zenso is a cutting-edge mobile application that bridges communication gaps by providing real-time translation between sign language and speech. Built with advanced AI technologies, it represents a significant advancement in accessibility technology.',
      architecture: {
        title: 'Advanced Transformer Architecture',
        details: [
          'Encoder-decoder Transformer architecture with multi-pathway landmark encoder',
          'Point-wise, global, and regional pathway processing for comprehensive gesture understanding',
          'Self-attention mechanisms with positional weighting for temporal modeling',
          'Mixture-of-Experts decoder with diverse beam search for accurate translation',
          'Confidence-penalty loss function with AdamW optimizer and learning rate schedulers'
        ]
      },
      deployment: {
        title: 'Production Deployment System',
        details: [
          'Unified .pkl SLT asset containing model weights, vocabulary, and utilities',
          'Dynamic S3 fetch with SHA-256 hash verification for security',
          'SQL logging for comprehensive audit trails and monitoring',
          'Thread-safe model loader with rollback capabilities and live swapping',
          'Zero-downtime model updates with automatic fallback mechanisms'
        ]
      },
      features: [
        'Real-time sign language recognition and translation',
        'Vocab Editor Tool for dynamic vocabulary updates without retraining',
        'Android app integration for seamless user experience',
        'Dataset collection through user-generated signs',
        'Multi-language support with extensible architecture'
      ],
      technologies: ['PyTorch', 'Transformers', 'AWS S3', 'Android', 'SQL', 'Computer Vision'],
      impact: [
        'Improved accessibility for deaf and hard-of-hearing communities',
        'Real-time processing with sub-second latency',
        'Scalable architecture supporting thousands of concurrent users',
        'Continuous learning from user interactions'
      ]
    },
    dms: {
      title: 'Document Management System (DMS)',
      subtitle: 'AI-based enterprise system to manage RFPs and bills',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1200',
      overview: 'An enterprise-grade document management system that leverages AI to revolutionize how organizations handle RFPs, bills, and other critical documents. The system combines OCR, vector databases, and intelligent querying for unprecedented efficiency.',
      architecture: {
        title: 'AI-Powered Document Processing',
        details: [
          'Advanced OCR pipeline for text extraction from various document formats',
          'Embedding generation using state-of-the-art language models',
          'Vector database integration for semantic search capabilities',
          'RAG (Retrieval-Augmented Generation) implementation for intelligent querying',
          'Smart categorization using machine learning classification models'
        ]
      },
      deployment: {
        title: 'Enterprise Infrastructure',
        details: [
          'MySQL database for metadata and structured data storage',
          'AWS S3 for scalable document storage and retrieval',
          'Vector database for high-performance similarity search',
          'RESTful API architecture for seamless integration',
          'Role-based access control and security measures'
        ]
      },
      features: [
        'Intelligent document categorization and tagging',
        'Chatbot-based document querying with natural language',
        'Starred documents and favorites management',
        'Trash management with recovery capabilities',
        'Previous queries history and analytics',
        'Bulk document processing and batch operations'
      ],
      technologies: ['OCR', 'Vector DB', 'RAG', 'MySQL', 'AWS S3', 'NLP', 'Machine Learning'],
      impact: [
        '25% improvement in document retrieval efficiency',
        'Reduced manual processing time by 60%',
        'Enhanced search accuracy with semantic understanding',
        'Streamlined workflow for enterprise document management'
      ]
    },
    'loan-advisor': {
      title: 'Loan Advisor Chatbot',
      subtitle: 'Intelligent chatbot for personalized loan recommendations',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=1200',
      overview: 'A sophisticated chatbot application that helps users find the best loan options by collecting their information through conversational AI and matching them with the top 3 most suitable lenders using advanced machine learning algorithms.',
      architecture: {
        title: 'Full-Stack TypeScript Architecture',
        details: [
          'React frontend with TypeScript for type-safe development',
          'Node.js backend with Express framework',
          'Machine learning model for lender ranking and scoring',
          'Real-time chat interface with natural language processing',
          'RESTful API design with comprehensive error handling'
        ]
      },
      deployment: {
        title: 'Containerized Deployment',
        details: [
          'Dockerized backend for consistent deployment environments',
          'Mobile-responsive frontend design',
          'Cloud-based hosting with auto-scaling capabilities',
          'CI/CD pipeline for automated testing and deployment',
          'Monitoring and logging for production reliability'
        ]
      },
      features: [
        'Conversational user information collection',
        'ML-powered lender matching algorithm',
        'Top-3 lender recommendations with match scores',
        'Explainability features for transparent decision-making',
        'Rule-based fallback system for edge cases',
        'User session management and data persistence'
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'Docker', 'Machine Learning', 'NLP'],
      impact: [
        'Improved loan application success rates',
        'Reduced time to find suitable lenders',
        'Enhanced user experience through conversational interface',
        'Transparent and explainable recommendations'
      ]
    },
    'collision-detection': {
      title: 'Collision Detection & Prevention',
      subtitle: 'IEEE published research on real-time vehicle safety',
      image: 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1200',
      overview: 'A research project published in IEEE TQCEBT 2024 that focuses on real-time collision detection and prevention using advanced computer vision techniques. The system is designed to enhance vehicle safety through intelligent monitoring.',
      architecture: {
        title: 'YOLOv8-Based Detection System',
        details: [
          'YOLOv8 object detection for persons, bikes, trucks, and other vehicles',
          'Real-time processing optimized for automotive applications',
          'Multi-class detection with high accuracy and low latency',
          'Custom training pipeline for automotive-specific scenarios',
          'Edge computing optimization for in-vehicle deployment'
        ]
      },
      deployment: {
        title: 'Real-Time Processing Pipeline',
        details: [
          'Night vision enhancement algorithms for low-light conditions',
          'Dash cam integration with real-time video processing',
          'Alert system for collision prevention and warnings',
          'Data logging and analytics for safety insights',
          'Hardware optimization for automotive environments'
        ]
      },
      features: [
        'Real-time object detection and tracking',
        'Night vision enhancement for improved visibility',
        'Collision risk assessment and early warning',
        'Multi-vehicle and pedestrian detection',
        'Integration with vehicle safety systems',
        'Performance optimization for edge devices'
      ],
      technologies: ['YOLOv8', 'Computer Vision', 'OpenCV', 'Edge Computing', 'Real-time Processing'],
      impact: [
        'Published in IEEE TQCEBT 2024',
        'Enhanced vehicle safety through AI',
        'Real-time collision prevention capabilities',
        'Contribution to autonomous vehicle research'
      ]
    }
  };

  const project = projectData[id as keyof typeof projectData];

  if (!project) {
    return (
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Project Not Found</h1>
          <Link to="/projects" className="text-blue-400 hover:text-blue-300">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          to="/projects"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>

        {/* Hero Section */}
        <div className="mb-12">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <h1 className="text-4xl font-bold text-white mb-4">{project.title}</h1>
          <p className="text-xl text-gray-300 mb-6">{project.subtitle}</p>
          <p className="text-gray-300 leading-relaxed">{project.overview}</p>
        </div>

        {/* Architecture Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">{project.architecture.title}</h2>
          <div className="bg-gray-800/50 rounded-lg p-6">
            <ul className="space-y-3">
              {project.architecture.details.map((detail, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-300">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Deployment Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">{project.deployment.title}</h2>
          <div className="bg-gray-800/50 rounded-lg p-6">
            <ul className="space-y-3">
              {project.deployment.details.map((detail, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-300">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <div key={index} className="bg-gray-800/30 rounded-lg p-4">
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-300">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Impact Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Impact & Results</h2>
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg p-6">
            <ul className="space-y-3">
              {project.impact.map((impact, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-300">{impact}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetail;