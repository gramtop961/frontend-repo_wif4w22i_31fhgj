import React from 'react';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
    alt: 'Starfield concept',
  },
  {
    src: 'https://images.unsplash.com/photo-1735150496022-c3946b5064f5?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdGFyZmllbGQlMjBjb25jZXB0fGVufDB8MHx8fDE3NjIwOTA3NjF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Tarot design',
  },
  {
    src: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop',
    alt: '3D render',
  },
  {
    src: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1200&auto=format&fit=crop',
    alt: 'Cosmic waveforms',
  },
  {
    src: 'https://images.unsplash.com/photo-1736018897776-d6bc7ab2da96?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDb3NtaWMlMjB3YXZlZm9ybXN8ZW58MHwwfHx8MTc2MjA5MDc2Mnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Character portrait',
  },
  {
    src: 'https://images.unsplash.com/photo-1664360350114-01e052a6eb52?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDaGFyYWN0ZXIlMjBwb3J0cmFpdHxlbnwwfDB8fHwxNzYyMDkwNzYyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'TTRPG scene',
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="relative w-full bg-[#0B0F1A] py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(110,88,255,0.08),_transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold">Gallery</h2>
          <p className="mt-2 max-w-2xl text-[#D6D6F0]">
            Concept art, tarot designs, 3D renders, and character portraits from the Gifted Universe.
          </p>
        </div>
        <div className="columns-1 gap-4 sm:columns-2 md:columns-3 [column-fill:_balance]">
          {images.map((img) => (
            <div key={img.src} className="mb-4 overflow-hidden rounded-xl border border-white/10">
              <img src={img.src} alt={img.alt} className="h-auto w-full object-cover transition-transform duration-500 hover:scale-[1.03]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
