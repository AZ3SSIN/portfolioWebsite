
import { useState, useEffect } from 'react';
import { Menu, X, Github, ExternalLink, Mail, Phone, MapPin, Download, ChevronDown } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition <= offsetBottom) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
              MZ
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-teal-400 relative ${
                    activeSection === item.id ? 'text-teal-400' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-teal-400 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-200 hover:scale-105">
                <Download size={16} className="inline mr-2" />
                Resume
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-4 py-4 space-y-4">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-gray-300 hover:text-teal-400 transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              <button className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium mt-4">
                <Download size={16} className="inline mr-2" />
                Download Resume
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 border-t border-slate-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2025 Mohamad Ziqreey Bin Rahmat. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to top button */}
      <button
        onClick={() => scrollToSection('home')}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-teal-500 to-blue-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:shadow-teal-500/25 transition-all duration-200 hover:scale-110 z-40"
      >
        <ChevronDown size={20} className="rotate-180" />
      </button>
    </div>
  );
};

export default Index;
