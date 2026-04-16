export const site = {
  name: 'Dr. Lisa Gold',
  tagline: 'Integrative Relationship, Sex & Psychedelic-Assisted Psychotherapist',
  description:
    'Integrative relationship, sex, and psychedelic-assisted psychotherapy with Dr. Lisa Gold. Training, retreats, and consultation for therapists.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://drlisagold.com',
  contactEmail: 'hola@clyckmedia.com',
  social: {
    instagram: 'https://www.instagram.com/drlisagold',
    linkedin: 'https://www.linkedin.com/in/lisa-gold-phd',
  },
  partners: [
    {
      name: 'Clinica Synaptica',
      description:
        'Integrative psychiatry and ketamine-assisted therapy clinic where Dr. Gold serves as a clinical partner.',
      url: 'https://clinicasynaptica.com',
      logo: 'clinica-synaptica-logo',
    },
    {
      name: 'Arizona Relationship & Family Institute',
      description:
        "Dr. Gold is the founder and clinical director of AZRFI, specializing in couples, family, and sex therapy.",
      url: 'https://azrelationshipinstitute.com',
      logo: 'azrfi-logo',
    },
  ],
} as const;

export type Site = typeof site;
