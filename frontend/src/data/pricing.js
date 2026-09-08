export const pricingModes = [
  { id: 'solar', label: 'Solar Included' },
  { id: 'powercell', label: 'PowerCell Only' },
];

export const pricingCopy = {
  eyebrow: 'PRICING',
  title: 'Choose the Right PowerCell for You.',
  description:
    'Compare PowerCell models and choose the system that fits your energy needs.',
  cta: 'Get Your Powercell',
  instalmentLabel: 'Installation payment',
};

const sharedInstalments = [
  { label: '3 Months (+7% interest)', amount: '₦636,700' },
  { label: '4 Months (+10% interest)', amount: '₦477,500' },
  { label: '5 Months (+13% interest)', amount: '₦382,000' },
];

export const pricingPlans = [
  {
    id: 'prime',
    name: 'POWERCELL PRIME',
    prices: {
      solar: '₦4.4M',
      powercell: '₦4.4M',
    },
    specs: ['3.5kW Output', '5kWh Capacity'],
    instalments: sharedInstalments,
  },
  {
    id: 'prime-plus',
    name: 'POWERCELL PRIME+',
    prices: {
      solar: '₦8.9M',
      powercell: '₦8.9M',
    },
    specs: ['3.5kW Output', '5kWh Capacity'],
    instalments: sharedInstalments,
  },
  {
    id: 'ultra',
    name: 'POWERCELL ULTRA',
    prices: {
      solar: '₦15.5M',
      powercell: '₦15.5M',
    },
    specs: ['3.5kW Output', '5kWh Capacity'],
    instalments: sharedInstalments,
  },
];
