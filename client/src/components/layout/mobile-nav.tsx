import { Link, useLocation } from "wouter";
import { Home, FileText, Star, Folder, Phone, BookOpen, X } from "lucide-react";
import { useEffect } from "react";

const navigationItems = [
  { path: '/', icon: Home, label: 'Home' },
  { path: '/about', icon: FileText, label: 'About' },
  { path: '/experience', icon: Star, label: 'Experience' },
  { path: '/projects', icon: Folder, label: 'Projects' },
  { path: '/contact', icon: Phone, label: 'Contact' },
  { path: '/blog', icon: BookOpen, label: 'Blog' },
];

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [location] = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
  }, [location, onClose, isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'block' : 'hidden'} md:hidden`}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />
      
      {/* Mobile Navigation Panel */}
      <div className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-bgBlack border-l border-black/30 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-black/30">
          <h2 className="text-lg font-semibold text-tWhiteSec">Navigation</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-bgBlackSec transition-colors"
            type="button"
          >
            <X size={20} className="text-gray-400" />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="py-4">
          {navigationItems.map((item) => {
            const isActive = location === item.path;
            const Icon = item.icon;
            
            return (
              <Link key={item.path} href={item.path}>
                <div className={`flex items-center gap-4 py-4 px-6 cursor-pointer hover:bg-bgBlackSec transition-colors ${
                  isActive ? 'bg-bgBlackSec border-r-2 border-tBlue' : ''
                }`}>
                  <Icon 
                    size={20} 
                    className={isActive ? 'text-tBlue' : 'text-gray-400'} 
                  />
                  <span className={`text-base ${isActive ? 'text-tWhiteSec font-medium' : 'text-gray-400'}`}>
                    {item.label}
                  </span>
                </div>
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-black/30">
          <p className="text-xs text-gray-500 text-center">
            Sai Panindra Pechetti
          </p>
        </div>
      </div>
    </div>
  );
}