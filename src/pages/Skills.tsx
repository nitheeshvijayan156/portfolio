import React from 'react';
import { Code, Brain, Wrench, Database } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code className="w-6 h-6" />,
      color: 'blue',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'SQL', level: 90 },
        { name: 'Java', level: 80 },
        { name: 'HTML/CSS', level: 85 },
      ]
    },
    {
      title: 'ML/AI',
      icon: <Brain className="w-6 h-6" />,
      color: 'green',
      skills: [
        { name: 'PyTorch', level: 95 },
        { name: 'Transformers', level: 90 },
        { name: 'Scikit-learn', level: 90 },
        { name: 'OpenCV', level: 85 },
        { name: 'OCR', level: 80 },
        { name: 'LLMs', level: 90 },
        { name: 'RAG', level: 85 },
      ]
    },
    {
      title: 'Tools',
      icon: <Wrench className="w-6 h-6" />,
      color: 'purple',
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'GitHub', level: 90 },
        { name: 'AWS S3', level: 80 },
        { name: 'Power BI', level: 75 },
      ]
    },
    {
      title: 'Other',
      icon: <Database className="w-6 h-6" />,
      color: 'orange',
      skills: [
        { name: 'MLOps', level: 85 },
        { name: 'Model Deployment', level: 90 },
        { name: 'Data Pipelines', level: 85 },
        { name: 'MySQL', level: 80 },
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'text-blue-400 bg-blue-600',
      green: 'text-green-400 bg-green-600',
      purple: 'text-purple-400 bg-purple-600',
      orange: 'text-orange-400 bg-orange-600',
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">Skills & Technologies</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building production-ready AI systems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-800/50 rounded-lg p-6">
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg ${getColorClasses(category.color)} mr-4`}>
                  {category.icon}
                </div>
                <h2 className="text-2xl font-bold text-white">{category.title}</h2>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${getColorClasses(category.color).split(' ')[1]} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Icons Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Technologies I Work With</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: 'Python', icon: '🐍' },
              { name: 'PyTorch', icon: '🔥' },
              { name: 'React', icon: '⚛️' },
              { name: 'Docker', icon: '🐳' },
              { name: 'AWS', icon: '☁️' },
              { name: 'MySQL', icon: '🗄️' },
              { name: 'Git', icon: '📝' },
              { name: 'Jupyter', icon: '📊' },
              { name: 'TensorFlow', icon: '🧠' },
              { name: 'OpenCV', icon: '👁️' },
              { name: 'Pandas', icon: '🐼' },
              { name: 'NumPy', icon: '🔢' },
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-gray-800/30 rounded-lg p-4 text-center hover:bg-gray-700/50 transition-colors"
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <div className="text-gray-300 text-sm font-medium">{tech.name}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;