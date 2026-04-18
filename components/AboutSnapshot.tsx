'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Users, Code as Code2, Globe, CircleCheck as CheckCircle2 } from 'lucide-react';

const pillars = [
  { icon: Shield, label: 'Security First', desc: 'Every contract audited before mainnet' },
  { icon: Code2, label: 'Clean Code', desc: 'Gas-optimized, maintainable smart contracts' },
  { icon: Users, label: 'Dedicated Team', desc: 'Senior blockchain engineers end-to-end' },
  { icon: Globe, label: 'Multi-Chain', desc: 'Ethereum, Base, BNB Chain, Solana & more' },
];

const achievements = [
  '60+ blockchain projects delivered globally',
  'Multiple CoinMarketCap-listed token launches',
  'Serving clients across 20+ countries',
  'Full-stack Web3 from contract to frontend',
];

export default function AboutSnapshot() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-[120px] -translate-y-1/2" />
        <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-sky-500/4 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-400 text-sm font-medium mb-5">
              About Luminic Labs
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Advancing India's
              <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
                {' '}Blockchain Revolution
              </span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-6">
              Luminic Labs Pvt Ltd is dedicated to building secure, scalable, and innovative decentralized solutions. With deep technical expertise in token development, smart contract engineering, DApps, and exchange listings, we empower businesses and startups to seamlessly enter the Web3 ecosystem.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              Our vision is to accelerate India's transition into a technology-driven economy by fostering the adoption of next-generation blockchain solutions. We combine deep technical knowledge with market-driven strategies to deliver blockchain products that are not only functional but also future-ready.
            </p>

            <ul className="space-y-3 mb-10">
              {achievements.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group"
            >
              Learn more about us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="relative rounded-3xl border border-white/8 bg-white/[0.025] backdrop-blur-md p-8 overflow-hidden">
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at 70% 20%, rgba(59,130,246,0.07) 0%, transparent 60%)',
                }}
              />

              <div className="grid grid-cols-2 gap-4 mb-6">
                {pillars.map((pillar, i) => (
                  <motion.div
                    key={pillar.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 hover:bg-white/[0.05] hover:border-blue-500/30 transition-all duration-300 group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500/20 to-sky-600/10 border border-blue-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      <pillar.icon className="w-4 h-4 text-blue-400" />
                    </div>
                    <div className="text-white text-sm font-semibold mb-1">{pillar.label}</div>
                    <div className="text-gray-500 text-xs leading-relaxed">{pillar.desc}</div>
                  </motion.div>
                ))}
              </div>

              <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Live on Mainnet</span>
                </div>
                <div className="space-y-3">
                  {[
                    { name: 'RealLink Token', chain: 'ETH', status: 'CMC Listed' },
                    { name: 'IDOL (MEET48)', chain: 'BNB', status: 'CMC Listed' },
                    { name: 'Astra AI', chain: 'ETH', status: 'Mainnet Live' },
                  ].map((project) => (
                    <div key={project.name} className="flex items-center justify-between">
                      <span className="text-sm text-gray-300">{project.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/20">
                          {project.chain}
                        </span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/15 text-green-400 border border-green-500/20">
                          {project.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-blue-500/10 blur-2xl pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-sky-500/8 blur-2xl pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
