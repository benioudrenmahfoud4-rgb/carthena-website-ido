import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-zinc-900 transition-colors">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-semibold text-brand-black dark:text-zinc-100 mb-6 transition-colors">Let's Connect</h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-12 transition-colors">
          Looking for a specific item or need assistance? Reach out to us directly via phone or WhatsApp. We are here to help.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <motion.a
            whileTap={{ scale: 0.95 }}
            href="tel:0774885730"
            className="w-full sm:w-auto bg-brand-black dark:bg-zinc-100 text-white dark:text-brand-black px-8 py-5 rounded hover:bg-zinc-800 dark:hover:bg-zinc-300 transition-colors flex items-center justify-center font-medium tracking-wide text-lg"
          >
            <Phone className="w-5 h-5 mr-3" />
            Call 0774885730
          </motion.a>
          
          <motion.a
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/213774885730"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-zinc-100 dark:bg-zinc-800 text-brand-black dark:text-zinc-100 border border-zinc-200 dark:border-zinc-700 px-8 py-5 rounded hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors flex items-center justify-center font-medium tracking-wide text-lg"
          >
            <MessageCircle className="w-5 h-5 mr-3" />
            WhatsApp Us
          </motion.a>
        </div>
      </div>
    </section>
  );
}
