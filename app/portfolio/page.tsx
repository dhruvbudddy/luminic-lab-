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

      {/* Achievements Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8">📊 Our Achievements</h2>
            <p className="text-sm sm:text-lg text-gray-300 mb-4 leading-relaxed">
              We take pride in our proven track record of delivering <span className="text-blue-400 font-semibold">60+ successful blockchain projects</span> across diverse sectors, including <span className="text-blue-400 font-semibold">DeFi, AI integrations, token ecosystems, and decentralized platforms</span>.
            </p>
            <p className="text-sm sm:text-lg text-gray-300 leading-relaxed">
              Our work reflects a commitment to innovation, scalability, and real-world impact—helping our clients build products that stand strong in the global Web3 ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Global Recognition Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8">🌍 Global Recognition</h2>
            <p className="text-sm sm:text-lg text-gray-300 mb-8 leading-relaxed">
              Several of our successfully developed projects have achieved <span className="text-blue-400 font-semibold">global recognition</span> and are listed among the <span className="text-blue-400 font-semibold">Top Crypto Projects on CoinMarketCap</span>, showcasing their market credibility and adoption.
            </p>

            {/* Top 500 Project */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8 p-6 sm:p-8 rounded-xl bg-white/5 border border-blue-500/20"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-blue-400">🔹 Top 500 Crypto Project</h3>
              <h4 className="text-lg sm:text-xl font-bold mb-4 text-white">RealLink (REAL)</h4>
              <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed">
                A next-generation blockchain project focused on bridging real-world utility with decentralized infrastructure. RealLink aims to create a seamless ecosystem where digital assets interact with real-world applications, enhancing transparency and efficiency.
              </p>
              <a
                href="https://coinmarketcap.com/currencies/reallink/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                CoinMarketCap: View Project
              </a>
            </motion.div>

            {/* Top 1000 Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-8 p-6 sm:p-8 rounded-xl bg-white/5 border border-green-500/20"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-green-400">🔹 Top 1000 Crypto Projects</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg sm:text-xl font-bold mb-3 text-white">IDOL (MEET48)</h4>
                  <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed">
                    A unique blockchain-powered ecosystem designed around digital entertainment and fan engagement. IDOL (MEET48) integrates Web3 technology with the creator economy, enabling deeper interaction between creators and their communities.
                  </p>
                  <a
                    href="https://coinmarketcap.com/currencies/meet48/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-semibold transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    CoinMarketCap: View Project
                  </a>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <h4 className="text-lg sm:text-xl font-bold mb-3 text-white">SpaceCoin (SPACE)</h4>
                  <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed">
                    A blockchain initiative aimed at building decentralized infrastructure with a futuristic vision, often associated with innovation in digital ecosystems and next-gen financial solutions.
                  </p>
                  <a
                    href="https://coinmarketcap.com/currencies/spacecoin-org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-semibold transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    CoinMarketCap: View Project
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Advanced DeFi Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-sky-400">🔹 Advanced DeFi & On-Chain Projects</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-8 leading-relaxed">
                In addition to globally recognized tokens, Luminic Labs has also developed and supported live decentralized exchange (DEX) projects, actively traded and tracked via on-chain analytics platforms.
              </p>

              <div className="space-y-8">
                {/* Vader AI */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="p-6 sm:p-8 rounded-xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20"
                >
                  <h4 className="text-lg sm:text-xl font-bold mb-2 text-purple-400">Vader AI (Base Network)</h4>
                  <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed">
                    An advanced blockchain project deployed on the Base (Layer-2) network, integrating artificial intelligence with decentralized infrastructure. It is designed to leverage the efficiency of Layer-2 scaling while enabling intelligent, data-driven blockchain applications.
                  </p>
                  <div className="mb-4">
                    <p className="text-xs sm:text-sm font-semibold text-purple-400 mb-2">Key Highlights:</p>
                    <ul className="text-xs sm:text-sm text-gray-300 space-y-1">
                      <li>• Built on Base (Ethereum Layer-2 ecosystem)</li>
                      <li>• Focus on AI + Blockchain integration</li>
                      <li>• Live trading with real-time liquidity tracking</li>
                      <li>• Scalable and cost-efficient architecture</li>
                    </ul>
                  </div>
                  <a
                    href="https://dexscreener.com/base/0xA1ddDB82501E8fe2d92Ad0E8Ba331313f501de72"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View on DEXScreener
                  </a>
                </motion.div>

                {/* Astra AI */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 sm:p-8 rounded-xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20"
                >
                  <h4 className="text-lg sm:text-xl font-bold mb-2 text-cyan-400">Astra AI (Ethereum Network)</h4>
                  <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed">
                    A powerful AI-integrated blockchain project built on the Ethereum network, offering a highly secure and decentralized environment for advanced Web3 applications.
                  </p>
                  <div className="mb-4">
                    <p className="text-xs sm:text-sm font-semibold text-cyan-400 mb-2">Key Highlights:</p>
                    <ul className="text-xs sm:text-sm text-gray-300 space-y-1">
                      <li>• Built on Ethereum (industry-leading blockchain)</li>
                      <li>• AI-driven ecosystem</li>
                      <li>• Integrated with decentralized exchanges (DEXs)</li>
                      <li>• Transparent on-chain analytics and trading</li>
                    </ul>
                  </div>
                  <a
                    href="https://dexscreener.com/ethereum/0x4dF1C47EcFBac8482A4811d373128E2acC007d02"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View on DEXScreener
                  </a>
                </motion.div>
              </div>
            </motion.div>

            {/* Commitment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-xl bg-gradient-to-r from-blue-500/10 to-violet-500/10 border border-blue-500/20"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-blue-400">🚀 Our Commitment</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-3 leading-relaxed">
                From concept to execution, we focus on building blockchain solutions that are not only technically sound but also market-ready and globally competitive.
              </p>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Our expanding portfolio—featuring CoinMarketCap-listed projects and live DEX-traded assets—demonstrates our ability to deliver solutions that achieve real adoption and measurable success in the Web3 industry.
              </p>
            </motion.div>
          </motion.div>
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
