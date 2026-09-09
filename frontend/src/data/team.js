export const teamPageCopy = {
  eyebrow: 'MEET THE TEAM',
  hero: {
    title: 'The people powering Acecore',
    description:
      'Find guides, answers, and troubleshooting help for your PowerCell and PowerCore app.',
  },
  closing: {
    title: 'Different disciplines. One mission.',
    description:
      'Find guides, answers, and troubleshooting help for your PowerCell and PowerCore app.',
  },
  imageAlt: 'Acecore team members together',
};

/** Placeholder slots only — no invented names, roles, or photos. */
function placeholderMembers(groupId) {
  return [1, 2, 3, 4].map((n) => ({
    id: `${groupId}-${n}`,
    name: null,
    role: null,
    image: null,
  }));
}

export const teamGroups = [
  {
    id: 'leadership',
    title: 'Leadership',
    description: 'Setting the direction for a smarter energy future.',
    members: placeholderMembers('leadership'),
  },
  {
    id: 'engineering',
    title: 'Engineering & Technology',
    description: 'Building the systems that make reliable energy possible.',
    members: placeholderMembers('engineering'),
  },
  {
    id: 'product',
    title: 'Product & Design',
    description: 'Turning complex energy technology into simple experiences.',
    members: placeholderMembers('product'),
  },
  {
    id: 'operations',
    title: 'Operations',
    description: 'Keeping the people, products, and processes moving.',
    members: placeholderMembers('operations'),
  },
];
