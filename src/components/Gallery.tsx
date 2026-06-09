import { Instagram } from 'lucide-react';

export function Gallery() {
  return (
    <section className="py-24 bg-white dark:bg-zinc-950 border-t border-brand-beige-light dark:border-zinc-800 border-b transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-brand-black dark:text-zinc-100 mb-4 transition-colors">Carthena Instagram</h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg font-light leading-relaxed transition-colors">Follow us for the latest arrivals, styling inspiration, and an inside look at our premium collection in Mostaganem.</p>
          </div>
          <a
            href="https://www.instagram.com/carthena_boutique27"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 md:mt-0 flex items-center gap-2 text-sm font-semibold text-brand-black dark:text-zinc-100 uppercase tracking-widest hover:text-brand-beige-dark dark:hover:text-zinc-400 transition-colors"
          >
            <Instagram className="w-4 h-4" />
            @carthena_boutique27
          </a>
        </div>
      </div>
    </section>
  );
}
