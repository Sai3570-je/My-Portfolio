import { useState } from 'react';

export default function Home() {
  const [showHoverMenu, setShowHoverMenu] = useState(false);

  const handleDownloadCV = () => {
    // Create a CV download link with actual resume content
    const cvContent = `SAI PANINDRA PECHETTI
+91-7095088395 | trainwithjk26@gmail.com | https://www.linkedin.com/in/sai-088083344/

EDUCATION
Bachelor of Technology in Electronics and Communication Engineering (Expected: May 2026)
Raghu Institute of Technology | CGPA: 7.75/10

SKILLS
Languages: Python, Java, JavaScript, HTML, CSS, SQL
Web/Tools: React.js, Node.js, Express.js, MongoDB, Git, Linux, Tableau
AI/ML: Machine Learning, Artificial Intelligence, NLP
Core CS: Data Structures and Algorithms, Object-Oriented Programming (OOP)
Technologies: Cloud Computing, Embedded Systems, IoT, Cyber Security, VLSI Design

EXPERIENCE
Slash Mark - Full Stack Web Development (Current)
YBI Foundation - AI & ML with Data Science (Dec 2024 – Feb 2025)
Data Pro - Java Full Stack Developer (Aug 2023 – Oct 2023)

PROJECTS
• Smart Traffic Management System using IoT & AI
• Character-Level GPT Language Model using PyTorch

CERTIFICATIONS
• Developer and Technology Job Simulation – Accenture
• Data Visualisation: Empowering Business with Effective Insights – TATA
• Python for Data Science – IBM
• AI for Beginners – HP Foundation`;
    
    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Sai_Panindra_Pechetti_CV.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleOpenBlog = () => {
    // Open portfolio site
    window.open('https://sai3570-je.github.io/Sai-Portfolio/', '_blank');
  };

  return (
    <div className="flex items-center justify-center min-h-[500px]">
      <div className="text-center">
        <div className="mb-6">
          <p className="text-sm text-gray-400 mb-2">Hello! I am</p>
          <h1 className="text-4xl font-bold text-tWhiteSec mb-2">Sai Panindra Pechetti</h1>
          <p className="text-xl text-tBlue">Full Stack Developer</p>
        </div>
        
        <div className="mt-12">
          <p className="text-sm text-gray-400 mb-4">// write a code below to continue</p>
          <div className="flex items-center justify-center gap-2">
            <span className="text-tBlue">{">"}</span>
            <input 
              type="text" 
              placeholder="whois" 
              value="whois"
              className="bg-transparent text-tWhiteSec placeholder-gray-500 border-none outline-none text-lg font-mono max-w-[240px] caret-tBlue"
              readOnly
            />
          </div>
          
          {/* Hover functionality for CV and Blog buttons */}
          <div className="relative mt-4 group">
            <div 
              className="cursor-pointer text-tBlue hover:text-white transition-colors"
              onMouseEnter={() => setShowHoverMenu(true)}
              onMouseLeave={() => setShowHoverMenu(false)}
            >
              <span className="flex items-center justify-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="3"/>
                </svg>
                Hover to get the code
              </span>
            </div>
            
            {/* Hidden buttons that appear on hover */}
            {showHoverMenu && (
              <div 
                className="absolute top-8 left-1/2 transform -translate-x-1/2 flex flex-col gap-2 bg-black/90 backdrop-blur-sm rounded-lg p-3 shadow-xl border border-gray-700 min-w-[200px]"
                onMouseEnter={() => setShowHoverMenu(true)}
                onMouseLeave={() => setShowHoverMenu(false)}
              >
                <button 
                  onClick={handleDownloadCV}
                  className="px-4 py-2 text-sm text-tWhiteSec hover:text-tBlue transition-colors text-left border border-gray-600 rounded"
                >
                  📄 Download CV
                </button>
                <button 
                  onClick={handleOpenBlog}
                  className="px-4 py-2 text-sm text-tWhiteSec hover:text-tBlue transition-colors text-left border border-gray-600 rounded"
                >
                  🌐 My Portfolio Site
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
