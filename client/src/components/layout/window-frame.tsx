import { ReactNode } from 'react';
import Header from './header';
import Sidebar from './sidebar';

interface WindowFrameProps {
  children: ReactNode;
}

export default function WindowFrame({ children }: WindowFrameProps) {
  return (
    <div className="min-h-screen bg-bgBlackSec overflow-x-hidden">
      <Header />
      <Sidebar />
      <div className="pt-[76px] md:pt-[105px] md:pl-[200px] w-full max-w-full">
        <div className="px-3 sm:px-6 py-4 sm:py-8">
          {children}
        </div>
      </div>
    </div>
  );
}
