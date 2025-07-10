import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, RotateCcw, Github, Linkedin, Mail } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
                Hi, I'm <span className="text-blue-400">Nitheesh</span> 👋
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                I build intelligent, production-ready AI systems that scale. 
                Passionate about <span className="text-blue-400">LLMs</span>, 
                <span className="text-green-400"> Deep Learning</span>, and 
                <span className="text-purple-400"> MLOps</span>.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-3 bg-gray-800/50 rounded-lg p-4">
                <TrendingUp className="w-6 h-6 text-green-400" />
                <span className="text-gray-300">25% boost in document retrieval</span>
              </div>
              <div className="flex items-center justify-center space-x-3 bg-gray-800/50 rounded-lg p-4">
                <RotateCcw className="w-6 h-6 text-blue-400" />
                <span className="text-gray-300">Live model reloading with rollback</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/projects"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                View My Work
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-300 bg-transparent hover:bg-gray-700 transition-colors"
              >
                Get In Touch
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/nitheeshvijayan156"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/nitheesh-vijayan-4787291a2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:nitheesh.vijayan156@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">AI</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI/ML Engineer</h3>
              <p className="text-gray-400">Building production-grade AI systems with focus on scalability and reliability</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2+</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Years Experience</h3>
              <p className="text-gray-400">Delivering AI solutions that improve efficiency by 20%+</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">5+</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Projects</h3>
              <p className="text-gray-400">From sign language translation to document management systems</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;