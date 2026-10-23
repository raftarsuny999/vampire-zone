import type { CategoryInfo } from './types';

export const CATEGORIES: CategoryInfo[] = [
  {
    name: 'Price Action',
    shortDesc: 'Candlesticks, patterns & raw price movement',
    description:
      'Master the language of price — candlestick anatomy, support and resistance, and reading price movement without indicators.',
    gradient: 'from-amber-500/15 to-amber-600/5',
    iconBg: 'bg-amber-500/10 text-amber-400',
  },
  {
    name: 'Market Structure',
    shortDesc: 'Trends, BOS, CHoCH & structure shifts',
    description:
      'Understand how markets structure themselves — higher highs, lower lows, breaks of structure, and changes of character.',
    gradient: 'from-emerald-500/15 to-emerald-600/5',
    iconBg: 'bg-emerald-500/10 text-emerald-400',
  },
  {
    name: 'Liquidity',
    shortDesc: 'Liquidity pools, grabs & stop hunts',
    description:
      'Learn where liquidity rests, how institutions target it, and how to trade alongside smart money rather than against it.',
    gradient: 'from-sky-500/15 to-sky-600/5',
    iconBg: 'bg-sky-500/10 text-sky-400',
  },
  {
    name: 'SMT Divergence',
    shortDesc: 'Smart Money Technique divergence',
    description:
      'Detect institutional divergence between correlated assets to anticipate reversals and draw on liquidity.',
    gradient: 'from-rose-500/15 to-rose-600/5',
    iconBg: 'bg-rose-500/10 text-rose-400',
  },
  {
    name: 'ICT Concepts',
    shortDesc: 'Killzones, FVGs, OTE & ICT models',
    description:
      'Inner Circle Trader concepts — killzones, fair value gaps, optimal trade entry, and the 2022 mentorship model.',
    gradient: 'from-teal-500/15 to-teal-600/5',
    iconBg: 'bg-teal-500/10 text-teal-400',
  },
];
