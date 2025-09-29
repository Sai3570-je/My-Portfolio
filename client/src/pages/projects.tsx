import { useState } from 'react';

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-xl sm:text-2xl font-bold text-tBlue mb-4 sm:mb-6">// My top projects :</h2>
      <p className="text-gray-400 text-xs sm:text-sm mb-6 sm:mb-8">
        <span className="hidden sm:inline">(Hover on readme screen to see small visual of the project)</span>
        <span className="sm:hidden">(Tap on projects to see details)</span>
      </p>
      
      <div className="space-y-8">
        {/* Project 1: Smart Traffic Management System */}
        <div 
          className="border border-yellow-600 rounded-lg overflow-hidden hover:border-tBlue transition-colors group cursor-pointer"
          onMouseEnter={() => setHoveredProject('traffic')}
          onMouseLeave={() => setHoveredProject(null)}
          onClick={() => setHoveredProject(hoveredProject === 'traffic' ? null : 'traffic')}
        >
          <div className="bg-yellow-600 text-black p-3 font-bold text-lg flex items-center">
            <span className="mr-2">📁</span>
            Smart Traffic Management System using IoT & AI
          </div>
          
          <div className="bg-gray-800 border-b border-gray-600 px-4 py-2 flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-gray-700 px-3 py-1 rounded">
              <span className="text-yellow-400">📄</span>
              <span className="text-tWhiteSec">Description</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-700 px-3 py-1 rounded">
              <span className="text-green-400">✨</span>
              <span className="text-tWhiteSec">Features Implemented</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-700 px-3 py-1 rounded">
              <span className="text-blue-400">🔧</span>
              <span className="text-tWhiteSec">Tech Used</span>
            </div>
          </div>
          
          <div className="p-6 bg-gray-900">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="mb-4">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Built a smart traffic controller using Arduino, Raspberry Pi, and ultrasonic sensors to detect vehicle density. 
                    Analyzed live camera feeds with OpenCV and adjusted signal timings dynamically using Flask and MQTT. 
                    Helped reduce traffic congestion by automating decisions based on real-time data.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-tBlue/20 text-tBlue text-xs rounded">Arduino</span>
                  <span className="px-2 py-1 bg-tBlue/20 text-tBlue text-xs rounded">Raspberry Pi</span>
                  <span className="px-2 py-1 bg-tBlue/20 text-tBlue text-xs rounded">OpenCV</span>
                  <span className="px-2 py-1 bg-tBlue/20 text-tBlue text-xs rounded">Flask</span>
                  <span className="px-2 py-1 bg-tBlue/20 text-tBlue text-xs rounded">MQTT</span>
                  <span className="px-2 py-1 bg-tBlue/20 text-tBlue text-xs rounded">IoT</span>
                  <span className="px-2 py-1 bg-tBlue/20 text-tBlue text-xs rounded">AI</span>
                </div>
              </div>
              
              <div className={`transition-opacity duration-300 ${hoveredProject === 'traffic' ? 'opacity-100' : 'opacity-0'}`}>
                <div className="w-full h-48 bg-gradient-to-br from-blue-900 to-gray-900 rounded border border-blue-500 flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 text-center">
                    <div className="text-2xl mb-2">🚦</div>
                    <span className="text-blue-300 text-lg block mb-2 font-semibold">Smart Traffic System</span>
                    <div className="text-xs text-blue-200 space-y-1">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span>Real-time Vehicle Detection</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                        <span>AI Traffic Optimization</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                        <span>Computer Vision Analysis</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2: Character-Level GPT */}
        <div 
          className="border border-yellow-600 rounded-lg overflow-hidden hover:border-tBlue transition-colors group cursor-pointer"
          onMouseEnter={() => setHoveredProject('gpt')}
          onMouseLeave={() => setHoveredProject(null)}
          onClick={() => setHoveredProject(hoveredProject === 'gpt' ? null : 'gpt')}
        >
          <div className="bg-yellow-600 text-black p-3 font-bold text-lg flex items-center">
            <span className="mr-2">📁</span>
            Character-Level GPT Language Model using PyTorch
          </div>
          
          <div className="bg-gray-800 border-b border-gray-600 px-4 py-2 flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-gray-700 px-3 py-1 rounded">
              <span className="text-yellow-400">📄</span>
              <span className="text-tWhiteSec">Description</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-700 px-3 py-1 rounded">
              <span className="text-green-400">✨</span>
              <span className="text-tWhiteSec">Features Implemented</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-700 px-3 py-1 rounded">
              <span className="text-blue-400">🔧</span>
              <span className="text-tWhiteSec">Tech Used</span>
            </div>
          </div>
          
          <div className="p-6 bg-gray-900">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="mb-4">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Developed a custom GPT-like model that generates Shakespearean-style text from scratch at the character level. 
                    Implemented core transformer concepts like self-attention, positional encoding, and deep learning layers in PyTorch. 
                    Demonstrates a strong understanding of how modern generative models function at the architecture level.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-tBlue/20 text-tBlue text-xs rounded">PyTorch</span>
                  <span className="px-2 py-1 bg-tBlue/20 text-tBlue text-xs rounded">Transformers</span>
                  <span className="px-2 py-1 bg-tBlue/20 text-tBlue text-xs rounded">Self-Attention</span>
                  <span className="px-2 py-1 bg-tBlue/20 text-tBlue text-xs rounded">NLP</span>
                  <span className="px-2 py-1 bg-tBlue/20 text-tBlue text-xs rounded">Deep Learning</span>
                  <span className="px-2 py-1 bg-tBlue/20 text-tBlue text-xs rounded">Python</span>
                </div>
              </div>
              
              <div className={`transition-opacity duration-300 ${hoveredProject === 'gpt' ? 'opacity-100' : 'opacity-0'}`}>
                <div className="w-full h-48 bg-gradient-to-br from-purple-900 to-pink-900 rounded border border-purple-500 flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 text-center">
                    <div className="text-2xl mb-2">🧠</div>
                    <span className="text-purple-300 text-lg block mb-2 font-semibold">AI Language Model</span>
                    <div className="text-xs text-purple-200 space-y-1 font-mono">
                      <div className="bg-black/30 px-2 py-1 rounded text-green-300">
                        &gt; "To be or not to be..."
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                        <span>Character-Level Generation</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                        <span>Transformer Architecture</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project 3: Amazon Clone */}
        <div 
          className="border border-yellow-600 rounded-lg overflow-hidden hover:border-tBlue transition-colors group cursor-pointer"
          onMouseEnter={() => setHoveredProject('amazon')}
          onMouseLeave={() => setHoveredProject(null)}
          onClick={() => setHoveredProject(hoveredProject === 'amazon' ? null : 'amazon')}
        >
          <div className="bg-yellow-600 text-black p-3 font-bold text-lg flex items-center">
            <span className="mr-2">📁</span>
            Amazon Clone - E-commerce Platform
          </div>
          
          <div className="p-6 bg-gray-900">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="mb-4">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Full-featured e-commerce website with product browsing, shopping cart, user authentication, 
                    and payment integration. Includes search functionality, product categories, and responsive design 
                    optimized for all devices. Built with modern web technologies and best practices.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-tBlue/20 text-tBlue text-xs rounded">React.js</span>
                  <span className="px-2 py-1 bg-tBlue/20 text-tBlue text-xs rounded">Node.js</span>
                  <span className="px-2 py-1 bg-tBlue/20 text-tBlue text-xs rounded">MongoDB</span>
                  <span className="px-2 py-1 bg-tBlue/20 text-tBlue text-xs rounded">Express.js</span>
                  <span className="px-2 py-1 bg-tBlue/20 text-tBlue text-xs rounded">CSS3</span>
                  <span className="px-2 py-1 bg-tBlue/20 text-tBlue text-xs rounded">JavaScript</span>
                </div>
              </div>
              
              <div className={`transition-opacity duration-300 ${hoveredProject === 'amazon' ? 'opacity-100' : 'opacity-0'}`}>
                <div className="w-full h-48 bg-gradient-to-br from-orange-900 to-yellow-900 rounded border border-orange-500 flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 text-center">
                    <div className="text-2xl mb-2">🛒</div>
                    <span className="text-orange-300 text-lg block mb-2 font-semibold">E-commerce Platform</span>
                    <div className="text-xs text-orange-200 space-y-1">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span>Product Catalog & Search</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        <span>Shopping Cart & Checkout</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                        <span>User Authentication</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project 4: Netflix Clone */}
        <div 
          className="border border-yellow-600 rounded-lg overflow-hidden hover:border-tBlue transition-colors group cursor-pointer"
          onMouseEnter={() => setHoveredProject('netflix')}
          onMouseLeave={() => setHoveredProject(null)}
          onClick={() => setHoveredProject(hoveredProject === 'netflix' ? null : 'netflix')}
        >
          <div className="bg-yellow-600 text-black p-3 font-bold text-lg flex items-center">
            <span className="mr-2">📁</span>
            Netflix Clone - Streaming Platform UI
          </div>
          
          <div className="p-6 bg-gray-900">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="mb-4">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Netflix-inspired streaming platform with movie browsing, trailer playback, and responsive design. 
                    Features dynamic content carousels, hover effects, search functionality, and user profiles. 
                    Integrated with TMDB API for real movie data and modern UI animations.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-tBlue/20 text-tBlue text-xs rounded">React.js</span>
                  <span className="px-2 py-1 bg-tBlue/20 text-tBlue text-xs rounded">TMDB API</span>
                  <span className="px-2 py-1 bg-tBlue/20 text-tBlue text-xs rounded">CSS3</span>
                  <span className="px-2 py-1 bg-tBlue/20 text-tBlue text-xs rounded">JavaScript</span>
                  <span className="px-2 py-1 bg-tBlue/20 text-tBlue text-xs rounded">Firebase</span>
                </div>
              </div>
              
              <div className={`transition-opacity duration-300 ${hoveredProject === 'netflix' ? 'opacity-100' : 'opacity-0'}`}>
                <div className="w-full h-48 bg-gradient-to-br from-red-900 to-black rounded border border-red-500 flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 text-center">
                    <div className="text-2xl mb-2">🎬</div>
                    <span className="text-red-300 text-lg block mb-2 font-semibold">Streaming Platform</span>
                    <div className="text-xs text-red-200 space-y-1">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                        <span>Movie Carousel Interface</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                        <span>Video Preview on Hover</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span>Responsive Dark Theme</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project 5: AI Assistant Chatbot */}
        <div 
          className="border border-yellow-600 rounded-lg overflow-hidden hover:border-tBlue transition-colors group cursor-pointer"
          onMouseEnter={() => setHoveredProject('ai-chat')}
          onMouseLeave={() => setHoveredProject(null)}
          onClick={() => setHoveredProject(hoveredProject === 'ai-chat' ? null : 'ai-chat')}
        >
          <div className="bg-yellow-600 text-black p-3 font-bold text-lg flex items-center">
            <span className="mr-2">📁</span>
            AI Assistant Chatbot
          </div>
          
          <div className="p-6 bg-gray-900">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="mb-4">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Intelligent chatbot with natural language processing capabilities. Features real-time conversation, 
                    context awareness, quick reply options, and integration with AI APIs. Includes typing indicators, 
                    message history, and responsive chat interface optimized for both desktop and mobile.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-tBlue/20 text-tBlue text-xs rounded">React.js</span>
                  <span className="px-2 py-1 bg-tBlue/20 text-tBlue text-xs rounded">NLP</span>
                  <span className="px-2 py-1 bg-tBlue/20 text-tBlue text-xs rounded">AI APIs</span>
                  <span className="px-2 py-1 bg-tBlue/20 text-tBlue text-xs rounded">WebSocket</span>
                  <span className="px-2 py-1 bg-tBlue/20 text-tBlue text-xs rounded">Python</span>
                </div>
              </div>
              
              <div className={`transition-opacity duration-300 ${hoveredProject === 'ai-chat' ? 'opacity-100' : 'opacity-0'}`}>
                <div className="w-full h-48 bg-gradient-to-br from-cyan-900 to-blue-900 rounded border border-cyan-500 flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 text-center">
                    <div className="text-2xl mb-2">🤖</div>
                    <span className="text-cyan-300 text-lg block mb-2 font-semibold">AI Chatbot</span>
                    <div className="text-xs text-cyan-200 space-y-1">
                      <div className="bg-black/30 px-2 py-1 rounded text-green-300 text-xs">
                        "How can I help you today?"
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span>Natural Conversations</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        <span>Real-time Responses</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project 6: Gym & Fitness App */}
        <div 
          className="border border-yellow-600 rounded-lg overflow-hidden hover:border-tBlue transition-colors group cursor-pointer"
          onMouseEnter={() => setHoveredProject('gym')}
          onMouseLeave={() => setHoveredProject(null)}
          onClick={() => setHoveredProject(hoveredProject === 'gym' ? null : 'gym')}
        >
          <div className="bg-yellow-600 text-black p-3 font-bold text-lg flex items-center">
            <span className="mr-2">📁</span>
            Gym & Fitness Tracking App
          </div>
          
          <div className="p-6 bg-gray-900">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="mb-4">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Comprehensive fitness tracking application with workout planning, progress monitoring, and nutrition logging. 
                    Features exercise library with video demonstrations, custom workout routines, goal setting, 
                    and social challenges. Includes wearable device integration and real-time health metrics.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-tBlue/20 text-tBlue text-xs rounded">React Native</span>
                  <span className="px-2 py-1 bg-tBlue/20 text-tBlue text-xs rounded">HealthKit</span>
                  <span className="px-2 py-1 bg-tBlue/20 text-tBlue text-xs rounded">Charts.js</span>
                  <span className="px-2 py-1 bg-tBlue/20 text-tBlue text-xs rounded">Firebase</span>
                  <span className="px-2 py-1 bg-tBlue/20 text-tBlue text-xs rounded">Express.js</span>
                </div>
              </div>
              
              <div className={`transition-opacity duration-300 ${hoveredProject === 'gym' ? 'opacity-100' : 'opacity-0'}`}>
                <div className="w-full h-48 bg-gradient-to-br from-green-900 to-emerald-900 rounded border border-green-500 flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 text-center">
                    <div className="text-2xl mb-2">💪</div>
                    <span className="text-green-300 text-lg block mb-2 font-semibold">Fitness Tracker</span>
                    <div className="text-xs text-green-200 space-y-1">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                        <span>Workout Planning</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                        <span>Progress Analytics</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        <span>Nutrition Tracking</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project 7: Portfolio Website */}
        <div 
          className="border border-yellow-600 rounded-lg overflow-hidden hover:border-tBlue transition-colors group cursor-pointer"
          onMouseEnter={() => setHoveredProject('portfolio')}
          onMouseLeave={() => setHoveredProject(null)}
          onClick={() => setHoveredProject(hoveredProject === 'portfolio' ? null : 'portfolio')}
        >
          <div className="bg-yellow-600 text-black p-3 font-bold text-lg flex items-center">
            <span className="mr-2">📁</span>
            Professional Portfolio Website
          </div>
          
          <div className="p-6 bg-gray-900">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="mb-4">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    A comprehensive portfolio website showcasing my projects, skills, and experience. 
                    Built with modern web technologies and designed with a focus on user experience and performance. 
                    Features responsive design, smooth animations, and optimized for search engines.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-tBlue/20 text-tBlue text-xs rounded">HTML5</span>
                  <span className="px-2 py-1 bg-tBlue/20 text-tBlue text-xs rounded">CSS3</span>
                  <span className="px-2 py-1 bg-tBlue/20 text-tBlue text-xs rounded">JavaScript</span>
                  <span className="px-2 py-1 bg-tBlue/20 text-tBlue text-xs rounded">Responsive Design</span>
                </div>
                
                <div className="flex gap-2 mt-4">
                  <a 
                    href="https://sai3570-je.github.io/Sai-Portfolio/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-tBlue/20 text-tBlue rounded hover:bg-tBlue/30 transition-colors text-sm"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
              
              <div className={`transition-opacity duration-300 ${hoveredProject === 'portfolio' ? 'opacity-100' : 'opacity-0'}`}>
                <div className="w-full h-48 bg-gradient-to-br from-indigo-900 to-purple-900 rounded border border-indigo-500 flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 text-center">
                    <div className="text-2xl mb-2">🌐</div>
                    <span className="text-indigo-300 text-lg block mb-2 font-semibold">Portfolio Website</span>
                    <div className="text-xs text-indigo-200 space-y-1">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span>Responsive Design</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                        <span>Fast Performance</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                        <span>Modern UI/UX</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
