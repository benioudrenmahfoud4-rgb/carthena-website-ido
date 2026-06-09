export function About() {
  return (
    <section id="about" className="py-24 bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-brand-beige uppercase tracking-widest text-sm font-semibold mb-4">About Carthena</p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-8 leading-tight">
              Elevating local fashion in Mostaganem.
            </h2>
            <div className="space-y-6 text-zinc-300 font-light leading-relaxed text-lg">
              <p>
                Situated in the beautiful coastal area of Salamendre, Carthena was established to bring a higher standard of clothing to our local community. 
              </p>
              <p>
                We understand that clothing is an investment. That's why every item in our boutique is chosen for its superior craftsmanship, premium fabric, and elegant design. When you shop with us, you are choosing quality that speaks for itself.
              </p>
            </div>
          </div>
          
          <div className="relative h-[500px] w-full hidden md:block border border-brand-beige/20 p-3">
             <div className="relative w-full h-full bg-zinc-900 flex items-center justify-center p-8 text-center text-brand-beige overflow-hidden group">
               <img 
                 src="https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&q=80&w=1000" 
                 alt="Premium Menswear" 
                 className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-700" 
               />
               <div className="absolute inset-0 bg-brand-black/40 mix-blend-multiply"></div>
               <div className="absolute inset-0 border border-brand-beige/20 m-4"></div>
               <div className="relative z-10 font-serif italic text-2xl drop-shadow-md px-6">
                 "Quality you can feel, style you can trust."
                 <br/><br/>
                 <span className="text-sm font-sans uppercase not-italic text-brand-beige tracking-widest">Salamendre, Mostaganem</span>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
