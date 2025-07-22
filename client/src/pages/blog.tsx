export default function Blog() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-tBlue mb-6">// Blog posts :</h2>
      
      <div className="space-y-6">
        <article className="border border-gray-600 rounded-lg p-6 hover:border-tBlue transition-colors">
          <h3 className="text-xl font-semibold text-tWhiteSec mb-2">
            Building Smart IoT Systems: From Arduino to Real-World Applications
          </h3>
          <p className="text-gray-400 text-sm mb-3">
            Published on February 10, 2025 • 7 min read
          </p>
          <p className="text-gray-300 mb-4">
            Explore how to build intelligent IoT systems using Arduino, Raspberry Pi, and computer vision. 
            Learn from my experience developing a smart traffic management system that reduces congestion through AI.
          </p>
          <div className="flex gap-2">
            <span className="px-2 py-1 bg-tBlue/20 text-tBlue text-xs rounded">IoT</span>
            <span className="px-2 py-1 bg-tBlue/20 text-tBlue text-xs rounded">Arduino</span>
            <span className="px-2 py-1 bg-tBlue/20 text-tBlue text-xs rounded">Computer Vision</span>
          </div>
        </article>
        
        <article className="border border-gray-600 rounded-lg p-6 hover:border-tBlue transition-colors">
          <h3 className="text-xl font-semibold text-tWhiteSec mb-2">
            Deep Dive into Transformer Architecture: Building a GPT Model from Scratch
          </h3>
          <p className="text-gray-400 text-sm mb-3">
            Published on January 25, 2025 • 10 min read
          </p>
          <p className="text-gray-300 mb-4">
            A comprehensive guide to understanding and implementing transformer models using PyTorch. 
            Follow along as I build a character-level GPT that generates Shakespearean text.
          </p>
          <div className="flex gap-2">
            <span className="px-2 py-1 bg-tBlue/20 text-tBlue text-xs rounded">AI/ML</span>
            <span className="px-2 py-1 bg-tBlue/20 text-tBlue text-xs rounded">PyTorch</span>
            <span className="px-2 py-1 bg-tBlue/20 text-tBlue text-xs rounded">NLP</span>
          </div>
        </article>
        
        <article className="border border-gray-600 rounded-lg p-6 hover:border-tBlue transition-colors">
          <h3 className="text-xl font-semibold text-tWhiteSec mb-2">
            Full Stack Development with MERN: Best Practices for Scalable Applications
          </h3>
          <p className="text-gray-400 text-sm mb-3">
            Published on January 12, 2025 • 8 min read
          </p>
          <p className="text-gray-300 mb-4">
            Learn essential patterns and practices for building scalable web applications with MongoDB, Express.js, React, and Node.js. 
            Insights from my internship experience working on real-time client projects.
          </p>
          <div className="flex gap-2">
            <span className="px-2 py-1 bg-tBlue/20 text-tBlue text-xs rounded">React</span>
            <span className="px-2 py-1 bg-tBlue/20 text-tBlue text-xs rounded">Node.js</span>
            <span className="px-2 py-1 bg-tBlue/20 text-tBlue text-xs rounded">MongoDB</span>
          </div>
        </article>

        <article className="border border-gray-600 rounded-lg p-6 hover:border-tBlue transition-colors">
          <h3 className="text-xl font-semibold text-tWhiteSec mb-2">
            LeetCode Journey: Solving 150+ Problems and Key Takeaways
          </h3>
          <p className="text-gray-400 text-sm mb-3">
            Published on December 28, 2024 • 6 min read
          </p>
          <p className="text-gray-300 mb-4">
            My competitive programming journey and strategies for solving algorithmic problems efficiently. 
            Tips for data structures, algorithms, and approaching technical interviews with confidence.
          </p>
          <div className="flex gap-2">
            <span className="px-2 py-1 bg-tBlue/20 text-tBlue text-xs rounded">Algorithms</span>
            <span className="px-2 py-1 bg-tBlue/20 text-tBlue text-xs rounded">Data Structures</span>
            <span className="px-2 py-1 bg-tBlue/20 text-tBlue text-xs rounded">Problem Solving</span>
          </div>
        </article>
        
        <div className="text-center py-8">
          <p className="text-gray-400 mb-4">Want to read more?</p>
          <a 
            href="https://sai3570-je.github.io/Sai-Portfolio/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-tBlue/20 text-tBlue rounded-lg hover:bg-tBlue/30 transition-colors"
          >
            Visit My Portfolio
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}