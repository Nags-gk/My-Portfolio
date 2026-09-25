import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { notes, getNote, getAdjacentNotes } from '@/lib/notes';

export function generateStaticParams() {
  return notes.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) return { title: 'Note not found — Nagaraj GK' };
  return {
    title: `${note.title} — Nagaraj GK`,
    description: note.useCase,
  };
}

export default async function NotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) notFound();
  const { prev, next } = getAdjacentNotes(slug);

  return (
    <div className="relative min-h-screen">
      <div className="wallpaper" aria-hidden="true" />

      <div className="relative max-w-2xl mx-auto px-6 py-14">
        <Link
          href="/#notes"
          className="inline-flex items-center gap-1.5 font-mono text-[12px] text-dim hover:text-ink transition-colors mb-10"
        >
          <ArrowLeft size={14} />
          Back to desktop
        </Link>

        <p className="font-mono text-[11px] uppercase tracking-wide text-accent mb-3">Notes.app</p>
        <h1 className="font-display font-bold text-3xl sm:text-4xl mb-4 text-balance">{note.title}</h1>

        <div className="flex flex-wrap gap-2 mb-10">
          {note.tags.map((tag: string) => (
            <span key={tag} className="font-mono text-[10.5px] uppercase tracking-wide px-2.5 py-1 rounded-full border border-line text-dim">
              {tag}
            </span>
          ))}
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="font-mono text-[11px] uppercase tracking-wide text-dim mb-2">Use case</h2>
            <p className="text-[16px] leading-relaxed text-ink-soft">{note.useCase}</p>
          </section>

          <section>
            <h2 className="font-mono text-[11px] uppercase tracking-wide text-dim mb-2">Architecture</h2>
            <p className="text-[16px] leading-relaxed text-ink-soft">{note.architecture}</p>
          </section>

          <section className="bg-highlight border-l-2 border-accent rounded-r-lg px-5 py-4">
            <h2 className="font-mono text-[11px] uppercase tracking-wide text-accent mb-2">Highlight</h2>
            <p className="text-[16px] leading-relaxed text-ink-soft">{note.highlight}</p>
          </section>
        </div>

        <a
          href={note.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-10 bg-solid text-solid-fg font-mono text-[13px] px-5 py-3 rounded-full hover:bg-accent hover:text-white transition-colors"
        >
          View source
          <ArrowUpRight size={15} />
        </a>

        <nav className="mt-14 pt-6 border-t border-line grid grid-cols-2 gap-4">
          {prev ? (
            <Link href={`/notes/${prev.slug}`} className="group flex flex-col items-start gap-1">
              <span className="font-mono text-[10px] uppercase tracking-wide text-dim flex items-center gap-1">
                <ArrowLeft size={11} /> Previous
              </span>
              <span className="font-display font-semibold text-[15px] group-hover:text-accent transition-colors">{prev.title}</span>
            </Link>
          ) : <span />}
          {next ? (
            <Link href={`/notes/${next.slug}`} className="group flex flex-col items-end gap-1 text-right">
              <span className="font-mono text-[10px] uppercase tracking-wide text-dim flex items-center gap-1">
                Next <ArrowRight size={11} />
              </span>
              <span className="font-display font-semibold text-[15px] group-hover:text-accent transition-colors">{next.title}</span>
            </Link>
          ) : <span />}
        </nav>
      </div>
    </div>
  );
}
