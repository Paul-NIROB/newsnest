import React from 'react';
import Navbar from '../components/Navbar';
import Container from '../components/Container';

const AppLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-dark-bg text-dark-text selection:bg-primary selection:text-white">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <footer className="py-12 border-t border-slate-800 bg-slate-900/30">
        <Container className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
              <span className="text-primary font-bold text-xs">HP</span>
            </div>
            <span className="font-black tracking-tighter">HACKERPULSE</span>
          </div>
          <p className="text-sm text-slate-500 max-w-xs mx-auto">
            Your daily dose of tech insights and trending stories from the developer community.
          </p>
          <div className="pt-4 text-xs text-slate-600 font-medium">
            © {new Date().getFullYear()} HackerPulse. Built with Passion.
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default AppLayout;
