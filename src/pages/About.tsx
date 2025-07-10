import React from 'react';
import { GraduationCap, Award, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">About Me</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate AI/ML Engineer with expertise in building production-ready systems 
            that scale and deliver real-world impact.
          </p>
        </div>

        {/* Education */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <GraduationCap className="w-8 h-8 text-blue-400 mr-3" />
            <h2 className="text-3xl font-bold text-white">Education</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-800/50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-2">MSc in Data Science</h3>
              <p className="text-blue-400 mb-2">Christ University</p>
              <p className="text-gray-400">
                Advanced coursework in machine learning, deep learning, statistical analysis, 
                and data engineering. Specialized in AI system architecture and deployment.
              </p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-2">BSc in Computer Science Electronics Mathematics</h3>
              <p className="text-blue-400 mb-2">Christ University</p>
              <p className="text-gray-400">
                Strong foundation in computer science fundamentals, mathematics, and electronics. 
                Developed analytical thinking and problem-solving skills.
              </p>
            </div>
          </div>
        </section>

        {/* Current Role */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Target className="w-8 h-8 text-green-400 mr-3" />
            <h2 className="text-3xl font-bold text-white">Current Role</h2>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-2">ML Engineer</h3>
            <p className="text-green-400 mb-4">Constient Global Solutions</p>
            <p className="text-gray-300 mb-4">
              Leading the development of AI-powered solutions that enhance business efficiency. 
              Experienced in Python, PyTorch, OpenCV, Transformers, RAG, and MLOps.
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Delivered 2+ AI systems improving efficiency by 20%</li>
              <li>Built end-to-end pipelines with RAG + LLMs</li>
              <li>Contributed to full-stack deployment and model tracking</li>
              <li>Implemented production-grade ML systems with monitoring and rollback capabilities</li>
            </ul>
          </div>
        </section>

        {/* Values & Approach */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Award className="w-8 h-8 text-purple-400 mr-3" />
            <h2 className="text-3xl font-bold text-white">Values & Approach</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">R</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Reliability</h3>
              <p className="text-gray-400">
                Building robust systems that work consistently in production environments
              </p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">S</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Scalability</h3>
              <p className="text-gray-400">
                Designing solutions that grow with business needs and handle increasing loads
              </p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">E</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Efficiency</h3>
              <p className="text-gray-400">
                Optimizing performance and resource utilization for maximum impact
              </p>
            </div>
          </div>
        </section>

        {/* Personal Note */}
        <section className="bg-gray-800/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Why I Love AI/ML</h2>
          <p className="text-gray-300 leading-relaxed">
            I'm fascinated by the potential of AI to solve real-world problems and create meaningful impact. 
            My approach combines theoretical knowledge with practical implementation, ensuring that every 
            solution I build is not just technically sound but also delivers tangible business value. 
            I believe in the power of continuous learning and staying at the forefront of AI innovation 
            while maintaining a strong focus on ethical and responsible AI development.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;