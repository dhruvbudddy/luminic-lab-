'use client';

import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  name: string;
  description: string;
  network: string;
  networkType: 'eth' | 'base' | 'bnb' | 'cmc';
  link: string;
  index?: number;
  topBorderClass?: string;
}

const networkColors: Record<string, { badge: string; hoverBorder: string }> = {
  eth: {
    badge: 'bg-blue-500/12 text-blue-400 border border-blue-500/25',
    hoverBorder: 'hover:border-blue-500/45',
  },
  base: {
    badge: 'bg-sky-500/12 text-sky-400 border border-sky-500/25',
    hoverBorder: 'hover:border-sky-500/45',
  },
  bnb: {
    badge: 'bg-yellow-500/12 text-yellow-400 border border-yellow-500/25',
    hoverBorder: 'hover:border-yellow-500/45',
  },
  cmc: {
    badge: 'bg-green-500/12 text-green-400 border border-green-500/25',
    hoverBorder: 'hover:border-green-500/45',
  },
};

const borderAccentMap: Record<string, string> = {
  'top-border-green': 'border-t-2 border-t-green-500',
  'top-border-blue': 'border-t-2 border-t-blue-500',
  'top-border-violet': 'border-t-2 border-t-sky-500',
  'top-border-yellow': 'border-t-2 border-t-yellow-500',
};

export default function ProjectCard({
  name,
  description,
  network,
  networkType,
  link,
  index = 0,
  topBorderClass = 'top-border-blue',
}: ProjectCardProps) {
  const colors = networkColors[networkType];
  const borderAccent = borderAccentMap[topBorderClass] || 'border-t-2 border-t-blue-500';

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className={`block rounded-2xl p-6 group border border-white/8 bg-white/[0.03] backdrop-blur-md hover:bg-white/[0.055] ${colors.hoverBorder} hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden relative ${borderAccent}`}
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.02) 0%, transparent 60%)' }}
      />
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-white font-semibold text-lg group-hover:text-blue-200 transition-colors">
          {name}
        </h3>
        <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0 mt-1" />
      </div>
      <p className="text-gray-400 text-sm leading-relaxed mb-5">{description}</p>
      <div className="flex items-center justify-between">
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${colors.badge}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          {network}
        </span>
        <span className="text-xs text-gray-500 group-hover:text-blue-400 transition-colors flex items-center gap-1">
          <ExternalLink className="w-3 h-3" />
          View Live
        </span>
      </div>
    </motion.a>
  );
}
