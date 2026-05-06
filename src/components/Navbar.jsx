import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Home, Bookmark, LogIn, UserPlus, Activity } from 'lucide-react';
import { cn } from '../utils/cn';
import Button from './Button';
import Container from './Container';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Bookmarks', path: '/bookmarks', icon: Bookmark },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-800 bg-dark-bg/80 backdrop-blur-md">
      <Container>
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <Activity className="w-7 h-7" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-white">
              HACKER<span className="text-primary">PULSE</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => cn(
                    "text-sm font-bold transition-all duration-300 flex items-center gap-2 hover:text-primary",
                    isActive ? "text-primary scale-105" : "text-slate-400"
                  )}
                >
                  <link.icon className="w-4 h-4" />
                  {link.name}
                </NavLink>
              ))}
            </div>

            <div className="h-6 w-px bg-slate-800"></div>

            <div className="flex items-center gap-4">
              <Link to="/login">
                <Button variant="ghost" className="font-bold">
                  <LogIn className="w-4 h-4" />
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="primary" size="md">
                  <UserPlus className="w-4 h-4" />
                  Register
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-all"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </Container>

      {/* Mobile Nav Overlay */}
      <div className={cn(
        "fixed inset-0 top-20 z-40 bg-dark-bg md:hidden transition-all duration-300 ease-in-out",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <Container className="py-8 space-y-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => cn(
                  "flex items-center gap-4 p-4 rounded-2xl text-lg font-bold transition-all",
                  isActive 
                    ? "bg-primary/10 text-primary" 
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                )}
              >
                <link.icon className="w-6 h-6" />
                {link.name}
              </NavLink>
            ))}
          </div>
          
          <div className="pt-6 border-t border-slate-800 flex flex-col gap-4">
            <Link to="/login" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-full py-4 text-lg">
                <LogIn className="w-5 h-5" />
                Login
              </Button>
            </Link>
            <Link to="/register" onClick={() => setIsOpen(false)}>
              <Button variant="primary" className="w-full py-4 text-lg">
                <UserPlus className="w-5 h-5" />
                Register
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    </nav>
  );
};

export default Navbar;
