/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Collections } from './components/Collections';
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { Location } from './components/Location';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-brand-black dark:bg-zinc-950 dark:text-zinc-100 selection:bg-brand-beige selection:text-brand-black">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Collections />
        <Gallery />
        <About />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
