'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail, ArrowUpRight, ArrowRight, Download, Sun, Moon } from 'lucide-react';
import Panel from './desktop/Panel';
import { notes } from '@/lib/notes';

const skillCategories = [
  { name: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'Java'] },
  { name: 'Frameworks', items: ['React', 'Next.js', 'FastAPI'] },
  { name: 'AI / ML', items: ['PyTorch', 'TensorFlow', 'LangChain'] },
  { name: 'Quantum', items: ['Qiskit', 'PennyLane', 'Cirq'] },
  { name: 'Databases', items: ['PostgreSQL', 'MongoDB', 'MySQL'] },
  { name: 'Cloud', items: ['AWS', 'Google Cloud', 'Vercel'] },
];

const experiences = [
  {
    role: 'Student Researcher',
    company: 'Unisys Pvt Ltd · Bangalore',
    period: 'Nov 2021 — Jul 2022',
    points: [
      '9-month research fellowship in Quantum Machine Learning, developing hybrid quantum-classical algorithms.',
      'Engineered Quanvolutional Neural Networks (Cirq, Qiskit, PennyLane) for image classification, +5% vs. classical CNN baselines.',
      'Awarded "Certificate of Recognition" for technical excellence in R&D.',
    ],
  },
  {
    role: 'Software Developer Intern',
    company: 'The Sparks Foundation · Remote',
    period: 'Jun 2021 — Jul 2021',
    points: [
      'Built a responsive banking web application with a real-time digital passbook.',
      'Implemented secure PHP transaction processing with validation and error handling.',
    ],
  },
];

const education = [
  { degree: 'MS, Software Engineering', school: 'San Jose State University', period: '2024 — 2025' },
  { degree: 'BE, Computer Science', school: 'Nitte Meenakshi Institute of Technology', period: '2018 — 2022' },
];

// `kind` is a one-line honest reason a project isn't one of the five Notes
// deep-dives — context, not a demotion. Featured projects (Taxbot, Snooptrade,
// Quantum ML Research, Canvas-Go, Bitsmart) omit it; their case is in My Work.app.
const projects = [
  { title: 'Taxbot', stack: 'LangChain · RAG · Gemini', outcome: '90% accuracy', link: 'https://github.com/Nags-gk/Taxbot' },
  { title: 'Snooptrade', stack: 'FastAPI · AWS', outcome: 'Real-time', link: 'https://github.com/Nags-gk/SnoopTrade' },
  { title: 'Canvas-Go', stack: 'FastAPI · MySQL', outcome: '-35% latency', link: 'https://github.com/Nags-gk/Canvas-Go' },
  { title: 'Quantum ML Research', stack: 'Qiskit · PennyLane', outcome: '+5% vs CNN', link: 'https://zenodo.org/records/17570822' },
  { title: 'TrustVault', stack: 'PHP · MySQL', outcome: 'Shipped', link: 'https://github.com/Nags-gk/TrustVault', kind: 'coursework' },
  { title: 'CipherChat', stack: 'Android · Java', outcome: 'AES-128', link: 'https://github.com/Nags-gk', kind: 'personal' },
  { title: 'SmartCanteen', stack: 'Python · Tkinter', outcome: 'Shipped', link: 'https://github.com/Nags-gk', kind: 'coursework' },
  { title: 'Titanic Survival Prediction', stack: 'CUDA · C++', outcome: 'GPU-accelerated', link: 'https://github.com/Nags-gk/TitanicSurvivalPrecidtion', kind: 'coursework' },
  { title: 'Bitsmart', stack: 'TensorFlow · LSTM', outcome: '7-day forecast', link: 'https://github.com/Nags-gk/Bitsmart' },
  { title: 'SnapSummarizer', stack: 'Python · NLP', outcome: 'Shipped', link: 'https://github.com/Nags-gk', kind: 'personal' },
  { title: 'BloodLink', stack: 'PHP · MySQL', outcome: 'Shipped', link: 'https://github.com/Nags-gk', kind: 'coursework' },
  { title: 'Stock Portfolio Modern', stack: 'TypeScript · React', outcome: 'Shipped', link: 'https://github.com/Nags-gk/stock-portfolio-modern', kind: 'personal' },
  { title: 'Orbit', stack: 'React · Zustand', outcome: 'Shipped', link: 'https://github.com/Nags-gk/orbit', kind: 'personal' },
  { title: 'Personal Website', stack: 'HTML · CSS · JS', outcome: 'Shipped', link: 'https://github.com/Nags-gk/my-website-repo', kind: 'earlier portfolio' },
];

