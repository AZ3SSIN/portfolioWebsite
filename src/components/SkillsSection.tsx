
import { Code, Database, Globe, Smartphone, Settings, Users } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: <Globe className="text-teal-400" size={24} />,
      title: "Frontend Development",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "Tailwind CSS", level: 85 }
      ]
    },
    {
      icon: <Database className="text-blue-400" size={24} />,
      title: "Backend & Database",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "Firestore", level: 85 },
        { name: "PHP", level: 70 }
      ]
    },
    {
      icon: <Smartphone className="text-purple-400" size={24} />,
      title: "Mobile Development",
      skills: [
        { name: "React Native", level: 85 },
        { name: "Mobile UI/UX", level: 80 },
        { name: "Cross-platform", level: 85 },
        { name: "Native APIs", level: 75 }
      ]
    },
    {
      icon: <Settings className="text-green-400" size={24} />,
      title: "Tools & APIs",
      skills: [
        { name: "Google Maps API", level: 90 },
        { name: "Google Places API", level: 85 },
        { name: "Git/GitHub", level: 90 },
        { name: "RapidMiner", level: 75 },
        { name: "Firebase", level: 85 }
      ]
    },
    {
      icon: <Code className="text-orange-400" size={24} />,
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "C++", level: 75 },
        { name: "PHP", level: 70 }
      ]
    },
    {
      icon: <Users className="text-pink-400" size={24} />,
      title: "Soft Skills",
      skills: [
        { name: "Team Collaboration", level: 95 },
        { name: "Project Management", level: 85 },
        { name: "Problem Solving", level: 90 },
        { name: "Communication", level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across different domains.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-teal-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/10"
            >
              <div className="flex items-center space-x-3 mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                      <span className="text-teal-400 text-sm font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-teal-400 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Highlight */}
        <div className="mt-16 text-center">
          <div className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-4">Specializations</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Real-time Systems",
                "API Integration",
                "Cross-platform Development",
                "Database Design",
                "User Experience Design",
                "Team Leadership",
                "Agile Development",
                "Data Analysis"
              ].map((specialization, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-teal-500/20 to-blue-500/20 border border-teal-500/30 text-teal-300 px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200"
                >
                  {specialization}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
