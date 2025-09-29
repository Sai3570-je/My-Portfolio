import { 
  FaFolder, 
  FaPython, 
  FaJava, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaDatabase,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaLinux,
  FaCloud,
  FaShieldAlt,
  FaRobot,
  FaBrain,
  FaTools,
  FaVideo,
  FaChartBar,
  FaMicrochip
} from 'react-icons/fa';
import { 
  SiExpress, 
  SiMongodb, 
  SiPytorch, 
  SiFlask, 
  SiArduino, 
  SiRaspberrypi,
  SiOpencv,
  SiTableau
} from 'react-icons/si';
import { IoIosDocument } from 'react-icons/io';

export default function About() {
  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-3 sm:px-4">
        <h2 className="text-xl sm:text-2xl font-bold text-tBlue mb-4 sm:mb-6">// About Me :</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {/* Left side - Code block */}
          <div className="about-left w-full">
            <div className="bg-gray-900 rounded-lg p-2 sm:p-4 lg:p-6 font-mono text-[10px] sm:text-xs lg:text-sm leading-tight sm:leading-relaxed overflow-x-auto max-w-full">
              <pre className="text-gray-300 whitespace-pre min-w-0">
                <code className="block">
                  <span className="text-purple-400">class</span> <span className="text-yellow-400">SaiPanindra</span> {'{'}
                  {'\n'}  <span className="text-purple-400">constructor</span>() {'{'}
                  {'\n'}    <span className="text-purple-400">this</span>.<span className="text-green-400">name</span> = <span className="text-orange-400">"Sai Panindra"</span>;
                  {'\n'}    <span className="text-purple-400">this</span>.<span className="text-green-400">role</span> = <span className="text-orange-400">"ECE Student & Dev"</span>;
                  {'\n'}    <span className="text-purple-400">this</span>.<span className="text-green-400">education</span> = {'{'}
                  {'\n'}      <span className="text-green-400">degree</span>: <span className="text-orange-400">"B.Tech ECE"</span>,
                  {'\n'}      <span className="text-green-400">college</span>: <span className="text-orange-400">"Raghu Institute"</span>,
                  {'\n'}      <span className="text-green-400">year</span>: <span className="text-orange-400">"2022-2026"</span>,
                  {'\n'}      <span className="text-green-400">cgpa</span>: <span className="text-orange-400">"7.75/10"</span>
                  {'\n'}    {'}'};
                  {'\n'}    <span className="text-purple-400">this</span>.<span className="text-green-400">location</span> = <span className="text-orange-400">"India"</span>;
                  {'\n'}    <span className="text-purple-400">this</span>.<span className="text-green-400">passion</span> = [
                  {'\n'}      <span className="text-orange-400">"Full Stack Dev"</span>,
                  {'\n'}      <span className="text-orange-400">"IoT & Embedded"</span>,
                  {'\n'}      <span className="text-orange-400">"AI & ML"</span>,
                  {'\n'}      <span className="text-orange-400">"Problem Solving"</span>
                  {'\n'}    ];
                  {'\n'}  {'}'}
                  {'\n'}
                  {'\n'}  <span className="text-blue-400">getCurrentFocus</span>() {'{'}
                  {'\n'}    <span className="text-purple-400">return</span> [
                  {'\n'}      <span className="text-orange-400">"Scalable web apps"</span>,
                  {'\n'}      <span className="text-orange-400">"MERN Stack"</span>,
                  {'\n'}      <span className="text-orange-400">"IoT projects"</span>,
                  {'\n'}      <span className="text-orange-400">"Deep Learning"</span>
                  {'\n'}    ];
                  {'\n'}  {'}'}
                  {'\n'}
                  {'\n'}  <span className="text-blue-400">getStats</span>() {'{'}
                  {'\n'}    <span className="text-purple-400">return</span> {'{'}
                  {'\n'}      <span className="text-green-400">leetcode</span>: <span className="text-orange-400">"150+ solved"</span>,
                  {'\n'}      <span className="text-green-400">projects</span>: <span className="text-orange-400">"6 major"</span>,
                  {'\n'}      <span className="text-green-400">commits</span>: <span className="text-orange-400">"181+"</span>,
                  {'\n'}      <span className="text-green-400">languages</span>: <span className="text-orange-400">"En,Hi,Te"</span>
                  {'\n'}    {'}'};
                  {'\n'}  {'}'}
                  {'\n'}{'}'}
                </code>
              </pre>
            </div>
          </div>

          {/* Right side - Skills tree */}
          <div className="about-right w-full">
            <div className="bg-gray-900 rounded-lg p-2 sm:p-4 lg:p-6">
              <div className="text-tBlue font-semibold mb-3 sm:mb-4 border-b border-gray-700 pb-2 text-sm sm:text-base">
                Skills & Technologies
              </div>
              
              {/* Programming Languages */}
              <div className="mb-4 sm:mb-6">
                <div className="flex items-center gap-2 text-tWhiteSec font-medium mb-2 sm:mb-3 text-xs sm:text-sm">
                  <FaFolder className="text-yellow-400 text-sm" />
                  <span>Programming Languages</span>
                </div>
                <div className="ml-4 sm:ml-6 space-y-1 sm:space-y-2">
                  <div className="flex items-center gap-3 text-gray-300 hover:text-tBlue transition-colors">
                    <FaPython className="text-blue-400 text-lg" />
                    <span>Python</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 hover:text-tBlue transition-colors">
                    <FaJava className="text-red-500 text-lg" />
                    <span>Java</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 hover:text-tBlue transition-colors">
                    <FaJs className="text-yellow-400 text-lg" />
                    <span>JavaScript</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 hover:text-tBlue transition-colors">
                    <FaHtml5 className="text-orange-500 text-lg" />
                    <span>HTML5</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 hover:text-tBlue transition-colors">
                    <FaCss3Alt className="text-blue-500 text-lg" />
                    <span>CSS3</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 hover:text-tBlue transition-colors">
                    <FaDatabase className="text-green-400 text-lg" />
                    <span>SQL</span>
                  </div>
                </div>
              </div>

              {/* Frameworks & Libraries */}
              <div className="mb-4 sm:mb-6">
                <div className="flex items-center gap-2 text-tWhiteSec font-medium mb-2 sm:mb-3 text-xs sm:text-sm">
                  <FaFolder className="text-yellow-400 text-sm" />
                  <span>Frameworks & Libraries</span>
                </div>
                <div className="ml-4 sm:ml-6 space-y-1 sm:space-y-2">
                  <div className="flex items-center gap-3 text-gray-300 hover:text-tBlue transition-colors">
                    <FaReact className="text-cyan-400 text-lg" />
                    <span>React.js</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 hover:text-tBlue transition-colors">
                    <FaNodeJs className="text-green-500 text-lg" />
                    <span>Node.js</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 hover:text-tBlue transition-colors">
                    <SiExpress className="text-gray-400 text-lg" />
                    <span>Express.js</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 hover:text-tBlue transition-colors">
                    <SiMongodb className="text-green-600 text-lg" />
                    <span>MongoDB</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 hover:text-tBlue transition-colors">
                    <SiPytorch className="text-orange-500 text-lg" />
                    <span>PyTorch</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 hover:text-tBlue transition-colors">
                    <SiFlask className="text-gray-300 text-lg" />
                    <span>Flask</span>
                  </div>
                </div>
              </div>

              {/* AI/ML & IoT */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-tWhiteSec font-medium mb-3">
                  <FaFolder className="text-yellow-400" />
                  <span>AI/ML & IoT</span>
                </div>
                <div className="ml-6 space-y-2">
                  <div className="flex items-center gap-3 text-gray-300 hover:text-tBlue transition-colors">
                    <FaRobot className="text-purple-400 text-lg" />
                    <span>Machine Learning</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 hover:text-tBlue transition-colors">
                    <FaBrain className="text-pink-400 text-lg" />
                    <span>Artificial Intelligence</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 hover:text-tBlue transition-colors">
                    <IoIosDocument className="text-blue-300 text-lg" />
                    <span>Natural Language Processing</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 hover:text-tBlue transition-colors">
                    <SiArduino className="text-teal-400 text-lg" />
                    <span>Arduino & Raspberry Pi</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 hover:text-tBlue transition-colors">
                    <SiRaspberrypi className="text-red-400 text-lg" />
                    <span>IoT Systems</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 hover:text-tBlue transition-colors">
                    <SiOpencv className="text-green-400 text-lg" />
                    <span>OpenCV</span>
                  </div>
                </div>
              </div>

              {/* Tools & Domains */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-tWhiteSec font-medium mb-3">
                  <FaFolder className="text-yellow-400" />
                  <span>Tools & Domains</span>
                </div>
                <div className="ml-6 space-y-2">
                  <div className="flex items-center gap-3 text-gray-300 hover:text-tBlue transition-colors">
                    <FaGitAlt className="text-orange-500 text-lg" />
                    <span>Git & GitHub</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 hover:text-tBlue transition-colors">
                    <FaLinux className="text-yellow-300 text-lg" />
                    <span>Linux</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 hover:text-tBlue transition-colors">
                    <SiTableau className="text-blue-400 text-lg" />
                    <span>Tableau</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 hover:text-tBlue transition-colors">
                    <FaCloud className="text-sky-400 text-lg" />
                    <span>Cloud Computing</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 hover:text-tBlue transition-colors">
                    <FaShieldAlt className="text-green-500 text-lg" />
                    <span>Cyber Security</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 hover:text-tBlue transition-colors">
                    <FaMicrochip className="text-gray-400 text-lg" />
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

