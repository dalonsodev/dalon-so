interface Links {
  live: string
  github: string
}

export interface Project {
  name: string
  slug: string
  description: string
  signals: string[]
  stack: string[]
  links: Links
}

export const projects: Project[] = [
  {
    name: 'DeFiScout',
    slug: 'defiscout',
    description: 'LP position simulator built from the Uniswap V3 whitepaper — not the SDK.',
    signals: [
      'BigInt precision math from the Uniswap V3 whitepaper (not SDK)',
      '8-stage fail-fast typed pipeline with discriminated unions',
      'Batch GraphQL replacing 40 sequential REST calls',
      'IntersectionObserver lazy load + session useRef cache'
    ],
    stack: ['React 19', 'TypeScript', 'TanStack Table', 'GraphQL', 'Vitest', 'Tailwind CSS'],
    links: {
      live: 'https://defiscout.netlify.app',
      github: 'https://github.com/dalonsodev/defi-scout'
    }
  },
  {
    name: 'SipMatch',
    slug: 'sipmatch',
    description: 'Cocktail recommendation engine built from 11 years of bar management expertise.',
    signals: [
      'Discriminated union type system (AlcoholicCocktail | NonAlcoholicCocktail)',
      'i18n-decoupled business logic via useAnswerMapping hook',
      '6 single-responsibility hooks refactored from a 200-line monolith',
      'CSS Scroll Snap — zero JS scroll logic, WCAG 2.1 AA'
    ],
    stack: ['React 19', 'TypeScript', 'react-i18next', 'Tailwind CSS'],
    links: {
      live: 'https://sipmatch.netlify.app',
      github: 'https://github.com/dalonsodev/DrinkWise'
    }
  }
]
