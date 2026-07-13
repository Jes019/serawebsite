window.SERA_CONFIG = {
  vatRate: 0.18,
  trialDays: 30,
  annualDiscount: 0.10,
  customQuoteThreshold: 11,
  integrations: {
    formspree: 'https://formspree.io/f/mgogwgvw',
    trialAppsScript: 'https://script.google.com/macros/s/AKfycbyJLXC9DnDKatKLbRl_MIkwDlOI5Tf1RqXxmm8Odk_awXk9ODcr95OIGBfjjJbsk-ki/exec'
  },
  portfolioDiscounts: [
    { min: 1, max: 2, rate: 0 },
    { min: 3, max: 5, rate: 0.05 },
    { min: 6, max: 10, rate: 0.10 }
  ],
  setupCharge: {
    label: 'Confirmed following your property assessment',
    amount: null
  },
  onboarding: {
    existingSetup: '3–5 business days',
    newSetup: '5–10 business days',
    contingency: 'Up to 15 business days'
  },
  plans: [
    {
      code: 'basic',
      name: 'SERA Basic',
      description: 'Structured automation for common and predictable guest questions.',
      monthlyPerProperty: 79,
      professionalAI: false,
      trial: true,
      active: true,
      features: [
        'Automated WhatsApp guest support',
        'Property-specific information',
        'Check-in and check-out guidance',
        'Wi-Fi, parking and house rules',
        'Basic appliance guidance',
        'Service and maintenance collection',
        'Human and emergency escalation',
        'Standard onboarding support'
      ]
    },
    {
      code: 'professional',
      name: 'SERA Professional',
      description: 'Natural, contextual and multilingual conversations powered by the SERA AI guest agent.',
      monthlyPerProperty: 97,
      professionalAI: true,
      trial: true,
      active: true,
      popular: true,
      features: [
        'Everything in SERA Basic',
        'SERA AI-powered guest agent',
        'Natural-language understanding',
        'Conversation context and follow-ups',
        'Multilingual guest communication',
        'Request and urgency classification',
        'Structured escalation summaries',
        'Advanced multi-property support',
        'Reasonable fair-use limits'
      ]
    }
  ]
};
