export const pricingModes = [
  { id: 'solar', label: 'Solar Included' },
  { id: 'powercell', label: 'PowerCell Only' },
];

export const pricingPlans = [
  {
    id: 'prime',
    name: 'PowerCell Prime',
    power: '3.5 KVA',
    storage: '5 kWh',
    prices: {
      solar: '₦ —',
      powercell: '₦ —',
    },
    instalment: 'Flexible instalments available',
  },
  {
    id: 'prime-plus',
    name: 'PowerCell Prime+',
    power: '5 KVA',
    storage: '10 kWh',
    prices: {
      solar: '₦ —',
      powercell: '₦ —',
    },
    instalment: 'Flexible instalments available',
  },
  {
    id: 'ultra',
    name: 'PowerCell Ultra',
    power: '8 KVA',
    storage: '15 kWh',
    prices: {
      solar: '₦ —',
      powercell: '₦ —',
    },
    instalment: 'Flexible instalments available',
  },
];