const MENUBAR_ITEMS = ['about', 'skills', 'experience', 'education', 'projects', 'notes'];
const TITLES = {
  about: 'About.app',
  skills: 'Skills.app',
  experience: 'Experience.app',
  education: 'Education.app',
  projects: 'Projects — Finder',
  notes: 'My Work.app',
};

const Desktop = () => {
  const [copied, setCopied] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Synced from the DOM attribute a pre-hydration <script> in layout.tsx
    // already set from localStorage/system preference — a legitimate read
    // from an external, non-React-controlled source.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(document.documentElement.getAttribute('data-theme') || 'light');
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      // localStorage unavailable (private mode) — theme just won't persist
    }
    setTheme(next);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('nagarajgk50@gmail.com');
    } catch {
      // clipboard unavailable — mailto link still works
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  // Above 1024px every panel is already on screen (that's the whole point of
  // the fixed grid) — a smooth-scroll anchor click there is a no-op, so it
  // spotlights the target panel instead. Below 1024px the grid genuinely
  // scrolls, so the native anchor jump is left alone.
  const handleNavClick = (e, id) => {
    if (typeof window === 'undefined' || window.innerWidth <= 1024) return;
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.remove('panel-spotlight');
    void el.offsetWidth; // restart the animation if clicked again mid-flash
    el.classList.add('panel-spotlight');
    setTimeout(() => el.classList.remove('panel-spotlight'), 900);
  };

  return (
    <div className="relative desktop-shell flex flex-col">
      <div className="wallpaper" aria-hidden="true" />

      <header className="shrink-0 z-40 menubar">
        <div className="flex justify-between items-center px-5 h-14 max-w-[1400px] mx-auto gap-4">
          <span className="font-display font-semibold text-sm shrink-0">NGK</span>
          <nav className="hidden sm:flex items-center gap-4 text-[12px] text-dim font-medium">
            {MENUBAR_ITEMS.map((id) => (
              <a key={id} href={`#${id}`} onClick={(e) => handleNavClick(e, id)} className="hover:text-ink transition-colors">
                {TITLES[id].replace('.app', '').replace('.txt', '').replace(' — Finder', '')}
              </a>
            ))}
            <Link href="/certificates" className="hover:text-ink transition-colors">
              Certificates
            </Link>
          </nav>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-1.5 font-mono text-[11px] text-dim hover:text-accent transition-colors"
            >
              <Download size={13} />
              <span className="hidden sm:inline">Résumé</span>
            </a>
            <button
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="text-dim hover:text-ink transition-colors"
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <span className="hidden md:inline font-mono text-[10.5px] text-dim">© {new Date().getFullYear()} NGK</span>
          </div>
        </div>
      </header>

      <div className="desktop-grid">
        <Panel id="about" title={TITLES.about} area="about" index={0}>
          <div className="h-full overflow-y-auto grid sm:grid-cols-[1.3fr_1fr] gap-x-6 gap-y-4">
            <div>
              <h2 className="font-display font-bold text-lg mb-2">Nagaraj G. Kanni</h2>
              <p className="text-[13.5px] leading-relaxed text-ink-soft mb-3">
                Software Engineer — applied ML and full-stack systems. Formerly a Quantum Machine Learning researcher at Unisys, now building RAG assistants, analytics pipelines, and cloud-deployed products.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="font-mono text-[10px] bg-surface-soft border border-line rounded-[5px] px-2 py-1">San Jose, CA</span>
                <span className="font-mono text-[10px] bg-surface-soft border border-line rounded-[5px] px-2 py-1">Open to 2026 roles</span>
              </div>
            </div>
            <div className="sm:border-l sm:border-line sm:pl-6">
              <p className="font-mono text-[9.5px] uppercase tracking-wide text-dim mb-2">Contact</p>
              <p className="text-[13px] mb-3">nagarajgk50@gmail.com<br />+1 408 210 2658</p>
              <div className="flex flex-wrap gap-2">
                <button onClick={handleCopy} className="inline-flex items-center gap-1.5 bg-solid text-solid-fg font-mono text-[11px] px-3 py-1.5 rounded-md hover:bg-accent hover:text-white transition-colors">
                  <Mail size={12} />{copied ? 'Copied ✓' : 'Copy email'}
                </button>
                <a href="https://github.com/Nags-gk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 border border-line font-mono text-[11px] px-3 py-1.5 rounded-md hover:border-ink transition-colors">
                  <Github size={12} />GitHub
                </a>
                <a href="https://www.linkedin.com/in/nagsgk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 border border-line font-mono text-[11px] px-3 py-1.5 rounded-md hover:border-ink transition-colors">
                  <Linkedin size={12} />LinkedIn
                </a>
              </div>
            </div>
          </div>
        </Panel>

        <Panel id="skills" title={TITLES.skills} area="skills" index={1}>
          <div className="grid grid-cols-2 gap-x-4 gap-y-3 h-full overflow-y-auto">
            {skillCategories.map((cat) => (
              <div key={cat.name}>
                <p className="font-mono text-[9.5px] uppercase tracking-wide text-accent mb-1">{cat.name}</p>
                {cat.items.map((item) => (
                  <p key={item} className="font-display font-medium text-[12.5px] leading-[1.5]">{item}</p>
                ))}
              </div>
            ))}
          </div>
        </Panel>

        <Panel id="experience" title={TITLES.experience} area="experience" index={2}>
          <div className="h-full overflow-y-auto pr-1">
            {experiences.map((exp) => (
              <div key={exp.role} className="mb-3 last:mb-0">
                <div className="flex justify-between items-baseline flex-wrap gap-1">
                  <h3 className="font-display font-bold text-[13px]">{exp.role}</h3>
                  <span className="font-mono text-[9.5px] text-dim">{exp.period}</span>
                </div>
                <p className="font-mono text-[9.5px] text-accent mb-1.5 uppercase tracking-wide">{exp.company}</p>
                <ul className="space-y-1">
                  {exp.points.map((pt, i) => (
                    <li key={i} className="text-[11.5px] leading-relaxed text-ink-soft pl-3 relative before:content-['–'] before:absolute before:left-0">
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Panel>

        <Panel id="education" title={TITLES.education} area="education" index={3}>
          <div className="h-full overflow-y-auto">
            {education.map((edu) => (
              <div key={edu.degree} className="mb-3 last:mb-0 pb-3 last:pb-0 border-b last:border-b-0 border-line">
                <p className="font-mono text-[9.5px] text-accent mb-1">{edu.period}</p>
                <h3 className="font-display font-bold text-[13px]">{edu.degree}</h3>
                <p className="text-[12px] text-ink-soft">{edu.school}</p>
              </div>
            ))}
          </div>
        </Panel>

        <Panel id="projects" title={TITLES.projects} area="projects" index={5}>
          {/* Multi-column, no internal scroll — every title fits in the row's
              fixed height by reading down each column before wrapping to the
              next, like a real Finder column view. */}
          <div className="h-full columns-1 sm:columns-2 lg:columns-3 gap-x-8">
            {projects.map((p) => (
              <a
                key={p.title}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-center py-1.5 border-b border-line group break-inside-avoid-column"
              >
                <span className="flex items-center gap-1.5 min-w-0">
                  <span className="font-display font-semibold text-[12px] group-hover:text-accent transition-colors truncate">{p.title}</span>
                  {p.kind && <span className="font-mono text-[8.5px] uppercase tracking-wide text-dim border border-line rounded-full px-1.5 py-0.5 shrink-0">{p.kind}</span>}
                </span>
                <span className="font-mono text-[9px] text-dim flex items-center gap-1.5 shrink-0 ml-2">
                  {p.outcome}
                  <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </a>
            ))}
          </div>
        </Panel>

        <Panel id="notes" title={TITLES.notes} area="notes" index={4}>
          <div className="h-full flex flex-col">
            <p className="font-mono text-[9px] uppercase tracking-wide text-dim mb-1 shrink-0">Deep dives — click a title</p>
            <div className="flex-1 min-h-0 flex flex-col justify-between overflow-hidden">
              {notes.map((n) => (
                <Link
                  key={n.slug}
                  href={`/notes/${n.slug}`}
                  className="flex justify-between items-center py-1 border-b border-line last:border-b-0 group"
                >
                  <span className="font-display font-semibold text-[12.5px] group-hover:text-accent transition-colors">{n.title}</span>
                  <ArrowRight size={12} className="text-dim group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </Panel>
      </div>
    </div>
  );
};

export default Desktop;
