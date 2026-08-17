// Edit this file to re-label the entire site. Header, Footer, the homepage
// and SEO defaults all read from here instead of hardcoding copy.
export const SITE = {
  name: 'Samuel Eduardo López Cárdenas',
  role: 'Estudiante de ingenieria de sistemas, desarrollador de software y desarrollador web',
  email: 'sedlopez@unbosque.edu.co',
  tagline: 'Sobre mí',
  description:
    'Portafolio de Samuel López, estudiante de ingenieria de sistemas de la Universidad El Bosque.',
  status: 'Actualmente estudiante de la Universidad El Bosque',
  avatar: '/img/foto.jpeg',
  social: [
    { label: 'GitHub', href: 'https://github.com/0hsamm' },
   
  ],
  locale: 'en',
} as const;

export const NAV_LINKS = [
  { label: 'Trabajo', href: '/work' },
  { label: 'Sobre mi', href: '/about' },
] as const;