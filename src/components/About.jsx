import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-[#0B0F1A] py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#6E58FF]/10 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">About the Studio</h2>
            <p className="mt-4 text-[#D6D6F0]">
              Founded by <span className="font-medium text-white">Osean Wizard</span>, Gifted Ocean Studio blends digital art, music, and game design into immersive experiences. We build tools and worlds that empower creators, storytellers, and dreamers.
            </p>
            <p className="mt-4 text-[#D6D6F0]">
              From tarot-infused tabletop systems to indie game prototypes and visual music albums, we explore the spaces where inspiration meets play.
            </p>
          </div>
          <div className="relative h-64 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#0B0F1A] via-[#11162a] to-[#1a1f35] p-0 shadow-xl md:h-80">
            <div className="pointer-events-none absolute inset-0 opacity-70" style={{background: 'conic-gradient(from 180deg at 50% 50%, rgba(110,88,255,0.25), rgba(214,214,240,0.12), rgba(110,88,255,0.25))'}} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-widest text-[#D6D6F0] backdrop-blur">
                Cosmic Illustration Placeholder
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
