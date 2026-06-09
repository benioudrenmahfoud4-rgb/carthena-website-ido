export function Footer() {
  return (
    <footer className="bg-brand-black dark:bg-zinc-950 text-white pt-16 pb-8 border-t border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <a href="#" className="font-script text-5xl flex items-center tracking-wide mb-6">
              <span className="text-brand-accent drop-shadow-sm">C</span>
              <span className="text-white drop-shadow-sm">arthena</span>
            </a>
            <p className="text-zinc-400 font-light max-w-sm">
              Premium quality clothing boutique located in the heart of Salamendre, Mostaganem.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4 text-brand-beige">Visit</h4>
              <ul className="space-y-2 text-zinc-400 font-light">
                <li>Carthena Boutique</li>
                <li>Salamendre</li>
                <li>Mostaganem</li>
                <li className="pt-2">
                  <a 
                    href="https://maps.app.goo.gl/FmeuRRqZBVQSz7Hk8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-brand-beige transition-colors"
                  >
                    Google Maps
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-brand-beige">Contact</h4>
              <ul className="space-y-2 text-zinc-400 font-light">
                <li>
                  <a href="tel:0774885730" className="hover:text-white transition-colors">0774885730</a>
                </li>
                <li>
                  <a href="https://wa.me/213774885730" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
                </li>
              </ul>
              
              <div className="mt-8 pt-6 border-t border-zinc-800/50">
                <button 
                  onClick={() => {
                    import('../lib/firebase').then(({ auth }) => {
                      import('firebase/auth').then(({ signInWithPopup, GoogleAuthProvider }) => {
                        signInWithPopup(auth, new GoogleAuthProvider());
                      });
                    });
                  }}
                  className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors uppercase tracking-widest"
                >
                  Admin Login
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-zinc-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-zinc-500 font-light text-sm">
          <p>&copy; {new Date().getFullYear()} Carthena. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Salamendre, Mostaganem</p>
        </div>
      </div>
    </footer>
  );
}
