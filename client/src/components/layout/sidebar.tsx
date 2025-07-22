import { Link, useLocation } from "wouter";
import { Home, FileText, Star, Folder, Phone, BookOpen } from "lucide-react";

const navigationItems = [
  { path: '/', icon: Home, label: 'Home' },
  { path: '/about', icon: FileText, label: 'About' },
  { path: '/experience', icon: Star, label: 'Experience' },
  { path: '/projects', icon: Folder, label: 'Projects' },
  { path: '/contact', icon: Phone, label: 'Contact' },
  { path: '/blog', icon: BookOpen, label: 'Blog' },
];

export default function Sidebar() {
  const [location] = useLocation();

  return (
    <div className="fixed top-[76px] bottom-0 left-0 z-50 w-[200px] bg-bgBlack border-r border-black/30 hidden md:flex flex-col">
      <nav className="flex-1 py-4">
        {navigationItems.map((item) => {
          const isActive = location === item.path;
          const Icon = item.icon;
          
          return (
            <Link key={item.path} href={item.path}>
              <div className={`flex w-[200px] items-center gap-3 py-3 pl-4 cursor-pointer hover:bg-bgBlackSec transition-colors ${
                isActive ? 'bg-bgBlackSec' : ''
              }`}>
                <Icon 
                  size={16} 
                  className={isActive ? 'text-tBlue' : 'text-gray-400'} 
                />
                <span className={`text-sm ${isActive ? 'text-tWhiteSec' : 'text-gray-400'}`}>
                  {item.label}
                </span>
              </div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
