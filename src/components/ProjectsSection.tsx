import { Github, ExternalLink, Calendar } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Real-Time Campus Bus Tracking System",
      type: "Final Year Project",
      year: "2025",
      status: "Completed",
      description:
        "Full-stack real-time bus tracking system for USM campus with mobile app, live location visualization, ETA calculations, and admin dashboard.",
      techStack: [
        "React Native",
        "TypeScript",
        "Express.js",
        "Firestore",
        "Google Maps API",
      ],
      features: [
        "Real-time bus location tracking",
        "Optimal bus and route recommendation",
        "Crowd density voting system",
        "Internal desgined ETA calculation logic",
      ],
      impact: "Reduced student waiting time, improved campus transportation",
      gradient: "from-teal-500 to-blue-600",
    },
    {
      id: 2,
      title: "Social Media Sentiment Analysis",
      type: "University Assignment",
      year: "2025",
      status: "Completed",
      description:
        "Comparative sentiment analysis for gaming/entertainment brands analyzing 400+ Facebook comments using advanced data mining techniques.",
      techStack: ["RapidMiner", "Facepager", "TF-IDF", "Text Mining"],
      features: [
        "Social media data extraction",
        "Text preprocessing and cleaning",
        "Sentiment classification modeling",
        "Visual dashboard creation",
        "Brand comparison analytics",
      ],
      impact: "Advanced text mining and opinion analysis capabilities",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      id: 3,
      title: "USM Hostel Registration Portal",
      type: "Group Project",
      year: "2024",
      status: "Completed",
      description:
        "Full-stack web platform for student hostel registration with room selection, check-in/check-out management, and approval system.",
      techStack: ["React", "TypeScript", "MongoDB", "Clerk"],
      features: [
        "Role-based access (students, admins)",
        "Room selection interface",
        "Application status tracking",
        "Admin approval workflow",
        "Authentication system",
      ],
      impact: "Improved efficiency and transparency of hostel registration",
      gradient: "from-green-500 to-teal-600",
    },
    {
      id: 4,
      title: "Web-Based Discussion Forum",
      type: "Personal Project",
      year: "2023",
      status: "Completed",
      description:
        "Lightweight discussion platform created to solve communication challenges in university chess tournament.",
      techStack: ["HTML", "CSS", "JavaScript", "Firestore", "GitHub Pages"],
      features: [
        "Topic-based forum creation",
        "Real-time messaging",
        "Public forum access",
        "Centralized discussion space",
      ],
      impact: "Improved participant interaction, reduced redundant queries",
      gradient: "from-orange-500 to-red-600",
    },
    {
      id: 5,
      title: "Electric Vehicle Booking System",
      type: "Team Project",
      year: "2022",
      status: "Completed",
      description:
        "Platform for private EV charging station sharing with decentralized charging network and booking mechanism.",
      techStack: ["HTML", "CSS", "JavaScript", "Firebase Realtime Database"],
      features: [
        "Charging station listing",
        "Location-based search",
        "Time slot booking",
        "Payment integration",
        "Rate customization",
      ],
      impact:
        "Addressed national EV charger shortage with community-driven solution",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      id: 6,
      title: "Hospital Billing System",
      type: "Team Project",
      year: "2021",
      status: "Completed",
      description:
        "Desktop hospital billing management system with strong focus on OOP principles and modular architecture.",
      techStack: ["C++", "Object-Oriented Programming"],
      features: [
        "Patient registration",
        "Record management",
        "Service tracking",
        "Billing calculations",
        "Class-based architecture",
      ],
      impact:
        "Mastered OOP principles: encapsulation, inheritance, polymorphism",
      gradient: "from-cyan-500 to-blue-600",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my development journey from 2019 to 2025, featuring
            full-stack applications, mobile development, and real-time systems.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden hover:border-teal-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-teal-500/10 ${
                index % 2 === 0 ? "" : "lg:flex-row-reverse"
              }`}
            >
              <div className="lg:flex">
                {/* Project Header */}
                <div className="lg:w-1/3 p-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <Calendar size={16} className="text-teal-400" />
                    <span className="text-sm text-teal-400 font-medium">
                      {project.year}
                    </span>
                    <span className="text-sm text-gray-400">•</span>
                    <span className="text-sm text-gray-400">
                      {project.type}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">
                    {project.title}
                  </h3>

                  <div
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${project.gradient} text-white mb-4`}
                  >
                    {project.status}
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Project Details */}
                <div className="lg:w-2/3 p-8 lg:pl-0">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-slate-700/80 text-gray-300 px-3 py-1 rounded-full text-sm border border-slate-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {project.features
                          .slice(0, 4)
                          .map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="text-gray-300 text-sm flex items-start"
                            >
                              <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              {feature}
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="mt-6 p-4 bg-slate-700/50 rounded-lg border-l-4 border-teal-400">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Impact
                    </h4>
                    <p className="text-gray-300 text-sm">{project.impact}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
