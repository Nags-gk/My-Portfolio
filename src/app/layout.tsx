import type { Metadata } from "next";
import { Outfit, Work_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = JetBrains_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = "https://nagarajgk.vercel.app";
const title = "Nagaraj GK — Software Engineer";
const description =
  "Software Engineer specializing in applied ML and full-stack systems. Formerly a Quantum Machine Learning researcher at Unisys, now building RAG assistants, analytics pipelines, and cloud-deployed products.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  authors: [{ name: "Nagaraj G. Kanni" }],
  keywords: [
    "Nagaraj GK",
    "Software Engineer",
    "Data Science",
    "Machine Learning",
    "Quantum Computing",
    "Full-Stack Developer",
    "San Jose State University",
  ],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Nagaraj GK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

const themeInitScript = `(function(){try{var s=localStorage.getItem('theme');var t=s||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${workSans.variable} ${plexMono.variable} antialiased`}
      >
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {children}
      </body>
    </html>
  );
}
