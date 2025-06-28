import React from 'react';
import { Code2, Heart, Zap } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const About: React.FC = () => {
  const values = [
    {
      icon: <Code2 className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code that stands the test of time.'
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500 dark:text-red-400" />,
      title: 'User-Centered',
      description: 'Designing experiences that put users first and solve real-world problems.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500 dark:text-yellow-400" />,
      title: 'Innovation',
      description: 'Embracing new technologies and approaches to build better solutions.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-indigo-600 dark:text-indigo-400">Me</span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate developer with a mission to create digital experiences that matter
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {personalInfo.bio.intro}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {personalInfo.bio.expertise}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {personalInfo.bio.personal}
            </p>
          </div>

          <div className="space-y-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-700/50 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/70 transition-colors duration-300 shadow-sm"
              >
                <div className="flex-shrink-0">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;