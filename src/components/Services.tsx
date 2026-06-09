import { Building, Sparkles, Shirt } from 'lucide-react';

const services = [
  {
    title: 'Superior Quality Men\'s Clothing',
    description: 'We pride ourselves on offering only the finest materials, ensuring every garment provides both exceptional comfort and long-lasting durability.',
    icon: Shirt,
  },
  {
    title: 'Curated Timeless Collections',
    description: 'Our selections are carefully chosen to reflect modern elegance while maintaining classic appeal, perfect for any occasion.',
    icon: Sparkles,
  },
  {
    title: 'Premium Boutique Experience',
    description: 'Located in Salamendre, we provide a personalized shopping environment tailored to help you find precisely what you are looking for.',
    icon: Building,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-brand-black dark:text-zinc-100 mb-6 transition-colors">Our Commitment to Quality</h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed font-light transition-colors">
            Carthena is built on the belief that everyday clothing should feel extraordinary. We source and sell pieces that elevate your wardrobe.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-brand-beige-light dark:bg-zinc-900 rounded-full flex items-center justify-center mb-6 transition-colors">
                <service.icon className="w-8 h-8 text-brand-black dark:text-zinc-100 transition-colors" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl font-medium text-brand-black dark:text-zinc-100 mb-4 transition-colors">{service.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-light transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
