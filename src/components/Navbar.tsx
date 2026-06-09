import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from './ThemeProvider';
import { motion } from 'motion/react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed w-full z-50 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-brand-beige dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="font-script text-4xl flex items-center tracking-wide drop-shadow-sm pb-1">
              <span className="text-brand-accent">C</span>
              <span className="text-brand-black dark:text-zinc-100 transition-colors">arthena</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
            <a href="#collections" className="text-zinc-600 dark:text-zinc-400 hover:text-brand-black dark:hover:text-zinc-100 transition-colors">COLLECTIONS</a>
            <a href="#about" className="text-zinc-600 dark:text-zinc-400 hover:text-brand-black dark:hover:text-zinc-100 transition-colors">ABOUT</a>
            <a href="#location" className="text-zinc-600 dark:text-zinc-400 hover:text-brand-black dark:hover:text-zinc-100 transition-colors">VISIT</a>
            <motion.a 
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="bg-brand-black dark:bg-zinc-100 text-white dark:text-brand-black px-6 py-2.5 rounded hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors uppercase text-xs tracking-widest"
            >
              Contact Us
            </motion.a>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-brand-black dark:hover:text-zinc-100 transition-colors focus:outline-none"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </motion.button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-brand-black dark:hover:text-zinc-100 transition-colors focus:outline-none"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-black dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-400 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-zinc-950 border-b border-brand-beige dark:border-zinc-800 transition-colors">
          <div className="px-6 pt-2 pb-6 space-y-4">
            <a href="#collections" className="block text-brand-black dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-400" onClick={() => setIsOpen(false)}>Collections</a>
            <a href="#about" className="block text-brand-black dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-400" onClick={() => setIsOpen(false)}>About</a>
            <a href="#location" className="block text-brand-black dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-400" onClick={() => setIsOpen(false)}>Visit</a>
            <a href="#contact" className="block text-brand-black dark:text-zinc-100 font-semibold" onClick={() => setIsOpen(false)}>Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
}
