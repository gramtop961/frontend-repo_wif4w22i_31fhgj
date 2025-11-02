import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Gamepad2, ShoppingBag } from 'lucide-react';

const Hero = ({ onOpenNewsletter }) => {
  return (
    <section id="home" className="relative h-[85vh] w-full overflow-hidden bg-[#0B0F1A]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F1A]/30 via-[#0B0F1A]/60 to-[#0B0F1A] pointer-events-none" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
        <p className="mb-3 inline-block rounded-full bg-white/10 px-4 py-1 text-xs tracking-widest text-[#D6D6F0] backdrop-blur-sm">
          Gifted Ocean Studio
        </p>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight">
          Where Art, Story, and Play Converge
        </h1>
        <p className="mt-4 max-w-2xl text-sm md:text-base text-[#D6D6F0]">
          A cosmic, imaginative universe by Osean Wizard — blending digital art, tarot, tabletop RPGs, and indie game design.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-[#6E58FF] px-5 py-2.5 text-sm font-medium text-white transition hover:brightness-110">
            <Rocket className="h-4 w-4 transition group-hover:translate-x-0.5" />
            Explore Our Worlds
          </a>
          <a
            href="https://discord.com/invite/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/90 backdrop-blur-sm transition hover:bg-white/10"
          >
            <Gamepad2 className="h-4 w-4" />
            Join the Discord
          </a>
          <a
            href="#shop"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/90 backdrop-blur-sm transition hover:bg-white/10"
          >
            <ShoppingBag className="h-4 w-4" />
            View Shop
          </a>
          <button
            onClick={onOpenNewsletter}
            className="inline-flex items-center gap-2 rounded-full border border-[#6E58FF]/40 bg-[#6E58FF]/10 px-5 py-2.5 text-sm font-medium text-[#D6D6F0] backdrop-blur-sm transition hover:bg-[#6E58FF]/20"
          >
            Join the Cosmos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
