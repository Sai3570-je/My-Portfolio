import { useLocation } from "wouter";
import { useState } from "react";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileNav from "./mobile-nav";

export default function Header() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const getPageTitle = (path: string) => {
    switch (path) {
      case '/': return 'Home';
      case '/about': return 'About';
      case '/experience': return 'Experience';
      case '/projects': return 'Projects';
      case '/contact': return 'Contact';
      case '/blog': return 'Blog';
      default: return 'Home';
    }
  };
  
  const getBreadcrumb = (path: string) => {
    switch (path) {
      case '/': return 'Home';
      case '/about': return 'Home\\About';
      case '/experience': return 'Home\\Experience';
      case '/projects': return 'Home\\Projects';
      case '/contact': return 'Home\\Contact';
      case '/blog': return 'Home\\Blog';
      default: return 'Home';
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex w-full items-center justify-between gap-6 border-[1px] border-black/30 bg-bgBlackSec px-5 py-4 mobileL:px-10">
        <div className="flex w-full max-w-lg items-center gap-2 mobileL:gap-4">
          <p className="text-3xl font-black text-tBlue">S.</p>
          <div className="flex w-full max-w-lg items-center gap-2 rounded-sm border-[1px] border-black/50 bg-bgBlack px-2 py-2 font-medium">
            <p className="flex items-center gap-2">
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-tWhiteSec" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9,22 9,12 15,12 15,22"></polyline>
              </svg>
              <span className="text-sm text-tWhiteSec">{getPageTitle(location)}</span>
            </p>
          </div>
        </div>
        
        {/* Breadcrumb Navigation */}
        <div className="hidden md:flex items-center gap-2 text-sm text-tWhiteSec">
          <span>{getBreadcrumb(location)}</span>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex md:hidden items-center justify-center p-2 rounded-lg hover:bg-bgBlack transition-colors"
          type="button"
          aria-label="Toggle mobile menu"
        >
          <Menu size={20} className="text-tWhiteSec" />
        </button>
        
        {/* Window controls */}
        <div className="hidden items-center justify-center gap-2 md:flex">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-bgBlack shadow hover:bg-gray-600 cursor-pointer transition-colors">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M6 19h12v2H6z"></path>
            </svg>
          </div>
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-bgBlack shadow hover:bg-gray-600 cursor-pointer transition-colors">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 3v10h4V6h6V3H3z M9 16h4V9H9v7z"></path>
            </svg>
          </div>
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-bgBlack shadow hover:bg-red-600 cursor-pointer transition-colors">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
}
