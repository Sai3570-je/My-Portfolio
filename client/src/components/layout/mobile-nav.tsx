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

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] md:hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Mobile Navigation Panel */}
      <div className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-bgBlack border-l border-gray-700 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-lg font-semibold text-tWhiteSec">Navigation</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
            type="button"
            aria-label="Close menu"
          >
            <X size={20} className="text-gray-400" />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="py-4 overflow-y-auto">
          {navigationItems.map((item) => {
            const isActive = location === item.path;
            const Icon = item.icon;
            
            return (
              <div key={item.path}>
                <Link href={item.path}>
                  <div 
                    className={`flex items-center gap-4 py-4 px-6 cursor-pointer hover:bg-gray-800 transition-colors ${
                      isActive ? 'bg-gray-800 border-r-2 border-tBlue' : ''
                    }`}
                    onClick={onClose}
                  >
                    <Icon 
                      size={20} 
                      className={isActive ? 'text-tBlue' : 'text-gray-400'} 
                    />
                    <span className={`text-base ${isActive ? 'text-tWhiteSec font-medium' : 'text-gray-400'}`}>
                      {item.label}
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700 bg-bgBlack">
          <p className="text-xs text-gray-500 text-center">
            Sai Panindra Pechetti
          </p>
        </div>
      </div>
    </div>
  );
}