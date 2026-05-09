export const HERO_ASSETS = {
  video: "/assets/brand-cinematic.mp4",
  logo: "/assets/logo-transparent.png",
  fallbackImage: "/assets/lifestyle-4.png",
};

export const PRODUCT_RENDERS = {
  deodorantFull: "/assets/deodorant-premium-full.png",
  deodorantSolo: "/assets/deodorant-premium-solo.png",
  boxSolo: "/assets/box-premium.png",
  facewash: "/assets/facewash-premium.png",
};

export const SHOP_MENU = {
  image: "/assets/lifestyle-2.png",
  imageAlt: "Al-Amar natural skincare collection with botanicals",
  columns: [
    {
      title: "Essential Skin Rituals",
      kicker: "Natural",
      links: [
        { label: "Pure Aura", href: "#products" },
        { label: "Calm Pure", href: "#products" },
        { label: "Daily Balance", href: "#journal" },
        { label: "Research Journal", href: "#journal" },
      ],
    },
    {
      title: "Formula Focus",
      links: [
        { label: "Natural Deodorant", href: "#products" },
        { label: "Face Cleanser", href: "#products" },
        { label: "Skin Barrier Support", href: "#journal" },
        { label: "pH Balanced Care", href: "#journal" },
      ],
    },
    {
      title: "How Do You Want To Feel?",
      links: [
        { label: "Confident & Protected", href: "#journal" },
        { label: "Balanced & Clear", href: "#journal" },
        { label: "Natural & Effective", href: "#journal" },
      ],
    },
  ],
};

export const CONCERN_MENU = {
  image: "/assets/lifestyle-5.png",
  imageAlt: "Al-Amar cleanser ritual with soft botanicals",
  items: [
    {
      title: "Odor Control",
      href: "#products",
      iconPath:
        "M36 8c-10 5-17 16-17 26 0 9 6 15 14 15 7 0 13-5 13-13 0-7-4-12-10-16 1 8-3 13-9 16",
    },
    {
      title: "Sensitive Skin",
      href: "#products",
      iconPath:
        "M25 44c-8-6-12-13-12-21 0-7 5-13 12-13 5 0 8 3 11 8 2-3 5-5 9-5 5 0 9 4 9 10 0 8-8 16-21 25",
    },
    {
      title: "Daily Balance",
      href: "#journal",
      iconPath:
        "M14 31c7-13 22-18 36-15-1 14-9 27-23 32 2-9 8-17 17-24-11 4-20 10-30 19",
    },
  ],
};

export const HERO_COPY = {
  headline: "A quiet ritual begins here",
  subheadline: "Nature-powered skincare essentials for daily balance.",
  ctaText: "Shop Now",
  promise:
    "Skincare that stays balanced, healthy, and respected through the merger of botanical power and pharmaceutical precision.",
};

export const SCIENCE_MEETS_NATURE = {
  headline: "Where Science Meets Nature",
  intro:
    "At Alamar Naturals, we believe that nature is most effective when refined by research.",
  points: [
    {
      title: "Pharmaceutical Formulation Expertise",
      desc: "Our products are crafted with technical precision to ensure every natural ingredient performs at its highest potential.",
    },
    {
      title: "Scientific Research Insight",
      desc: "We use clinical evidence to select botanical extracts that work in harmony with your skin’s natural biology.",
    },
    {
      title: "Highly Effective, Naturally Sourced",
      desc: "Our formulas prove that intentional, minimal care can deliver professional-level results.",
    },
  ],
};

export const FEELING_CARDS = [
  {
    id: "fresh",
    eyebrow: "Fresh",
    title: "Confident & Protected",
    desc: "Advanced odor control with a skin-friendly botanical approach.",
    cta: "Shop Pure Aura",
    href: "#products",
    image: "/assets/lifestyle-6.png",
  },
  {
    id: "calm",
    eyebrow: "Calm",
    title: "Balanced & Clear",
    desc: "A gentle daily cleanse that respects the skin barrier.",
    cta: "Shop Calm Pure",
    href: "#products",
    image: "/assets/lifestyle-7.png",
  },
  {
    id: "ritual",
    eyebrow: "Ritual",
    title: "Natural & Effective",
    desc: "Focused essentials guided by research, not overloaded routines.",
    cta: "Discover The Science",
    href: "#journal",
    image: "/assets/lifestyle-8.png",
  },
];

export const THE_BRIDGE = {
  headline: "What Makes Us Different: The Bridge",
  points: [
    {
      title: "Nature-Led, Science-Backed",
      desc: "We believe you shouldn't have to choose between 'natural' and 'effective.'",
    },
    {
      title: "Expertly Formulated",
      desc: "Our products are developed by a medical doctor and a pharmacist to ensure our natural ingredients work in harmony with your skin’s biology.",
    },
    {
      title: "Pure & Minimal",
      desc: "We remove the clutter and harsh chemicals, focusing only on high-quality, plant-based essentials that your skin needs.",
    },
  ],
};

export const PHILOSOPHY = {
  headline: "Our Philosophy",
  points: [
    {
      title: "Respect Your Balance",
      desc: "We don’t believe in overloading your skin with harsh solutions.",
    },
    {
      title: "Targeted Performance",
      desc: "Each natural ingredient is chosen for a specific purpose to support long-term skin health.",
    },
    {
      title: "Safe & Effective",
      desc: "Clean science means gentle care that actually delivers results.",
    },
  ],
};

