import { Briefcase, Code2, Mail, User, Home as HomeIcon, GraduationCap } from 'lucide-react'

export const siteConfig = {
  name: 'Nagaraj GK',
  title: 'Nagaraj GK | Portfolio',
  description: 'Personal portfolio of Nagaraj GK, showcasing my work and skills',
  url: 'https://nagarajgk.vercel.app',
  links: {
    twitter: 'https://twitter.com/yourusername',
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
  },
  mainNav: [
    {
      title: 'Home',
      href: '/#home',
      icon: HomeIcon,
    },
    {
      title: 'About',
      href: '/#about',
      icon: User,
    },
    {
      title: 'Experience',
      href: '/#experience',
      icon: Briefcase,
    },
    {
      title: 'Projects',
      href: '/#projects',
      icon: Code2,
    },
    {
      title: 'Education',
      href: '/#education',
      icon: GraduationCap,
    },
    {
      title: 'Contact',
      href: '/#contact',
      icon: Mail,
    },
  ],
  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: 'github',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: 'linkedin',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      icon: 'twitter',
    },
  ],
  skills: [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Python',
    'SQL',
    'MongoDB',
    'Docker',
    'AWS',
  ],
  experience: [
    {
      role: 'Software Engineer',
      company: 'Tech Company',
      date: '2022 - Present',
      description: 'Working on building scalable web applications with modern technologies.',
    },
    {
      role: 'Frontend Developer',
      company: 'Startup',
      date: '2020 - 2022',
      description: 'Developed and maintained user interfaces using React and TypeScript.',
    },
  ],
  education: [
    {
      degree: 'B.Tech in Computer Science',
      institution: 'University Name',
      date: '2016 - 2020',
    },
  ],
  projects: [
    {
      title: 'Project 1',
      description: 'A brief description of project 1',
      tags: ['React', 'Next.js', 'Tailwind CSS'],
      link: '#',
    },
    {
      title: 'Project 2',
      description: 'A brief description of project 2',
      tags: ['Node.js', 'Express', 'MongoDB'],
      link: '#',
    },
  ],
}
