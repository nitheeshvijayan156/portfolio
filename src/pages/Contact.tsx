import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:nitheesh.vijayan156@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Nitheesh_Vijayan.pdf';
    link.download = 'Nitheesh_Vijayan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's discuss how we can work together to build innovative AI solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8">Contact Information</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Email</h3>
                  <a 
                    href="mailto:nitheesh.vijayan156@gmail.com"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    nitheesh.vijayan156@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Phone</h3>
                  <a 
                    href="tel:+918904410589"
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    +91 8904410589
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Location</h3>
                  <p className="text-gray-300">India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/nitheeshvijayan156"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors"
                >
                  <Github className="w-6 h-6 text-white" />
                </a>
                <a
                  href="https://linkedin.com/in/nitheesh-vijayan-4787291a2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
                <a
                  href="https://nitheeshvijayan156.github.io/portfolio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center hover:bg-purple-700 transition-colors"
                >
                  <span className="text-white font-bold">P</span>
                </a>
              </div>
            </div>

            {/* Resume Download */}
            <div className="bg-gray-800/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Download Resume</h3>
              <p className="text-gray-300 mb-4">
                Get a detailed overview of my experience, skills, and achievements.
              </p>
              <button
                onClick={handleDownloadResume}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Download Resume
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Tell me about your project or how we can work together..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>

            <p className="text-gray-400 text-sm mt-4">
              * This form will open your default email client with the message pre-filled.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;