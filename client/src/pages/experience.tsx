import { useState } from 'react';

export default function Experience() {
  const [expandedExp, setExpandedExp] = useState<string | null>(null);
  
  const toggleExpanded = (id: string) => {
    setExpandedExp(expandedExp === id ? null : id);
  };
  
  return (
    <div>
      <h2 className="text-2xl font-bold text-tBlue mb-6">// My experiences :</h2>
      <p className="text-gray-400 text-sm mb-8">(Click on individual experience to get details)</p>
      
      <div className="space-y-6">
        <div 
          className="border border-gray-600 rounded-lg p-6 hover:border-tBlue transition-colors cursor-pointer"
          onClick={() => toggleExpanded('slash-mark')}
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-tWhiteSec mb-2 flex items-center gap-2">
                <span className="text-green-400">⚡</span>
                Full Stack Web Development Intern
              </h3>
              <p className="text-tBlue mb-2">Slash Mark • Current</p>
            </div>
            <div className={`transform transition-transform ${expandedExp === 'slash-mark' ? 'rotate-180' : ''}`}>
              <span className="text-tBlue">▼</span>
            </div>
          </div>
          
          <p className="text-gray-400 text-sm">
            Working on real-time client projects using the MERN stack for scalable applications. 
            Developing responsive web applications and implementing modern development practices.
          </p>
          
          {expandedExp === 'slash-mark' && (
            <div className="mt-4 p-4 bg-gray-800 rounded border-l-4 border-tBlue">
              <h4 className="text-tWhiteSec font-semibold mb-2">Key Responsibilities & Achievements:</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  Building full-stack web applications using MongoDB, Express.js, React.js, and Node.js
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  Implementing responsive designs that work seamlessly across all devices
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  Working directly with client requirements to deliver production-ready solutions
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  Collaborating with team members using Git version control and agile methodologies
                </li>
              </ul>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-tBlue/20 text-tBlue text-xs rounded">React.js</span>
                <span className="px-2 py-1 bg-tBlue/20 text-tBlue text-xs rounded">Node.js</span>
                <span className="px-2 py-1 bg-tBlue/20 text-tBlue text-xs rounded">MongoDB</span>
                <span className="px-2 py-1 bg-tBlue/20 text-tBlue text-xs rounded">Express.js</span>
              </div>
            </div>
          )}
        </div>
        
        <div 
          className="border border-gray-600 rounded-lg p-6 hover:border-tBlue transition-colors cursor-pointer"
          onClick={() => toggleExpanded('ybi')}
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-tWhiteSec mb-2 flex items-center gap-2">
                <span className="text-purple-400">🧠</span>
                AI & ML with Data Science Intern
              </h3>
              <p className="text-tBlue mb-2">YBI Foundation • Dec 2024 – Feb 2025</p>
            </div>
            <div className={`transform transition-transform ${expandedExp === 'ybi' ? 'rotate-180' : ''}`}>
              <span className="text-tBlue">▼</span>
            </div>
          </div>
          
          <p className="text-gray-400 text-sm">
            Trained on real-world datasets and applied ML models using Python. Gained experience in data 
            preprocessing, model training, and implementing machine learning algorithms for practical applications.
          </p>
          
          {expandedExp === 'ybi' && (
            <div className="mt-4 p-4 bg-gray-800 rounded border-l-4 border-purple-400">
              <h4 className="text-tWhiteSec font-semibold mb-2">Key Responsibilities & Achievements:</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Worked with real-world datasets for training and testing machine learning models
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Implemented data preprocessing techniques including cleaning, normalization, and feature engineering
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Applied various ML algorithms including regression, classification, and clustering
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Created data visualizations and analytics dashboards using Python libraries
                </li>
              </ul>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-purple-400/20 text-purple-400 text-xs rounded">Python</span>
                <span className="px-2 py-1 bg-purple-400/20 text-purple-400 text-xs rounded">Pandas</span>
                <span className="px-2 py-1 bg-purple-400/20 text-purple-400 text-xs rounded">Scikit-learn</span>
                <span className="px-2 py-1 bg-purple-400/20 text-purple-400 text-xs rounded">NumPy</span>
              </div>
            </div>
          )}
        </div>
        
        <div 
          className="border border-gray-600 rounded-lg p-6 hover:border-tBlue transition-colors cursor-pointer"
          onClick={() => toggleExpanded('data-pro')}
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-tWhiteSec mb-2 flex items-center gap-2">
                <span className="text-orange-400">☕</span>
                Java Full Stack Developer Intern
              </h3>
              <p className="text-tBlue mb-2">Data Pro • Aug 2023 – Oct 2023</p>
            </div>
            <div className={`transform transition-transform ${expandedExp === 'data-pro' ? 'rotate-180' : ''}`}>
              <span className="text-tBlue">▼</span>
            </div>
          </div>
          
          <p className="text-gray-400 text-sm">
            Gained experience in building backend services and responsive front-end interfaces. 
            Worked with Java technologies to develop full-stack applications and learned enterprise development practices.
          </p>
          
          {expandedExp === 'data-pro' && (
            <div className="mt-4 p-4 bg-gray-800 rounded border-l-4 border-orange-400">
              <h4 className="text-tWhiteSec font-semibold mb-2">Key Responsibilities & Achievements:</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  Developed backend services using Java Spring Boot framework
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  Built responsive front-end interfaces with modern web technologies
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  Learned enterprise development practices and code quality standards
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  Worked with database integration and API development
                </li>
              </ul>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-orange-400/20 text-orange-400 text-xs rounded">Java</span>
                <span className="px-2 py-1 bg-orange-400/20 text-orange-400 text-xs rounded">Spring Boot</span>
                <span className="px-2 py-1 bg-orange-400/20 text-orange-400 text-xs rounded">SQL</span>
                <span className="px-2 py-1 bg-orange-400/20 text-orange-400 text-xs rounded">REST APIs</span>
              </div>
            </div>
          )}
        </div>
        
        {/* Education Section */}
        <div 
          className="border border-gray-600 rounded-lg p-6 hover:border-tBlue transition-colors cursor-pointer mt-8"
          onClick={() => toggleExpanded('education')}
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-tWhiteSec mb-2 flex items-center gap-2">
                <span className="text-blue-400">🎓</span>
                Bachelor of Technology - ECE
              </h3>
              <p className="text-tBlue mb-2">Raghu Institute of Technology • Expected May 2026</p>
            </div>
            <div className={`transform transition-transform ${expandedExp === 'education' ? 'rotate-180' : ''}`}>
              <span className="text-tBlue">▼</span>
            </div>
          </div>
          
          <p className="text-gray-400 text-sm">
            Electronics and Communication Engineering with CGPA: 7.75/10. 
            Strong foundation in core engineering subjects combined with modern software development skills.
          </p>
          
          {expandedExp === 'education' && (
            <div className="mt-4 p-4 bg-gray-800 rounded border-l-4 border-blue-400">
              <h4 className="text-tWhiteSec font-semibold mb-2">Academic Highlights:</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  Current CGPA: 7.75/10 - Consistent academic performance
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  Strong foundation in Electronics, Communication Systems, and Signal Processing
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  Self-taught programming and web development alongside core engineering curriculum
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  Previous Education: Al Ain Juniors School, UAE (Secondary)
                </li>
              </ul>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-400/20 text-blue-400 text-xs rounded">Electronics</span>
                <span className="px-2 py-1 bg-blue-400/20 text-blue-400 text-xs rounded">Communication</span>
                <span className="px-2 py-1 bg-blue-400/20 text-blue-400 text-xs rounded">Signal Processing</span>
                <span className="px-2 py-1 bg-blue-400/20 text-blue-400 text-xs rounded">Engineering Math</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}