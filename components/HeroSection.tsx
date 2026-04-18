'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Sparkles, ChevronDown } from 'lucide-react';

const floatingChips = [
  { label: 'ERC-20', delay: 0.6, x: '-10%', y: '20%' },
  { label: 'BEP-20', delay: 0.8, x: '85%', y: '15%' },
  { label: 'Solana SPL', delay: 1.0, x: '78%', y: '65%' },
  { label: 'Base L2', delay: 1.2, x: '-5%', y: '70%' },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 pointer-events-none select-none">
        <motion.div
          animate={{ x: [0, 45, 0], y: [0, -35, 0], scale: [1, 1.12, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[18%] left-[8%] w-[360px] h-[360px] rounded-full bg-blue-600/22 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -35, 0], y: [0, 30, 0], scale: [1.08, 1, 1.08] }}
          transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-[28%] right-[6%] w-[440px] h-[440px] rounded-full bg-sky-500/14 blur-[140px]"
        />
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -18, 0], scale: [1, 1.18, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute bottom-[18%] left-[45%] w-[320px] h-[320px] rounded-full bg-blue-400/10 blur-[110px]"
        />
        <motion.div
          animate={{ opacity: [0.3, 0.65, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-blue-600/5 blur-[180px]"
        />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#080C14]/70" />
      </div>

      {floatingChips.map((chip) => (
        <motion.div
          key={chip.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
          transition={{
            opacity: { duration: 0.5, delay: chip.delay },
            scale: { duration: 0.5, delay: chip.delay },
            y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: chip.delay },
          }}
          className="absolute hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 backdrop-blur-sm"
          style={{ left: chip.x, top: chip.y }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          {chip.label}
        </motion.div>
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-2xl sm:text-4xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-4 sm:mb-6"
        >
          <span className="text-white">Building the Future</span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
            of Web3,
          </span>
          <br />
          <span className="text-white">One Block at a Time</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-gray-400 text-sm sm:text-base lg:text-xl max-w-2xl mx-auto mb-6 sm:mb-10 leading-relaxed"
        >
          A forward-thinking blockchain development company dedicated to building secure, scalable, and innovative decentralized solutions. We empower businesses and startups to seamlessly enter the Web3 ecosystem.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-sky-400 text-white font-semibold text-base px-8 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/45 hover:scale-[1.02] w-full sm:w-auto justify-center"
          >
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            Start Your Project
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-base font-semibold px-8 py-3.5 rounded-xl border border-white/15 text-gray-200 hover:text-white hover:bg-white/7 hover:border-blue-500/40 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto justify-center"
          >
            <Phone className="w-4 h-4" />
            Book a Consultation
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-20 flex items-center justify-center gap-3 text-sm text-gray-500"
        >
          <div className="flex -space-x-2">
            {['A', 'B', 'C', 'D'].map((letter, i) => (
              <div
                key={i}
                className="w-7 h-7 rounded-full border-2 border-[#080C14] bg-gradient-to-br from-blue-500 to-sky-600 flex items-center justify-center text-white text-xs font-bold"
              >
                {letter}
              </div>
            ))}
          </div>
          <span>Trusted by 60+ global clients</span>
          <span className="text-yellow-400 tracking-tight">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1 text-gray-600"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </div>
    </section>
  );
}