export const PRODUCTS = [
  {
    id: "pure-aura",
    name: "Pure Aura | Natural Deodorant",
    shortName: "Pure Aura",
    headline: "Advanced Odor Control. Naturally Refined.",
    formula:
      "A high-performance, skin-friendly blend that focuses on neutralizing odor molecules while maintaining total skin comfort.",
    botanicals: [
      {
        name: "Bisabolol",
        desc: "A natural wonder used for its profound soothing care on delicate underarm skin.",
      },
      {
        name: "Sodium Bicarbonate",
        desc: "Provides reliable, long-lasting freshness by working with your body’s natural rhythm.",
      },
      {
        name: "Floral Herbs Aroma",
        desc: "A refreshing, natural scent derived from botanical extracts.",
      },
    ],
    image: HERO_ASSETS.deodorant,
    scene: "/assets/deodorant-with-box.png",
  },
  {
    id: "calm-pure",
    name: "Calm Pure | Natural Face Cleanser",
    shortName: "Calm Pure",
    headline: "Cleanse with Clarity. Support with Science.",
    formula:
      "A gentle, pH-balanced daily cleanser designed to remove impurities while actively preserving your skin’s natural balance.",
    botanicals: [
      {
        name: "Prebiotic Inulin",
        desc: 'Enriched with this plant-derived "superfood" to support and nourish your skin’s healthy microbiome.',
      },
      {
        name: "Rose & Chamomile Water",
        desc: "A soothing base of Rosa Damascena and Chamomilla Recutita waters to refresh and calm sensitive skin.",
      },
      {
        name: "Balanced Precision",
        desc: "Optimized for delicate facial skin, leaving it feeling soft and hydrated—never stripped or tight.",
      },
    ],
    image: HERO_ASSETS.faceWash,
    scene: "/assets/face-wash-nobg.png",
  },
];

export const EXPERTISE = {
  headline: "A Scientific Partnership",
  content:
    "Alamar Naturals bridges the gap between clinical research and pharmaceutical formulation.",
  points: [
    {
      title: "Proven Standards",
      desc: "Developed through a collaboration of pharmaceutical and research expertise to meet the highest international standards of safety and efficacy.",
    },
    {
      title: "Crafted in Italy",
      desc: "Every bottle reflects a commitment to high-end scientific integrity and the finest nature-derived ingredients.",
    },
  ],
};

export const PROMISES = [
  {
    id: "organic",
    icon: "organic",
    title: "Organic",
    subtitle: "Clean botanical direction.",
  },
  {
    id: "pure-natural",
    icon: "drop",
    title: "100% Pure & Natural",
    subtitle: "Only thoughtful, botanical-led essentials.",
  },
  {
    id: "cruelty-free",
    icon: "leaf",
    title: "Vegan Friendly & Cruelty Free",
    subtitle: "Always tested on humans, never on animals.",
  },
  {
    id: "made-in-italy",
    icon: "italy",
    title: "Made in Italy",
    subtitle: "Italian craftsmanship and quality.",
  },
];

export const TESTIMONIAL = {
  name: "Al-Amar Community",
  product: "Pure Aura & Calm Pure",
  quote:
    "The formulas feel considered from the first use. Pure Aura keeps the day fresh without heaviness, and Calm Pure leaves skin comfortable instead of tight.",
  image: "/assets/lifestyle-1.png",
};

export const ARTICLES = [
  {
    id: "prebiotics",
    headline:
      "Beyond Surface Level: How Prebiotic Inulin Supports Your Skin’s Microbiome.",
    summary:
      "True skin health begins with balance. Discover how we use prebiotic inulin to nourish your skin’s natural defenses and maintain long-term harmony.",
    cta: "Read the Research",
    image: "/assets/lifestyle-2.png",
  },
  {
    id: "freshness",
    headline: "The Science of Freshness: Neutralization vs. Obstruction.",
    summary:
      "Understanding how botanical extracts and Bisabolol work with your body's natural processes to control odor while providing soothing care for delicate skin.",
    cta: "Discover the Formula",
    image: "/assets/lifestyle-3.png",
  },
  {
    id: "ph",
    headline: "Why pH-Balanced Formulation is Essential for Sensitive Skin.",
    summary:
      "Cleansing should restore clarity, not disturb your skin’s natural pH. Explore the pharmaceutical precision behind our Calm Pure Face Cleanser.",
    cta: "Learn More",
    image: "/assets/lifestyle-4.png",
  },
  {
    id: "standard",
    headline:
      "Merging Nature and Science: The Future of Highly Effective Skincare.",
    summary:
      "Learn how we bridge the gap between clinical research and pharmaceutical formulation to create products you can trust.",
    cta: "Our Philosophy",
    image: "/assets/lifestyle-5.png",
  },
];

export const FOOTER_GROUPS = [
  {
    title: "Shop",
    links: [
      { label: "All Products", href: "#products" },
      { label: "Natural Deodorant", href: "#products" },
      { label: "Face Cleanser", href: "#products" },
      { label: "Launch Updates", href: "#newsletter" },
    ],
  },
  {
    title: "Information",
    links: [
      { label: "Our Story", href: "#newsletter" },
      { label: "Philosophy", href: "#science" },
      { label: "Research Journal", href: "#journal" },
      { label: "Contact", href: "#newsletter" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Instagram", href: "#" },
      { label: "TikTok", href: "#" },
      { label: "Pinterest", href: "#" },
      { label: "Newsletter", href: "#newsletter" },
    ],
  },
];
