import React from 'react';
import { ExternalLink, Star, Rocket } from 'lucide-react';

const projects = [
  {
    title: 'Life After Everything / Astro Oceans',
    tag: 'Tarot + TTRPG',
    desc:
      'A tarot-infused tabletop roleplaying experience navigating dreamlike oceans among the stars.',
    cta: 'Learn More',
    href: '#',
    color: 'from-[#6E58FF]/20 to-[#D6D6F0]/10',
  },
  {
    title: 'Gifted Saga TCG',
    tag: 'Digital Card Game',
    desc:
      'A fast, tactical TCG set in the Gifted Universe. Build decks, discover lore, and duel among constellations.',
    cta: 'Wishlist on Steam',
    href: '#',
    color: 'from-[#D6D6F0]/15 to-[#6E58FF]/10',
  },
  {
    title: 'Breathing Room',
    tag: 'Music + Visual Art',
    desc:
      'An ambient album with generative visuals — a meditative space for creators to recharge and reflect.',
    cta: 'Listen & View',
    href: '#',
    color: 'from-[#6E58FF]/15 to-[#6E58FF]/5',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-[#070b15] py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(110,88,255,0.25),transparent_35%),radial-gradient(circle_at_90%_0%,rgba(214,214,240,0.15),transparent_35%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Projects</h2>
          <div className="hidden items-center gap-2 text-[#D6D6F0] md:flex">
            <Star className="h-4 w-4 text-[#6E58FF]" />
            <span className="text-xs">New worlds are always in orbit</span>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.href}
              className={`group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br ${p.color} p-5 transition hover:brightness-110`}
            >
              <div className="relative z-10">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-widest text-[#D6D6F0]">
                  <Rocket className="h-3 w-3 text-[#6E58FF]" /> {p.tag}
                </div>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-[#D6D6F0]">{p.desc}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm text-[#AAB]">
                  {p.cta} <ExternalLink className="h-4 w-4" />
                </div>
              </div>
              <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-gradient-to-br from-[#6E58FF]/30 to-[#D6D6F0]/10 blur-2xl" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
