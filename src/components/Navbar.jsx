import React, { useState, useEffect } from 'react';
import { ShoppingBag, User, Search, Menu, X, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const Navbar = ({ onLogout }) => {
  const { user } = useUser();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'SERVICES', path: '/#services' },
    { name: 'CONTACT', path: '/#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white py-4 shadow-xl' : 'bg-transparent py-6'
    }`}>
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className={`text-2xl font-serif font-bold tracking-tighter ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}>S/J</span>
              <div className="flex flex-col gap-0.5">
                <div className="w-4 h-1 bg-accent"></div>
                <div className="w-4 h-1 bg-accent-orange"></div>
                <div className="w-4 h-1 bg-primary"></div>
              </div>
            </div>
            <span className={`text-[10px] font-bold tracking-[0.3em] uppercase ${
              isScrolled ? 'text-primary/70' : 'text-white/70'
            }`}>INTERIORS</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className={`text-xs font-bold tracking-widest hover:text-accent transition-colors ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <Link
            to="/checkout"
            className={`px-8 py-3 text-xs font-black tracking-widest transition-all ${
              isScrolled 
                ? 'bg-primary text-white hover:bg-primary-dark' 
                : 'bg-accent text-primary hover:bg-white'
            }`}
          >
            REQUEST QUOTE
          </Link>
        </div>

        {/* Icons */}
        <div className={`hidden md:flex items-center gap-6 ${isScrolled ? 'text-primary' : 'text-white'}`}>
          <Search size={20} className="cursor-pointer hover:text-accent transition-colors" />
          <Link to="/profile" className="flex items-center gap-3 group">
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-black tracking-widest uppercase opacity-40 group-hover:opacity-100 transition-opacity">Member</span>
              <span className="text-[11px] font-serif font-black tracking-tight">{user.name}</span>
            </div>
            <User size={20} className="cursor-pointer hover:text-accent transition-colors translate-y-[-1px]" />
          </Link>
          <Link to="/checkout" className="relative group mr-4">
            <ShoppingBag size={20} className="cursor-pointer group-hover:text-accent transition-colors" />
            <span className="absolute -top-2 -right-2 w-4 h-4 bg-accent-orange text-[9px] flex items-center justify-center rounded-full text-white font-black shadow-lg">2</span>
          </Link>
          <button 
            onClick={onLogout}
            className="flex items-center gap-2 text-[10px] font-black tracking-widest hover:text-accent-orange transition-colors uppercase border-l border-primary/10 pl-6 ml-2"
          >
            <LogOut size={16} />
            <span>EXIT</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X size={28} className={isScrolled ? 'text-primary' : 'text-white'} />
          ) : (
            <Menu size={28} className={isScrolled ? 'text-primary' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-full left-0 w-full bg-white shadow-2xl py-12 transition-all duration-500 overflow-hidden ${
        isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="container flex flex-col gap-8 items-center text-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-primary text-lg font-serif font-bold tracking-widest hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Link
            to="/checkout"
            className="bg-primary text-accent px-12 py-4 text-sm font-black tracking-widest shadow-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            REQUEST QUOTE
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
