import React, { useState } from "react";

type Project = {
  id: string;
  title: string;
  emoji: string;
  description: string;
  tags: string[];
  previewTitle: string;
  previewLines: string[];
  fromGradient: string;
  toGradient: string;
  borderClass?: string;
};

const PROJECTS: Project[] = [
  {
    id: "traffic",
    title: "Smart Traffic Management System using IoT & AI",
    emoji: "🚦",
    description:
      "Built a smart traffic controller using Arduino, Raspberry Pi and ultrasonic sensors to detect vehicle density. Processed live camera feeds with OpenCV and adjusted signal timings using Flask + MQTT to reduce congestion.",
    tags: ["Arduino", "Raspberry Pi", "OpenCV", "Flask", "MQTT", "IoT", "AI"],
    previewTitle: "Smart Traffic System",
    previewLines: ["Real-time Vehicle Detection", "AI Traffic Optimization", "Computer Vision Analysis"],
    fromGradient: "from-blue-900",
    toGradient: "to-gray-900",
    borderClass: "border-blue-500",
  },
  {
    id: "gpt",
    title: "Character-Level GPT Language Model using PyTorch",
    emoji: "🧠",
    description:
      "Custom GPT-style model that generates character-level Shakespearean-style text. Implemented transformers, self-attention, positional encoding and training loops in PyTorch.",
    tags: ["PyTorch", "Transformers", "NLP", "Deep Learning", "Python"],
    previewTitle: "AI Language Model",
    previewLines: ['> "To be or not to be..."', "Character-Level Generation", "Transformer Architecture"],
    fromGradient: "from-purple-900",
    toGradient: "to-pink-900",
    borderClass: "border-purple-500",
  },
  {
    id: "amazon",
    title: "Amazon Clone - E-commerce Platform",
    emoji: "🛒",
    description:
      "Full-featured e-commerce website with product browsing, shopping cart, user authentication, and payment integration. Includes search, categories, and fully responsive design.",
    tags: ["React.js", "Node.js", "MongoDB", "Express.js", "CSS3", "JavaScript"],
    previewTitle: "E-commerce Platform",
    previewLines: ["Product Catalog & Search", "Shopping Cart & Checkout", "User Authentication"],
    fromGradient: "from-orange-900",
    toGradient: "to-yellow-900",
    borderClass: "border-orange-500",
  },
  {
    id: "netflix",
    title: "Netflix Clone - Streaming Platform UI",
    emoji: "🎬",
    description:
      "Netflix-inspired streaming platform with movie browsing, trailer playback, search functionality, user profiles and TMDB API integration.",
    tags: ["React.js", "TMDB API", "CSS3", "JavaScript", "Firebase"],
    previewTitle: "Streaming Platform",
    previewLines: ["Movie Carousel Interface", "Video Preview on Hover", "Responsive Dark Theme"],
    fromGradient: "from-red-900",
    toGradient: "to-black",
    borderClass: "border-red-500",
  },
  {
    id: "ai-chat",
    title: "AI Assistant Chatbot",
    emoji: "🤖",
    description:
      "Intelligent chatbot with natural language processing, context awareness, quick reply options, and AI API integration. Includes typing indicators and chat history.",
    tags: ["React.js", "NLP", "AI APIs", "WebSocket", "Python"],
    previewTitle: "AI Chatbot",
    previewLines: ["Natural Conversations", "Real-time Responses"],
    fromGradient: "from-cyan-900",
    toGradient: "to-blue-900",
    borderClass: "border-cyan-500",
  },
  {
    id: "gym",
    title: "Gym & Fitness Tracking App",
    emoji: "💪",
    description:
      "Comprehensive fitness tracking app with workout planning, progress tracking, nutrition logging, and social challenges. Includes wearable device integration.",
    tags: ["React Native", "HealthKit", "Charts.js", "Firebase", "Express.js"],
    previewTitle: "Fitness Tracker",
    previewLines: ["Workout Planning", "Progress Analytics", "Nutrition Tracking"],
    fromGradient: "from-green-900",
    toGradient: "to-emerald-900",
    borderClass: "border-green-500",
  },
  {
    id: "portfolio",
    title: "Professional Portfolio Website",
    emoji: "🌐",
    description:
      "A comprehensive portfolio website showcasing my projects, skills, and experience. Fully responsive with smooth animations and SEO optimization.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    previewTitle: "Portfolio Website",
    previewLines: ["Responsive Design", "Fast Performance", "Modern UI/UX"],
    fromGradient: "from-indigo-900",
    toGradient: "to-purple-900",
    borderClass: "border-indigo-500",
  },
];

export default function Projects(): JSX.Element {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const toggleProject = (id: string) => {
    setActiveProject((prev) => (prev === id ? null : id));
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-xl sm:text-2xl font-bold text-blue-400 mb-4 sm:mb-6">// My top projects :</h2>
      <p className="text-gray-400 text-xs sm:text-sm mb-6 sm:mb-8">
        <span className="hidden sm:inline">(Hover on project to preview)</span>
        <span className="sm:hidden">(Tap project card to expand)</span>
      </p>

      <div className="space-y-6 sm:space-y-8">
        {PROJECTS.map((p) => {
          const isActive = activeProject === p.id;
          return (
            <div
              key={p.id}
              className="border border-yellow-600 rounded-lg overflow-hidden hover:border-blue-400 transition-colors group cursor-pointer"
              onMouseEnter={() => window.innerWidth > 768 && setActiveProject(p.id)}
              onMouseLeave={() => window.innerWidth > 768 && setActiveProject(null)}
              onClick={() => toggleProject(p.id)}
            >
              {/* Header */}
              <div className="bg-yellow-600 text-black p-3 font-bold text-lg flex items-center">
                <span className="mr-2">{p.emoji}</span>
                {p.title}
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 bg-gray-900">
                <p className="text-gray-300 text-sm leading-relaxed mb-3">{p.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 bg-blue-900/20 text-blue-400 text-xs rounded whitespace-nowrap"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Preview Section */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isActive ? "max-h-72 opacity-100 mt-4" : "max-h-0 opacity-0"
                  }`}
                >
                  <div
                    className={`rounded border ${p.borderClass ?? "border-blue-500"} flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br ${p.fromGradient} ${p.toGradient} h-48`}
                  >
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="relative z-10 text-center px-3">
                      <div className="text-2xl mb-2">{p.emoji}</div>
                      <span className="text-lg block mb-2 font-semibold text-white/90">
                        {p.previewTitle}
                      </span>

                      <div className="text-xs text-white/70 space-y-1">
                        {p.previewLines.map((line, i) => (
                          <div key={i} className="flex items-center justify-center gap-2">
                            <div
                              className={`w-2 h-2 rounded-full animate-pulse ${
                                i % 3 === 0
                                  ? "bg-green-400"
                                  : i % 3 === 1
                                  ? "bg-yellow-400"
                                  : "bg-red-400"
                              }`}
                            />
                            <span>{line}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
