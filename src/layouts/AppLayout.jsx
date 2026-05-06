import React from 'react';
import { Link } from 'react-router-dom';

const NavbarPlaceholder = () => {
  return (
    <nav className="w-full border-b border-slate-800 bg-dark-bg/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-black text-primary tracking-tighter">
          HACKERPULSE
        </Link>
        <div className="flex gap-6">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <Link to="/bookmarks" className="hover:text-primary transition-colors">Bookmarks</Link>
          <Link to="/login" className="hover:text-primary transition-colors">Login</Link>
          <Link to="/register" className="hover:text-primary transition-colors">Register</Link>
        </div>
      </div>
    </nav>
  );
};

const AppLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarPlaceholder />
      <main className="flex-1 flex flex-col items-center justify-center p-8">
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
