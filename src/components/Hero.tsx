import { MapPin, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-brand-beige-light dark:bg-zinc-950 overflow-hidden transition-colors">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1593030761757-71fae46af504?auto=format&fit=crop&q=80&w=2000" 
          alt="Premium Men's Clothing" 
          className="object-cover w-full h-full opacity-15 dark:opacity-5" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-beige-light/40 dark:from-zinc-950/40 to-brand-beige-light dark:to-zinc-950"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="font-serif text-5xl md:text-7xl font-semibold text-brand-black dark:text-zinc-100 tracking-tight mb-8 transition-colors">
          Premium Quality <br className="hidden md:block" />
          <span className="italic text-zinc-600 dark:text-zinc-400 transition-colors">Men's Clothing</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-12 font-light leading-relaxed transition-colors">
          Discover a curated collection of superior quality men's clothing in the heart of Salamendre. Elegance, durability, and timeless style.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <motion.a
            whileTap={{ scale: 0.95 }}
            href="https://maps.app.goo.gl/FmeuRRqZBVQSz7Hk8"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-brand-black dark:bg-zinc-100 text-white dark:text-brand-black px-8 py-4 rounded hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors flex items-center justify-center font-medium tracking-wide"
          >
            <MapPin className="w-5 h-5 mr-2" />
            Visit Boutique
          </motion.a>
          <motion.a
            whileTap={{ scale: 0.95 }}
            href="tel:0774885730"
            className="w-full sm:w-auto bg-white dark:bg-zinc-900 text-brand-black dark:text-zinc-100 border border-brand-beige-dark dark:border-zinc-700 px-8 py-4 rounded hover:bg-brand-beige-light dark:hover:bg-zinc-800 transition-colors flex items-center justify-center font-medium tracking-wide"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call Us
          </motion.a>
        </div>
        
        <div className="mt-16 pt-8 border-t border-brand-beige-dark/30 dark:border-zinc-800 max-w-md mx-auto transition-colors">
          <p className="text-sm font-medium text-brand-black dark:text-zinc-200 uppercase tracking-widest mb-1 transition-colors">Located In</p>
          <p className="text-zinc-600 dark:text-zinc-400 transition-colors">Salamendre, Mostaganem</p>
        </div>
      </div>
    </section>
  );
}
