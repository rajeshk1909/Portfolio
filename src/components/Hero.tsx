import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaDownload } from 'react-icons/fa';

const Hero: React.FC = () => {
  const handleDownloadResume = () => {
    // Replace with your actual resume file path
    const resumeUrl = '/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'your-name-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Hi, I'm <span className="text-blue-500">Your Name</span>
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 mb-8">
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'React Specialist',
                2000,
                'Node.js Expert',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#contact"
              className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300"
            >
              Get In Touch
            </a>
            <button
              onClick={handleDownloadResume}
              className="bg-gray-800 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-700 transition duration-300 flex items-center justify-center gap-2"
            >
              <FaDownload className="text-lg" />
              Download Resume
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;