export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'For Practitioners',
    href: '/for-practitioners',
    children: [
      { label: 'Training & Certification', href: '/for-practitioners/training' },
      { label: 'Consultation', href: '/for-practitioners/consultation' },
    ],
  },
  { label: 'Psychotherapy', href: '/psychotherapy' },
  { label: 'Retreats', href: '/retreats' },
  { label: 'Coaching', href: '/coaching' },
  { label: 'Ketamine Curious', href: '/ketamine-curious' },
  { label: 'Contact', href: '/contact' },
];

export const footerNav: NavItem[] = navigation.filter((n) => n.href !== '/');
