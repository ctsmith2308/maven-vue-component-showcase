interface NavLink {
  label: string
  to: string
}

interface NavGroup {
  category: string
  items: NavLink[]
}

const NAV_GROUPS: NavGroup[] = [
  {
    category: 'Components',
    items: [
      { label: 'Button', to: '/docs/button' },
      { label: 'TextInput', to: '/docs/text-input' },
    ]
  },
];

export { type NavLink, type NavGroup, NAV_GROUPS }

