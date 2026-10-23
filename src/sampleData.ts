import type { Material } from './types';

const now = Date.now();
const day = 86_400_000;

export const SAMPLE_MATERIALS: Omit<Material, 'id'>[] = [
  {
    title: 'Candlestick Anatomy: Reading the Story of Price',
    category: 'Price Action',
    difficulty: 'Beginner',
    content: `Every candlestick tells a story of the battle between buyers and sellers within a specific time period. Understanding this story is the foundation of all price action trading.

The Anatomy of a Candlestick:
- The Body: The thick part of the candle representing the open and close prices. A green (bullish) candle closes higher than it opens. A red (bearish) candle closes lower than it opens.
- The Wicks (Shadows): The thin lines above and below the body showing the highest and lowest prices reached during the period.
- The Open: The price at which the candle began forming.
- The Close: The price at which the candle finished forming.

Key Candlestick Patterns to Know:
1. Pin Bar (Hammer / Shooting Star): A candle with a small body and a long wick on one side. The long wick shows rejection of price at that level. A bullish pin bar has a long lower wick, signaling buyers stepped in. A bearish pin bar has a long upper wick, signaling sellers took control.

2. Engulfing Candle: A candle whose body completely engulfs the previous candle's body. A bullish engulfing pattern signals a potential reversal to the upside, and vice versa.

3. Inside Bar: A candle whose entire range (high to low) falls within the range of the previous candle. This represents consolidation and often precedes a breakout.

Reading Context:
No candlestick pattern works in isolation. Always consider the context — where is the candle forming? Is it at a key support/resistance level? Is it forming after a long run or a deep pullback? Context gives patterns their meaning.`,
    tags: ['candlesticks', 'basics', 'pin bar', 'engulfing', 'inside bar'],
    keyTakeaways: [
      'A candlestick shows the open, high, low, and close for a given time period',
      'The body represents the open-to-close range; wicks show the full high-to-low range',
      'Patterns like pin bars and engulfing candles signal potential reversals',
      'Context matters more than the pattern itself — always check where the candle forms',
    ],
    relatedConcepts: ['Support and Resistance Zones', 'Market Structure: HH, HL, LH, LL'],
    createdAt: now - 1 * day,
    updatedAt: now - 1 * day,
  },
  {
    title: 'Support and Resistance Zones',
    category: 'Price Action',
    difficulty: 'Beginner',
    content: `Support and resistance are the most fundamental concepts in trading. They represent price levels where buying or selling pressure has historically been strong enough to halt or reverse price movement.

What is Support?
Support is a price level where buying interest is strong enough to overcome selling pressure. Think of it as a floor — price tends to bounce off it. At support, buyers see value and step in, creating demand that pushes price back up.

What is Resistance?
Resistance is the opposite — a price level where selling pressure overcomes buying interest. Think of it as a ceiling. Price tends to stall or reverse at resistance as sellers see value and enter the market.

Zones, Not Lines:
One of the biggest mistakes beginners make is treating support and resistance as exact price lines. In reality, they are ZONES — areas on the chart where price has reacted multiple times. Use zones, not single lines, to account for minor variations.

How to Draw Zones:
1. Switch to a higher timeframe (4H or Daily) for cleaner levels.
2. Look for areas where price has reversed at least two or three times.
3. Draw a rectangle (zone) covering the reaction points.
4. The more times price reacts at a zone, the more significant it becomes.

Role Reversal:
When support breaks, it often becomes resistance. When resistance breaks, it often becomes support. This is called a role reversal and is one of the most powerful concepts in price action trading. The broken level becomes a reference point for future price action.`,
    tags: ['support', 'resistance', 'zones', 'role reversal', 'basics'],
    keyTakeaways: [
      'Support acts as a floor where buyers step in; resistance acts as a ceiling where sellers step in',
      'Always think in zones, not exact price lines',
      'The more times a zone is tested, the more significant it becomes',
      'Broken support becomes resistance, and broken resistance becomes support (role reversal)',
    ],
    relatedConcepts: ['Candlestick Anatomy: Reading the Story of Price', 'Break of Structure and Change of Character'],
    createdAt: now - 2 * day,
    updatedAt: now - 2 * day,
  },
  {
    title: 'Market Structure: HH, HL, LH, LL',
    category: 'Market Structure',
    difficulty: 'Beginner',
    content: `Market structure is the framework that defines the direction of price movement. By identifying the sequence of highs and lows, you can determine whether the market is in an uptrend, downtrend, or range.

The Four Building Blocks:
- HH (Higher High): Price makes a new high that is higher than the previous high.
- HL (Higher Low): Price makes a new low that is higher than the previous low.
- LH (Lower High): Price makes a new high that is lower than the previous high.
- LL (Lower Low): Price makes a new low that is lower than the previous low.

Uptrend (Bullish Structure):
An uptrend is defined by a sequence of Higher Highs and Higher Lows (HH/HL). Each push up exceeds the previous high, and each pullback holds above the previous low. As long as this pattern continues, the trend is up.

Downtrend (Bearish Structure):
A downtrend is defined by a sequence of Lower Highs and Lower Lows (LH/LL). Each push down exceeds the previous low, and each rally fails to reach the previous high. As long as this pattern continues, the trend is down.

Ranging (Sideways Structure):
When price makes equal highs and equal lows, the market is in a range. Neither buyers nor sellers are in control. In a range, you would look to buy at the bottom and sell at the top until a breakout occurs.

Why Structure Matters:
Market structure is the backbone of every trading decision. Before entering any trade, ask yourself: "What is the current market structure?" Trading in the direction of the structure dramatically increases your probability of success. Counter-trend trades should be avoided by beginners.`,
    tags: ['market structure', 'trends', 'hh', 'hl', 'lh', 'll', 'basics'],
    keyTakeaways: [
      'Uptrend = sequence of Higher Highs and Higher Lows (HH/HL)',
      'Downtrend = sequence of Lower Highs and Lower Lows (LH/LL)',
      'Range = equal highs and equal lows with no clear direction',
      'Always determine market structure before entering any trade',
    ],
    relatedConcepts: ['Break of Structure and Change of Character', 'Support and Resistance Zones'],
    createdAt: now - 3 * day,
    updatedAt: now - 3 * day,
  },
  {
    title: 'Break of Structure and Change of Character',
    category: 'Market Structure',
    difficulty: 'Intermediate',
    content: `Break of Structure (BOS) and Change of Character (CHoCH) are two of the most important concepts for identifying trend continuation and trend reversal. They help you understand when the market is likely to keep going versus when it is about to turn.

Break of Structure (BOS):
A BOS occurs when price breaks beyond the most recent significant high (in an uptrend) or low (in a downtrend), confirming the current trend is continuing.

- Bullish BOS: In an uptrend, price breaks above the previous Higher High. This confirms buyers are still in control and the uptrend is likely to continue.
- Bearish BOS: In a downtrend, price breaks below the previous Lower Low. This confirms sellers are still in control and the downtrend is likely to continue.

A BOS is a continuation signal. It tells you the existing structure is intact and you should look for entries in the direction of the trend.

Change of Character (CHoCH):
A CHoCH occurs when price breaks in the opposite direction of the prevailing trend, signaling a potential reversal. This is the first sign that control is shifting from buyers to sellers or vice versa.

- Bullish CHoCH: In a downtrend, price breaks above the most recent Lower High. This suggests sellers are losing control and a reversal to the upside may be beginning.
- Bearish CHoCH: In an uptrend, price breaks below the most recent Higher Low. This suggests buyers are losing control and a reversal to the downside may be beginning.

Key Difference:
- BOS = continuation (trend is still going)
- CHoCH = potential reversal (trend might be changing)

A CHoCH is an early warning. It does not guarantee a reversal, but it tells you to be cautious and watch for confirmation. Many traders wait for a BOS in the new direction after a CHoCH to confirm the reversal.

How to Trade It:
1. Identify the current market structure (HH/HL or LH/LL).
2. Wait for price to approach a key structural level.
3. If price breaks in the trend direction, it is a BOS — look for continuation entries.
4. If price breaks against the trend direction, it is a CHoCH — be cautious and look for reversal setups.`,
    tags: ['bos', 'choch', 'market structure', 'reversal', 'continuation'],
    keyTakeaways: [
      'BOS (Break of Structure) confirms trend continuation — price breaks in the trend direction',
      'CHoCH (Change of Character) signals a potential trend reversal — price breaks against the trend',
      'A CHoCH is an early warning; wait for confirmation before acting on a reversal',
      'Always identify whether a break is a BOS or CHoCH before entering a trade',
    ],
    relatedConcepts: ['Market Structure: HH, HL, LH, LL', 'Liquidity Grabs and Stop Hunts'],
    createdAt: now - 5 * day,
    updatedAt: now - 3 * day,
  },
  {
    title: 'Understanding Liquidity Pools',
    category: 'Liquidity',
    difficulty: 'Intermediate',
    content: `Liquidity refers to the volume of buy and sell orders resting in the market at various price levels. Understanding where liquidity pools exist is critical for anticipating how price will move.

What is a Liquidity Pool?
A liquidity pool is a concentration of resting orders — typically stop-loss orders and pending entry orders — that sit at or around key price levels. These pools act like magnets for price.

Where Do Liquidity Pools Form?
1. Equal Lows and Equal Highs: When price makes two or more similar lows, stop-loss orders from buyers accumulate just below those lows. Similarly, equal highs attract sell-side liquidity above them.

2. Previous Day High/Low: The high and low of the previous trading day are major liquidity targets. Price often moves toward these levels to capture the orders resting there.

3. Round Numbers: Psychological price levels (e.g., 1.1000 on EUR/USD, $100 on a stock) often attract significant order flow.

4. Trend Line Touch Points: Multiple touches on a trend line create a pool of orders along that line.

Why Does Price Target Liquidity?
Large institutions need liquidity to enter and exit positions without causing massive slippage. They cannot simply buy or sell huge positions in a thin market — they need counter-party orders. So price tends to move toward areas where resting orders provide the liquidity they need.

Buy-Side Liquidity:
Orders resting above equal highs or previous highs. These are typically buy-stop orders (stop-losses from short sellers and breakout buyers). When price moves up into this pool, these orders are triggered, providing liquidity for institutions to sell into.

Sell-Side Liquidity:
Orders resting below equal lows or previous lows. These are typically sell-stop orders (stop-losses from buyers and breakout sellers). When price moves down into this pool, these orders are triggered, providing liquidity for institutions to buy into.

Understanding this dynamic helps you anticipate where price is likely to go next — it tends to sweep liquidity before reversing.`,
    tags: ['liquidity', 'liquidity pools', 'smart money', 'stop hunts', 'equal highs'],
    keyTakeaways: [
      'A liquidity pool is a concentration of resting orders (stop-losses and pending entries) at key price levels',
      'Liquidity forms at equal highs/lows, previous day high/low, round numbers, and trend line touches',
      'Institutions need liquidity to fill large positions without excessive slippage',
      'Buy-side liquidity sits above highs; sell-side liquidity sits below lows',
    ],
    relatedConcepts: ['Liquidity Grabs and Stop Hunts', 'The ICT Killzone Model'],
    createdAt: now - 6 * day,
    updatedAt: now - 6 * day,
  },
  {
    title: 'Liquidity Grabs and Stop Hunts',
    category: 'Liquidity',
    difficulty: 'Advanced',
    content: `A liquidity grab (also called a stop hunt or liquidity sweep) is one of the most powerful and frequently occurring patterns in the market. It happens when price deliberately moves beyond a key level to trigger resting orders, then quickly reverses.

What is a Liquidity Grab?
A liquidity grab occurs when price briefly penetrates beyond a significant high or low — just enough to trigger stop-loss orders and breakout entries — and then sharply reverses in the opposite direction.

The Mechanics:
1. Price approaches a key level (e.g., equal lows, previous day low).
2. Resting sell-stop orders (stop-losses from buyers) sit just below this level.
3. Price pushes slightly below the level, triggering those sell-stops.
4. The triggered sell orders create a burst of selling that institutions use as liquidity to buy.
5. Price quickly reverses upward, leaving a wick below the level.
6. Retail traders who placed their stop-losses at the level are stopped out, and breakout sellers are trapped.

How to Identify a Liquidity Grab:
- Look for a sharp wick beyond a key level (equal highs/lows, previous day high/low, session high/low).
- The wick should be relatively quick — price dips below and bounces back fast.
- Volume often spikes during the grab as orders are triggered.
- Price should reclaim the level quickly and show signs of reversal (e.g., a bullish engulfing candle after a sell-side grab).

Bullish Liquidity Grab (Sell-Side):
Price sweeps below equal lows or a previous low, triggers sell-side liquidity, then reverses up. This is a strong bullish signal because the downside liquidity has been consumed and price is likely to move higher.

Bearish Liquidity Grab (Buy-Side):
Price sweeps above equal highs or a previous high, triggers buy-side liquidity, then reverses down. This is a strong bearish signal because the upside liquidity has been consumed and price is likely to move lower.

Trading Liquidity Grabs:
1. Identify key liquidity levels (equal highs/lows, previous session high/low).
2. Wait for price to sweep the level with a quick wick.
3. Look for confirmation that price is reclaiming the level (e.g., a reversal candle pattern).
4. Enter in the direction of the reversal.
5. Place your stop-loss just beyond the wick of the grab.

This is one of the most reliable setups when traded at the right time of day (during killzones) and at significant levels.`,
    tags: ['liquidity grab', 'stop hunt', 'liquidity sweep', 'reversal', 'smart money'],
    keyTakeaways: [
      'A liquidity grab is when price briefly pierces beyond a key level to trigger stop-losses, then reverses',
      'Bullish grabs sweep sell-side liquidity below lows; bearish grabs sweep buy-side liquidity above highs',
      'Look for a quick wick beyond the level followed by a fast reclaim and reversal',
      'Always wait for confirmation (reclaim + reversal pattern) before entering',
    ],
    relatedConcepts: ['Understanding Liquidity Pools', 'The ICT Killzone Model', 'Fair Value Gaps Explained'],
    createdAt: now - 8 * day,
    updatedAt: now - 7 * day,
  },
  {
    title: 'SMT Divergence Basics',
    category: 'SMT Divergence',
    difficulty: 'Intermediate',
    content: `SMT (Smart Money Technique) Divergence is a concept that compares two correlated assets to detect when institutional money is positioning for a move. It is one of the most powerful confirmation tools available.

What is SMT Divergence?
SMT Divergence occurs when two correlated markets that normally move together begin to diverge at a key level. This divergence signals that smart money is positioning in one of the markets and a reversal is likely coming.

Classic Example: EUR/USD and GBP/USD
These two currency pairs are highly correlated — they typically move in the same direction because both represent the US Dollar against European currencies.

Bullish SMT Divergence:
1. Both EUR/USD and GBP/USD are in a downtrend.
2. Price approaches a key support level on both pairs.
3. EUR/USD makes a new low (Lower Low).
4. BUT GBP/USD does NOT make a new low — it holds above its previous low.
5. This divergence suggests that smart money is no longer pushing both pairs lower. The selling pressure is waning, and a reversal to the upside is likely.

Bearish SMT Divergence:
1. Both pairs are in an uptrend.
2. Price approaches a key resistance level.
3. EUR/USD makes a new high (Higher High).
4. BUT GBP/USD fails to make a new high — it makes a Lower High instead.
5. This suggests buying pressure is waning and a reversal to the downside is likely.

Other Correlated Pairs:
- EUR/USD and GBP/USD (most common)
- NASDAQ and S&P 500
- Gold and Silver
- US Dollar Index and EUR/USD (inversely correlated)

How to Use SMT Divergence:
1. Identify two correlated markets.
2. Mark key liquidity levels on both (previous day high/low, equal highs/lows).
3. As price approaches these levels, compare the structure.
4. If one market makes a new high/low but the other does not, you have SMT divergence.
5. Use this as confirmation alongside other signals (liquidity grabs, market structure shifts) to enter trades.

SMT divergence is not a standalone entry signal — it is a confirmation tool. It tells you that the move is likely to happen, but you still need a precise entry trigger.`,
    tags: ['smt', 'divergence', 'correlation', 'smart money', 'confirmation'],
    keyTakeaways: [
      'SMT Divergence compares two correlated markets to detect institutional positioning',
      'Bullish SMT: one pair makes a lower low while the correlated pair holds above its low',
      'Bearish SMT: one pair makes a higher high while the correlated pair makes a lower high',
      'SMT is a confirmation tool, not a standalone entry — combine it with other signals',
    ],
    relatedConcepts: ['Understanding Liquidity Pools', 'Liquidity Grabs and Stop Hunts', 'Market Structure: HH, HL, LH, LL'],
    createdAt: now - 10 * day,
    updatedAt: now - 9 * day,
  },
  {
    title: 'The ICT Killzone Model',
    category: 'ICT Concepts',
    difficulty: 'Advanced',
    content: `The Killzone concept, developed by the Inner Circle Trader (ICT), identifies specific time windows during the trading day when institutional activity is highest and the most significant price movements occur.

What is a Killzone?
A killzone is a specific time window during which large institutions are most active. During these windows, liquidity is being created and swept, and the most reliable trading setups occur. Trading outside these windows significantly reduces your probability of success.

The Key Killzones (Times in EST):

1. Asian Session Killzone (8:00 PM – 12:00 AM EST)
- Often creates the range (high and low) that London and New York will sweep.
- Price typically moves in a narrow range during this session.
- The Asian range high and low become liquidity targets for later sessions.

2. London Open Killzone (2:00 AM – 5:00 AM EST)
- Often sees a liquidity sweep of the Asian session range.
- Can create the day's initial directional move.
- Look for a Judas swing (false move) followed by the real move.

3. New York Open Killzone (8:30 AM – 11:00 AM EST)
- The most active and reliable killzone for day traders.
- Often sees a sweep of the London session high or low.
- The New York session frequently reverses the initial morning direction.
- The 9:30 AM EST equity open is a key timing reference.

4. London Close Killzone (10:00 AM – 12:00 PM EST)
- Can see reversals as London positions are closed.
- Good for catching late-day moves.

How to Trade the Killzone Model:
1. Mark the Asian session range (high and low).
2. Wait for the London or New York open killzone.
3. Watch for price to sweep the Asian range high or low (liquidity grab).
4. Look for a market structure shift (CHoCH) after the sweep.
5. Enter on the first pullback to a fair value gap or order block after the CHoCH.
6. Target the opposite end of the range or the next liquidity level.

Key Principles:
- The best setups occur during killzones. Outside these windows, sit on your hands.
- Patience is critical. Wait for the sweep, then wait for the shift, then wait for the entry.
- Not every killzone will produce a setup. Only trade when all conditions align.`,
    tags: ['ict', 'killzone', 'london open', 'new york open', 'asian range', 'time based'],
    keyTakeaways: [
      'Killzones are specific time windows when institutional activity is highest',
      'The Asian range often becomes the liquidity target for London and New York sessions',
      'The New York Open killzone (8:30-11:00 AM EST) is the most reliable for day trading',
      'Wait for a liquidity sweep + CHoCH + pullback entry — trade only when all conditions align',
    ],
    relatedConcepts: ['Liquidity Grabs and Stop Hunts', 'Break of Structure and Change of Character', 'Fair Value Gaps Explained'],
    createdAt: now - 12 * day,
    updatedAt: now - 11 * day,
  },
  {
    title: 'Fair Value Gaps Explained',
    category: 'ICT Concepts',
    difficulty: 'Intermediate',
    content: `A Fair Value Gap (FVG) is a three-candle pattern that represents an imbalance in the market — a area where price moved so quickly that it left a gap in the order flow. These gaps act as magnets for future price movement.

What is a Fair Value Gap?
An FVG is identified using three consecutive candles. The gap is the space between the first candle's wick and the third candle's wick, where the second candle's body creates the imbalance.

Bullish Fair Value Gap:
1. Candle 1 has a high.
2. Candle 2 rallies strongly (large bullish body).
3. Candle 3 opens and the low of Candle 3 is ABOVE the high of Candle 1.
4. The gap between Candle 1's high and Candle 3's low is the Fair Value Gap.

Bearish Fair Value Gap:
1. Candle 1 has a low.
2. Candle 2 drops strongly (large bearish body).
3. Candle 3 opens and the high of Candle 3 is BELOW the low of Candle 1.
4. The gap between Candle 1's low and Candle 3's high is the Fair Value Gap.

Why Do FVGs Matter?
When price creates an FVG, it means there was an imbalance — buyers or sellers overwhelmed the market so quickly that the other side didn't have time to fill their orders. The market has a tendency to return to these gaps to "fill" the imbalance, restoring balance to the order flow.

How FVGs Are Used in Trading:
1. As Entry Points: After a directional move that creates an FVG, price often pulls back to fill the gap before continuing. Traders enter on the pullback to the FVG with a stop-loss beyond the swing high/low.

2. As Targets: If you are in a trade and there is an unfilled FVG in the direction of your trade, price may gravitate toward it. Use it as a take-profit target.

3. As Confluence: FVGs are most powerful when they align with other factors — a liquidity grab, a market structure shift, or a killzone. An FVG alone is not enough to justify a trade.

Types of FVGs:
-IFVG (Institutional FVG): A large, obvious gap that forms during high-impact news or major session opens. These are the most reliable.
- Partial Fill: Price may partially fill an FVG and then continue. Not every gap gets fully filled before price moves on.
- Runner: Sometimes price never returns to fill the gap, especially in very strong trends. Always use a stop-loss.

FVGs on Multiple Timeframes:
FVGs on higher timeframes (4H, Daily) are more significant than those on lower timeframes (1m, 5m). When a higher timeframe FVG aligns with a lower timeframe setup, the probability of success increases significantly.`,
    tags: ['fvg', 'fair value gap', 'imbalance', 'ict', 'price delivery'],
    keyTakeaways: [
      'A Fair Value Gap is a three-candle imbalance where price moved too quickly for orders to fill',
      'Bullish FVG: Candle 3 low is above Candle 1 high; Bearish FVG: Candle 3 high is below Candle 1 low',
      'Price tends to return to FVGs to fill the imbalance — use them as entry points and targets',
      'FVGs are most powerful as confluence with liquidity grabs, structure shifts, and killzones',
    ],
    relatedConcepts: ['The ICT Killzone Model', 'Optimal Trade Entry Model', 'Liquidity Grabs and Stop Hunts'],
    createdAt: now - 14 * day,
    updatedAt: now - 13 * day,
  },
  {
    title: 'Optimal Trade Entry Model',
    category: 'ICT Concepts',
    difficulty: 'Advanced',
    content: `The Optimal Trade Entry (OTE) is a precision entry model developed by ICT that uses Fibonacci retracement levels to identify the sweet spot where institutional orders are being filled. It provides a tight, low-risk entry point.

What is the OTE?
The OTE is the area between the 62% and 79% Fibonacci retracement of a recent impulse leg. This zone represents where price typically pulls back to before continuing in the direction of the trend. It is where smart money is accumulating positions.

How to Draw the OTE:
For a Bullish OTE (Long Entry):
1. Identify a significant swing low (point A) and swing high (point B).
2. Draw a Fibonacci retracement from A to B.
3. The OTE zone is between the 62% and 79% retracement levels.
4. Wait for price to pull back into this zone.
5. Look for additional confirmation (FVG, order block, liquidity sweep) within the zone.
6. Enter long when confirmation appears.
7. Stop-loss goes below the swing low (point A).
8. Target the swing high (point B) or the next liquidity level above.

For a Bearish OTE (Short Entry):
1. Identify a significant swing high (point A) and swing low (point B).
2. Draw a Fibonacci retracement from A to B.
3. The OTE zone is between the 62% and 79% retracement levels.
4. Wait for price to rally into this zone.
5. Look for confirmation within the zone.
6. Enter short when confirmation appears.
7. Stop-loss goes above the swing high (point A).
8. Target the swing low (point B) or the next liquidity level below.

The Equilibrium (50% Level):
The 50% Fibonacci retracement is called the equilibrium level. It is the midpoint of the move and often acts as a decision point. If price holds above equilibrium in a bullish setup, the uptrend is likely still intact. If price breaks below, the setup may be invalid.

Confirmation Within the OTE:
The OTE alone is not sufficient for entry. You should look for additional confluence within the zone:
- A Fair Value Gap overlapping the OTE zone
- An order block (last opposite-color candle before the impulse move)
- A liquidity sweep just before price enters the OTE
- A market structure shift confirming the direction

Risk Management with OTE:
The beauty of the OTE is that it provides a very tight stop-loss location. Because you are entering at the 62-79% retracement, your stop-loss (beyond the swing point) is relatively close. This means:
- Smaller risk per trade
- Larger reward-to-risk ratio (often 3:1 or better)
- Ability to be wrong more often and still be profitable

Remember: The OTE works best when it aligns with the higher timeframe narrative. Always check what the 4H or Daily chart is doing before looking for an OTE on a lower timeframe.`,
    tags: ['ote', 'optimal trade entry', 'fibonacci', 'ict', 'entry model', 'risk management'],
    keyTakeaways: [
      'The OTE zone is the 62%-79% Fibonacci retracement of a recent impulse leg',
      'It represents where institutions are filling positions during a pullback',
      'Always seek confirmation within the OTE (FVG, order block, liquidity sweep)',
      'The OTE provides tight stop-loss placement and excellent reward-to-risk ratios',
    ],
    relatedConcepts: ['Fair Value Gaps Explained', 'The ICT Killzone Model', 'Market Structure: HH, HL, LH, LL'],
    createdAt: now - 15 * day,
    updatedAt: now - 14 * day,
  },
];
