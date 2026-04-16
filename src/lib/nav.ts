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
      { label: 'Therapist Training', href: '/for-practitioners/training' },
      { label: 'Therapist Consultation', href: '/for-practitioners/consultation' },
      { label: 'CEUs', href: '/for-practitioners/ceus' },
    ],
  },
  { label: 'Psychotherapy', href: '/psychotherapy' },
  { label: 'Retreats', href: '/retreats' },
  { label: 'Coaching', href: '/coaching' },
  { label: 'Ketamine Curious', href: '/ketamine-curious' },
  { label: 'Contact', href: '/contact' },
];

export const footerNav: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Psychotherapy', href: '/psychotherapy' },
  { label: 'Retreats', href: '/retreats' },
  { label: 'Ketamine Curious', href: '/ketamine-curious' },
  { label: 'Shop', href: '/shop' },
  { label: 'Contact', href: '/contact' },
];
