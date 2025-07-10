import React from 'react';
import { Briefcase, Award, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">Experience & Achievements</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional journey in AI/ML engineering and notable achievements
          </p>
        </div>

        {/* Current Experience */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Briefcase className="w-8 h-8 text-blue-400 mr-3" />
            <h2 className="text-3xl font-bold text-white">Professional Experience</h2>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white">ML Engineer</h3>
                <p className="text-blue-400 font-medium">Constient Global Solutions</p>
              </div>
              <div className="flex items-center text-gray-400 mt-2 md:mt-0">
                <Calendar className="w-4 h-4 mr-2" />
                <span>2024 – Present</span>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-medium text-white mb-3">Key Achievements:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-300">Delivered 2+ AI systems improving efficiency by 20%</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-300">Built end-to-end pipelines with RAG + LLMs</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-300">Contributed to full-stack deployment and model tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-300">Implemented production-grade ML systems with monitoring</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium text-white mb-3">Responsibilities:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-300">Design and implement AI/ML solutions for enterprise clients</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-300">Develop and deploy machine learning models in production</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-300">Collaborate with cross-functional teams on AI strategy</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-300">Optimize model performance and system scalability</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Certificates & Publications */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Award className="w-8 h-8 text-purple-400 mr-3" />
            <h2 className="text-3xl font-bold text-white">Certificates & Publications</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-800/50 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">IEEE Publication – Collision Detection</h3>
                  <p className="text-purple-400 font-medium">IEEE TQCEBT 2024</p>
                </div>
                <span className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm">Research</span>
              </div>
              <p className="text-gray-300 mb-4">
                Published research on real-time collision detection and prevention using YOLOv8 
                for enhanced vehicle safety systems.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded text-sm">Computer Vision</span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded text-sm">YOLOv8</span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded text-sm">Real-time Processing</span>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Database Management</h3>
                  <p className="text-blue-400 font-medium">Coursera – University of Colorado</p>
                </div>
                <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">Certificate</span>
              </div>
              <p className="text-gray-300 mb-4">
                Comprehensive course covering advanced database design, optimization, 
                and management techniques for large-scale applications.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded text-sm">SQL</span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded text-sm">Database Design</span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded text-sm">Performance Optimization</span>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Development Timeline */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8">Professional Development</h2>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-blue-400 rounded-full flex-shrink-0"></div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">Advanced AI/ML Specialization</h3>
                <p className="text-gray-400">Deep Learning, Transformers, RAG, MLOps</p>
              </div>
              <span className="text-gray-500">2023-2024</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-green-400 rounded-full flex-shrink-0"></div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">Production ML Systems</h3>
                <p className="text-gray-400">Docker, AWS, Model Deployment, Monitoring</p>
              </div>
              <span className="text-gray-500">2022-2023</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-purple-400 rounded-full flex-shrink-0"></div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">Computer Vision & NLP</h3>
                <p className="text-gray-400">OpenCV, PyTorch, Transformers, OCR</p>
              </div>
              <span className="text-gray-500">2021-2022</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experience;