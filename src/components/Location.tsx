import { MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function Location() {
  return (
    <section id="location" className="py-24 bg-brand-beige-light dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <div className="order-2 md:order-1 bg-white dark:bg-zinc-900 p-8 lg:p-12 shadow-sm rounded-lg border border-brand-beige-dark/20 dark:border-zinc-800 transition-colors">
            <h3 className="font-serif text-3xl font-semibold text-brand-black dark:text-zinc-100 mb-6 transition-colors">Visit Our Boutique</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-brand-black dark:text-zinc-400 flex-shrink-0 mt-1 mr-4 transition-colors" strokeWidth={1.5} />
                <div>
                  <h4 className="font-semibold text-brand-black dark:text-zinc-100 mb-1 transition-colors">Store Address</h4>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-light transition-colors">
                    Carthena<br />
                    Salamendre<br />
                    Mostaganem
                  </p>
                </div>
              </div>
            </div>

            <motion.a
               whileTap={{ scale: 0.95 }}
              href="https://maps.app.goo.gl/FmeuRRqZBVQSz7Hk8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-brand-black dark:text-zinc-100 font-semibold hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors uppercase tracking-widest text-sm"
            >
              Get Directions <ArrowRight className="ml-2 w-4 h-4" />
            </motion.a>
          </div>

          <div className="order-1 md:order-2 text-center md:text-left">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-brand-black dark:text-zinc-100 mb-6 transition-colors">
              Located in Salamendre
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-8 transition-colors">
              We invite you to visit our store to experience the quality of our clothing firsthand. Browse our latest arrivals and find the perfect pieces for your wardrobe.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
