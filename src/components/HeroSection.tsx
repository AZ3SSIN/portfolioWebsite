import { useState, useEffect } from "react";
import { ArrowDown, Mail, Phone, MapPin } from "lucide-react";

const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);
  const fullText = "Full-Stack Developer & Software Engineer";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,178,172,0.1),transparent_50%)]"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-teal-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Profile Picture */}
          {/* <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-teal-400/30 shadow-2xl shadow-teal-500/20 transition-all duration-500 group-hover:border-teal-400/60 group-hover:shadow-teal-500/40 group-hover:scale-105">
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800 animate-pulse rounded-full" />
                )}

                <img
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=500&h=500&fit=crop&crop=face"
                  alt="Mohamad Ziqreey Profile"
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    imageLoaded ? "opacity-100 blur-0" : "opacity-0 blur-md"
                  }`}
                  onLoad={() => setImageLoaded(true)}
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10 transform group-hover:scale-110" />
            </div>
          </div> */}

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Mohamad Ziqreey
            </span>
          </h1>

          <div className="h-16 md:h-20 mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-teal-400">
              {typedText}
              <span className="animate-pulse">|</span>
            </h2>
          </div>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Specializing in Web Applications, Mobile Development, Real-time
            Systems & Server-Side programming
          </p>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12 text-gray-400">
            <div className="flex items-center space-x-2">
              <MapPin size={16} />
              <span>Gelugor, Penang, Malaysia</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={16} />
              <span>mziqreey99@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span>+601112653466</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-200 hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="border-2 border-teal-400 text-teal-400 px-8 py-4 rounded-lg text-lg font-medium hover:bg-teal-400 hover:text-slate-900 transition-all duration-200 hover:scale-105"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={24} className="text-teal-400" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
