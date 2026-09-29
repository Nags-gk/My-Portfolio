'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { certificates } from '@/lib/certificates';

const CertificatesGrid = () => {
  const [lightboxCert, setLightboxCert] = useState(null);

  useEffect(() => {
    if (!lightboxCert) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setLightboxCert(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxCert]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((c) => (
          <button key={c.name} onClick={() => setLightboxCert(c)} className="text-left group">
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-line mb-2.5">
              <Image
                src={c.image}
                alt={c.name}
                fill
                sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <p className="font-display font-semibold text-[15px] group-hover:text-accent transition-colors">{c.name}</p>
            <p className="font-mono text-[11px] text-dim">{c.issuer} · {c.date}</p>
          </button>
        ))}
      </div>

      {lightboxCert && (
        <div
          className="lightbox-backdrop"
          onClick={() => setLightboxCert(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightboxCert.name}
        >
          <div className="relative max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightboxCert(null)}
              aria-label="Close"
              className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors"
            >
              <X size={22} />
            </button>
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-win">
              <Image src={lightboxCert.image} alt={lightboxCert.name} fill sizes="700px" className="object-contain" />
            </div>
            <p className="font-display font-semibold text-white text-sm mt-3">{lightboxCert.name}</p>
            <p className="font-mono text-[11px] text-white/60">{lightboxCert.issuer} · {lightboxCert.date}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default CertificatesGrid;
