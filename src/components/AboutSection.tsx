import { Code, Users, Zap, Target } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: <Code className="text-teal-400" size={24} />,
      title: "7 Projects highlight",
      description: "Completed across web and mobile platforms (2019-2025)",
    },
    {
      icon: <Zap className="text-blue-400" size={24} />,
      title: "Full-Stack Expertise",
      description: "Frontend, backend, and database development",
    },
    {
      icon: <Target className="text-purple-400" size={24} />,
      title: "Real-time Systems",
      description: "Specializing in live tracking and API integration",
    },
    {
      icon: <Users className="text-green-400" size={24} />,
      title: "Team Leadership",
      description: "Collaborative development and project management",
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate software engineering student dedicated to
              creating impactful digital solutions that solve real-world
              problems. My journey in technology spans from web development to
              mobile applications and complex backend systems.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              With experience ranging from simple discussion forums to
              sophisticated real-time tracking systems, I focus on combining
              technical excellence with exceptional user experience. I believe
              in writing clean, maintainable code and building solutions that
              make a meaningful difference.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              My expertise lies in full-stack development, with particular
              strength in React ecosystems, Node.js backends, and mobile
              development with React Native. I'm always eager to learn new
              technologies and take on challenging projects that push the
              boundaries of what's possible.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-teal-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/10"
              >
                <div className="flex items-center space-x-3 mb-3">
                  {highlight.icon}
                  <h3 className="text-xl font-semibold text-white">
                    {highlight.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
