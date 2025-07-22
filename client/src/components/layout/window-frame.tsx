import { ReactNode } from 'react';
import Header from './header';
import Sidebar from './sidebar';

interface WindowFrameProps {
  children: ReactNode;
}

export default function WindowFrame({ children }: WindowFrameProps) {
  return (
    <div className="min-h-screen bg-bgBlackSec">
      <Header />
      <Sidebar />
      <div className="pt-[105px] md:pl-[200px] min-h-screen">
        <div className="px-6 py-8">
          {children}
        </div>
      </div>
    </div>
  );
}
