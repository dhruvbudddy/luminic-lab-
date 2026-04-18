'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    name: 'Astra AI',
    category: 'AI-Blockchain Integration',
    description: 'AI-powered blockchain solution focused on automation and data intelligence. A cutting-edge platform that combines artificial intelligence with decentralized technology.',
    features: ['AI Automation', 'Data Intelligence', 'Smart Contracts', 'Real-time Analytics'],
    status: 'Live',
    metrics: {
      users: '5K+',
      tvl: '$2M+',
      transactions: '100K+'
    }
  },
  {
    name: 'Vader AI',
    category: 'DApp Ecosystem',
    description: 'Advanced AI-integrated ecosystem with decentralized capabilities. Built for next-generation Web3 applications with enterprise-grade infrastructure.',
    features: ['Decentralized Network', 'AI Engine', 'Multi-chain', 'User-Friendly UI'],
    status: 'Live',
    metrics: {
      users: '8K+',
      tvl: '$5M+',
      transactions: '250K+'
    }
  },
  {
    name: 'SNS',
    category: 'Social Network Protocol',
    description: 'A scalable blockchain platform designed for next-gen digital interaction. Enabling decentralized social communication on the blockchain.',
    features: ['Social Protocol', 'Scalability', 'Privacy-Focused', 'Token Economics'],
    status: 'Live',
    metrics: {
      users: '10K+',
      tvl: '$8M+',
      transactions: '500K+'
    }
  }
];

const otherProjects = [
  'DeFi Protocol Development',
  'Token Launch Projects',
  'DAO Smart Contracts',
  'NFT Marketplaces',
  'Yield Farming Platforms',
  'Exchange Integrations'
];

export default function PortfolioPage() {
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
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-300">
              60+ Successful Blockchain Projects | Proven Excellence in Web3
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center"
          >
            ⭐ Our Top Performing Projects
          </motion.h2>

          <div className="space-y-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/30 transition-all duration-300"
              >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-violet-500/5" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 group-hover:from-white/10 transition-all duration-300" />

                <div className="relative z-10 p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row items-start justify-between gap-2 sm:gap-4 mb-4 sm:mb-6">
                    <div>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-2">
                        <h3 className="text-xl sm:text-3xl font-bold">{project.name}</h3>
                        <span className="px-2 sm:px-3 py-1 rounded-full bg-green-500/20 border border-green-500/50 text-green-400 text-xs sm:text-sm font-semibold">
                          {project.status}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-blue-400 font-semibold">{project.category}</p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6 sm:mb-6">
                    <p className="text-xs font-semibold text-blue-400 mb-2 sm:mb-3">Key Features:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, fidx) => (
                        <span
                          key={fidx}
                          className="px-2 sm:px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8 text-center">Projects We've Completed</h2>
            <p className="text-center text-xs sm:text-gray-300 text-gray-300 mb-8 sm:mb-12">
              Besides our featured projects, we've successfully delivered 57+ additional projects including:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {otherProjects.map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all"
                >
                  <div className="flex items-start justify-between">
                    <p className="text-xs sm:text-gray-300 text-gray-300 font-semibold">{project}</p>
                    <ExternalLink className="w-3 sm:w-4 h-3 sm:h-4 text-blue-400 flex-shrink-0 mt-1" />
                  </div>
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
            <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6">Want to Be Our Next Success Story?</h2>
            <p className="text-sm sm:text-lg text-gray-300 mb-6 sm:mb-8">
              Let's build something extraordinary together
            </p>
            <a href="/contact" className="btn-gradient text-lg">
              Start Your Project Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
