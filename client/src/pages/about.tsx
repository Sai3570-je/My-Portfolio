export default function About() {
  return (
    <div className="min-h-screen bg-bgBlack text-tWhiteSec p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-tBlue mb-6">// About Me :</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side - Code block */}
          <div className="about-left">
            <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm leading-relaxed">
              <pre className="text-gray-300">
                <code>
                  <span className="text-purple-400">class</span> <span className="text-yellow-400">SaiPanindra</span> {'{'}
                  {'\n'}  <span className="text-purple-400">constructor</span>() {'{'}
                  {'\n'}    <span className="text-purple-400">this</span>.<span className="text-green-400">name</span> = <span className="text-orange-400">"Sai Panindra Pechetti"</span>;
                  {'\n'}    <span className="text-purple-400">this</span>.<span className="text-green-400">role</span> = <span className="text-orange-400">"ECE Student & Full Stack Developer"</span>;
                  {'\n'}    <span className="text-purple-400">this</span>.<span className="text-green-400">education</span> = {'{'}
                  {'\n'}      <span className="text-green-400">degree</span>: <span className="text-orange-400">"B.Tech Electronics & Communication Engineering"</span>,
                  {'\n'}      <span className="text-green-400">college</span>: <span className="text-orange-400">"Raghu Institute of Technology"</span>,
                  {'\n'}      <span className="text-green-400">year</span>: <span className="text-orange-400">"Final Year (2022-2026)"</span>,
                  {'\n'}      <span className="text-green-400">cgpa</span>: <span className="text-orange-400">"7.75/10"</span>
                  {'\n'}    {'}'};
                  {'\n'}    <span className="text-purple-400">this</span>.<span className="text-green-400">location</span> = <span className="text-orange-400">"India"</span>;
                  {'\n'}    <span className="text-purple-400">this</span>.<span className="text-green-400">passion</span> = [
                  {'\n'}      <span className="text-orange-400">"Full Stack Development"</span>,
                  {'\n'}      <span className="text-orange-400">"IoT & Embedded Systems"</span>,
                  {'\n'}      <span className="text-orange-400">"AI & Machine Learning"</span>,
                  {'\n'}      <span className="text-orange-400">"Problem Solving"</span>
                  {'\n'}    ];
                  {'\n'}  {'}'}
                  {'\n'}
                  {'\n'}  <span className="text-blue-400">getCurrentFocus</span>() {'{'}
                  {'\n'}    <span className="text-purple-400">return</span> [
                  {'\n'}      <span className="text-orange-400">"Building scalable web applications"</span>,
                  {'\n'}      <span className="text-orange-400">"MERN Stack development"</span>,
                  {'\n'}      <span className="text-orange-400">"IoT projects with Arduino & Raspberry Pi"</span>,
                  {'\n'}      <span className="text-orange-400">"Deep Learning with PyTorch"</span>
                  {'\n'}    ];
                  {'\n'}  {'}'}
                  {'\n'}
                  {'\n'}  <span className="text-blue-400">getStats</span>() {'{'}
                  {'\n'}    <span className="text-purple-400">return</span> {'{'}
                  {'\n'}      <span className="text-green-400">leetcodeProblems</span>: <span className="text-orange-400">"150+ solved"</span>,
                  {'\n'}      <span className="text-green-400">totalProjects</span>: <span className="text-orange-400">"6 major projects"</span>,
                  {'\n'}      <span className="text-green-400">githubCommits</span>: <span className="text-orange-400">"181+ commits"</span>,
                  {'\n'}      <span className="text-green-400">languages</span>: <span className="text-orange-400">"English, Hindi, Telugu"</span>
                  {'\n'}    {'}'};
                  {'\n'}  {'}'}
                  {'\n'}{'}'}
                </code>
              </pre>
            </div>
          </div>

          {/* Right side - Skills tree */}
          <div className="about-right">
            <div className="bg-gray-900 rounded-lg p-6">
              <div className="text-tBlue font-semibold mb-4 border-b border-gray-700 pb-2">
                Skills & Technologies
              </div>
              
              {/* Programming Languages */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-tWhiteSec font-medium mb-3">
                  <span>📂</span>
                  <span>Programming Languages</span>
                </div>
                <div className="ml-6 space-y-2">
                  <div className="flex items-center gap-2 text-gray-300">
                    <span>📄</span>
                    <span>Python</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <span>📄</span>
                    <span>Java</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <span>📄</span>
                    <span>JavaScript</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <span>📄</span>
                    <span>HTML5</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <span>📄</span>
                    <span>CSS3</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <span>📄</span>
                    <span>SQL</span>
                  </div>
                </div>
              </div>

              {/* Frameworks & Libraries */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-tWhiteSec font-medium mb-3">
                  <span>📂</span>
                  <span>Frameworks & Libraries</span>
                </div>
                <div className="ml-6 space-y-2">
                  <div className="flex items-center gap-2 text-gray-300">
                    <span>⚛️</span>
                    <span>React.js</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <span>🟢</span>
                    <span>Node.js</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <span>🚀</span>
                    <span>Express.js</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <span>🍃</span>
                    <span>MongoDB</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <span>🔥</span>
                    <span>PyTorch</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <span>🌐</span>
                    <span>Flask</span>
                  </div>
                </div>
              </div>

              {/* AI/ML & IoT */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-tWhiteSec font-medium mb-3">
                  <span>📂</span>
                  <span>AI/ML & IoT</span>
                </div>
                <div className="ml-6 space-y-2">
                  <div className="flex items-center gap-2 text-gray-300">
                    <span>🤖</span>
                    <span>Machine Learning</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <span>🧠</span>
                    <span>Artificial Intelligence</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <span>📝</span>
                    <span>Natural Language Processing</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <span>🔧</span>
                    <span>Arduino & Raspberry Pi</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <span>🌐</span>
                    <span>IoT Systems</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <span>📹</span>
                    <span>OpenCV</span>
                  </div>
                </div>
              </div>

              {/* Tools & Domains */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-tWhiteSec font-medium mb-3">
                  <span>📂</span>
                  <span>Tools & Domains</span>
                </div>
                <div className="ml-6 space-y-2">
                  <div className="flex items-center gap-2 text-gray-300">
                    <span>🔧</span>
                    <span>Git & GitHub</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <span>🐧</span>
                    <span>Linux</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <span>📊</span>
                    <span>Tableau</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <span>☁️</span>
                    <span>Cloud Computing</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <span>🔒</span>
                    <span>Cyber Security</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <span>💡</span>
                    <span>VLSI Design</span>
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

