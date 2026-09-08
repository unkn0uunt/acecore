export const primaryNav = [
  { label: 'Product', to: '/product' },
  { label: 'Pricing', to: '/pricing' },
  {
    label: 'Our services',
    children: [
      { label: 'Solar', to: '/product' },
      { label: 'PowerCell', to: '/product' },
      { label: 'Financing', to: '/support' },
    ],
  },
  { label: 'About us', to: '/about' },
];

export const contactCta = {
  label: 'Contact US',
  to: '/support',
};

export const announcement = {
  text: 'Save on electricity by installing our powercell in your home',
  linkLabel: 'Join Presale',
  href: 'https://wa.me/2349015294724',
  external: true,
};
