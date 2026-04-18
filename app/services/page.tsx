'use client';

import { motion } from 'framer-motion';
import { Code, Zap, Network, TrendingUp, BookOpen, Smartphone } from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'Token Development',
    description: 'Launch your own cryptocurrency or utility token on leading blockchains like Ethereum, BNB Chain, or Solana.',
    features: ['Custom tokenomics', 'Security audits', 'Multi-chain support']
  },
  {
    icon: Code,
    title: 'Smart Contract Development',
    description: 'Secure, audited, and efficient smart contracts tailored to your business logic.',
    features: ['Solidity expertise', 'Gas optimization', 'Security audits']
  },
  {
    icon: Smartphone,
    title: 'DApp Development',
    description: 'Build decentralized applications with seamless UI/UX and powerful backend logic.',
    features: ['Web3 integration', 'User-friendly design', 'Scalable architecture']
  },
  {
    icon: TrendingUp,
    title: 'Exchange Listings',
    description: 'Get your token listed on top centralized and decentralized exchanges with our end-to-end support.',
    features: ['CEX listings', 'DEX integration', 'Liquidity management']
  },
  {
    icon: BookOpen,
    title: 'Blockchain Consulting',
    description: 'Not sure where to start? We guide you from idea to execution with expert advisory.',
    features: ['Strategy planning', 'Tech roadmap', 'Expert guidance']
  },
  {
    icon: Network,
    title: 'Full-Scale Ecosystem Development',
    description: 'End-to-end decentralized ecosystem development for your Web3 vision.',
    features: ['Architecture design', 'Full development', 'Deployment & maintenance']
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white pt-20">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-300">
              Comprehensive blockchain solutions tailored for modern businesses
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative p-8 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/0 to-violet-500/0 group-hover:from-blue-500/10 group-hover:to-violet-500/10 transition-all duration-300" />

                  <div className="relative z-10">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center mb-3 sm:mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all">
                      <Icon className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                    </div>

                    <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-3">{service.title}</h3>
                    <p className="text-xs sm:text-gray-300 text-gray-300 mb-4 sm:mb-6 leading-relaxed">{service.description}</p>

                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-blue-400 mb-2 sm:mb-3">Key Features:</p>
                      {service.features.map((feature, fidx) => (
                        <div key={fidx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">Why Choose Luminic Labs?</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
              {[
                {
                  title: '✅ 60+ Successful Projects',
                  desc: 'Proven track record across DeFi, AI integrations, and more'
                },
                {
                  title: '🌍 Global Client Reach',
                  desc: 'We serve clients from startups to enterprises worldwide'
                },
                {
                  title: '🔐 Security First',
                  desc: 'All solutions are audited and built with security at the core'
                },
                {
                  title: '⚡ Fast Deployment',
                  desc: 'Quick turnaround without compromising on quality'
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-lg bg-white/5 border border-white/10"
                >
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-blue-400">{item.title}</h3>
                  <p className="text-xs sm:text-gray-300 text-gray-300">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6">Ready to Transform Your Idea?</h2>
            <p className="text-sm sm:text-lg text-gray-300 mb-6 sm:mb-8">
              Let's discuss how our services can help you achieve your blockchain goals
            </p>
            <a href="/contact" className="btn-gradient text-lg">
              Schedule a Consultation
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
