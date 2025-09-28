import { useState } from 'react';

export default function Home() {
  const [showHoverMenu, setShowHoverMenu] = useState(false);

  const handleDownloadCV = () => {
    // Download the actual PDF resume
    const link = document.createElement('a');
    link.href = '/Sai_Panindra_Pechetti_Resume.pdf';
    link.download = 'Sai_Panindra_Pechetti_Resume.pdf';
    link.target = '_blank';
    link.click();
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
