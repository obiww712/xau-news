export type Article = {
  slug: string
  title: string
  description: string
  content: string[]
  image: string
  category: 'Gold' | 'Forex' | 'Interest Rate' | 'Analysis'
  author: string
  date: string
}

export const articles: Article[] = [
  {
    slug: 'gold-price-rises-as-dollar-weakens',
    title: 'Gold Price Rises as U.S. Dollar Weakens Ahead of Fed Meeting',
    description:
      'Gold prices advanced as the U.S. dollar softened and investors awaited the latest Federal Reserve policy decision.',

    image: '/images/gold.jpg',
    category: 'Gold',
    author: 'XAUNEWS Research',
    date: '2026-07-29',

    content: [
      'Gold prices moved higher during Wednesday trading as the U.S. dollar weakened against major currencies ahead of the upcoming Federal Reserve policy announcement.',
      'Market participants expect the Fed to keep interest rates unchanged, but traders are closely watching for any signals regarding the timing of future rate cuts.',
      'A weaker dollar typically supports gold because the metal becomes cheaper for holders of other currencies.',
      'Analysts say that if Treasury yields continue to decline, gold could challenge the next resistance area near $3,450 per ounce.',
      'Investors are also monitoring U.S. labor market data and inflation indicators for further confirmation of the monetary policy outlook.'
    ]
  },

  {
    slug: 'eurusd-holds-above-1-12',
    title: 'EUR/USD Holds Above 1.12 as Traders Await ECB Signals',
    description:
      'The euro remained supported above the 1.12 level as traders assessed the outlook for European Central Bank policy.',

    image: '/images/chart.jpg',
    category: 'Forex',
    author: 'XAUNEWS Research',
    date: '2026-07-29',

    content: [
      'EUR/USD traded in a relatively narrow range but remained above the 1.12 level during the European session.',
      'Traders are looking for additional guidance from European Central Bank officials regarding inflation and future interest-rate decisions.',
      'Technical analysts note that sustained trading above 1.1200 could open the door toward the 1.1280 resistance zone.',
      'However, stronger-than-expected U.S. economic data may limit upside momentum for the pair.'
    ]
  }
]