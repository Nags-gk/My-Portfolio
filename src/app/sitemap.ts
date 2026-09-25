import type { MetadataRoute } from 'next';
import { notes } from '@/lib/notes';

const siteUrl = 'https://nagarajgk.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const noteEntries: MetadataRoute.Sitemap = notes.map((n) => ({
    url: `${siteUrl}/notes/${n.slug}`,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [
    {
      url: siteUrl,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...noteEntries,
  ];
}
