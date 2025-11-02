import React, { useEffect, useState } from 'react';
import { Instagram, ShoppingBag, Moon, Sun, MessageCircle } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Gallery from './components/Gallery';

function App() {
  const [dark, setDark] = useState(true);
  const [newsletterOpen, setNewsletterOpen] = useState(false);

  useEffect(() => {
    // Dark mode toggle via root class
    if (dark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [dark]);

  useEffect(() => {
    // SEO metadata
    document.title = 'Gifted Ocean Studio | Cosmic Art & Indie Games';
    const ensureMeta = (name, content) => {
      let m = document.querySelector(`meta[name="${name}"]`);
      if (!m) {
        m = document.createElement('meta');
        m.setAttribute('name', name);
        document.head.appendChild(m);
      }
      m.setAttribute('content', content);
    };
    ensureMeta('description', 'A cosmic universe of digital art, tarot, TTRPGs, and indie game design by Gifted Ocean Studio.');
    ensureMeta('theme-color', '#0B0F1A');
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white antialiased">
      {/* Top Nav */}
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#0B0F1A]/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="text-sm font-semibold tracking-widest text-[#D6D6F0]">Gifted Ocean</a>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#projects" className="text-[#D6D6F0] hover:text-white">Projects</a>
            <a href="#gallery" className="text-[#D6D6F0] hover:text-white">Gallery</a>
            <a href="#about" className="text-[#D6D6F0] hover:text-white">About</a>
            <a href="#contact" className="text-[#D6D6F0] hover:text-white">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#shop"
              className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-[#D6D6F0] md:inline-flex"
            >
              <ShoppingBag className="h-3.5 w-3.5" /> Shop
            </a>
            <button
              aria-label="Toggle theme"
              onClick={() => setDark((d) => !d)}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-[#D6D6F0]"
            >
              {dark ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />} {dark ? 'Light' : 'Dark'}
            </button>
          </div>
        </div>
      </header>

      <main>
        <Hero onOpenNewsletter={() => setNewsletterOpen(true)} />
        <About />
        <Projects />
        <Gallery />

        {/* News & Community + Contact */}
        <section id="contact" className="relative w-full bg-[#070b15] py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(110,88,255,0.25),transparent_40%),radial-gradient(circle_at_85%_10%,rgba(214,214,240,0.15),transparent_40%)]" />
          <div className="relative mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-white">News & Community</h3>
              <p className="mt-2 max-w-prose text-[#D6D6F0]">
                Keep up with Kickstarter updates, Instagram art drops, and join the Discord to build with us.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://www.instagram.com/GiftedOcean"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-[#D6D6F0]"
                >
                  <Instagram className="h-4 w-4" /> Instagram
                </a>
                <a
                  href="https://discord.com/invite/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-[#D6D6F0]"
                >
                  <MessageCircle className="h-4 w-4" /> Discord
                </a>
                <a
                  href="https://www.kickstarter.com/profile/GiftedOcean"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-[#D6D6F0]"
                >
                  Kickstarter
                </a>
              </div>
              <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-[#D6D6F0]">
                <div className="mb-2 text-xs uppercase tracking-widest text-[#AAB]">Latest update</div>
                <p>
                  A new playtest build is orbiting soon. Sign up to the newsletter to be first in line.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white">
              <h3 className="text-xl font-semibold">Contact / Collaborate</h3>
              <p className="mt-2 text-sm text-[#D6D6F0]">For commissions, press, or partnerships.</p>
              <form
            	    onSubmit={(e) => { e.preventDefault(); window.location.href = `mailto:hello@giftedocean.studio?subject=${encodeURIComponent('Collaboration Inquiry')}`; }}
                className="mt-4 grid gap-3"
              >
                <input className="rounded-md border border-white/10 bg-[#0B0F1A] px-3 py-2 text-sm outline-none placeholder:text-[#AAB]" placeholder="Your name" required />
                <input type="email" className="rounded-md border border-white/10 bg-[#0B0F1A] px-3 py-2 text-sm outline-none placeholder:text-[#AAB]" placeholder="Your email" required />
                <textarea rows={4} className="rounded-md border border-white/10 bg-[#0B0F1A] px-3 py-2 text-sm outline-none placeholder:text-[#AAB]" placeholder="Tell us about your project" required />
                <button className="mt-1 inline-flex items-center justify-center rounded-md bg-[#6E58FF] px-4 py-2 text-sm font-medium text-white transition hover:brightness-110">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0B0F1A] py-8 text-[#D6D6F0]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center md:flex-row md:text-left">
          <p>© 2025 Gifted Ocean Studio | All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-white">Privacy</a>
            <a href="#terms" className="hover:text-white">Terms</a>
          </div>
        </div>
      </footer>

      {/* Newsletter Modal */}
      {newsletterOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4"
          onClick={() => setNewsletterOpen(false)}
        >
          <div
            className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0B0F1A] p-6 text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-semibold">Join the Cosmos</h3>
            <p className="mt-2 text-sm text-[#D6D6F0]">
              Get updates on releases, playtests, and new art drops. We send thoughtful, infrequent emails.
            </p>
            <form
              action="https://app.convertkit.com/forms/000000/subscriptions"
              method="post"
              className="mt-4 grid gap-3"
            >
              <input type="email" name="email_address" required placeholder="Your email" className="rounded-md border border-white/10 bg-[#0B0F1A] px-3 py-2 text-sm outline-none placeholder:text-[#AAB]" />
              <button className="inline-flex items-center justify-center rounded-md bg-[#6E58FF] px-4 py-2 text-sm font-medium text-white transition hover:brightness-110">
                Subscribe
              </button>
            </form>
            <button onClick={() => setNewsletterOpen(false)} className="mt-3 text-xs text-[#AAB] underline">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
