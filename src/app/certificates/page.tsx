import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import CertificatesGrid from '@/components/CertificatesGrid';

export const metadata = {
  title: 'Certificates — Nagaraj GK',
  description: 'Certifications and awards — Quantum Machine Learning Research, Python, IoT, Cybersecurity, and SQL.',
};

export default function CertificatesPage() {
  return (
    <div className="relative min-h-screen">
      <div className="wallpaper" aria-hidden="true" />

      <div className="relative max-w-4xl mx-auto px-6 py-14">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 font-mono text-[12px] text-dim hover:text-ink transition-colors mb-10"
        >
          <ArrowLeft size={14} />
          Back to desktop
        </Link>

        <p className="font-mono text-[11px] uppercase tracking-wide text-accent mb-3">Certificates — Finder</p>
        <h1 className="font-display font-bold text-3xl sm:text-4xl mb-10 text-balance">Certifications &amp; awards</h1>

        <CertificatesGrid />
      </div>
    </div>
  );
}
