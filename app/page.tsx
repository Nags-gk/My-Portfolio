import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { ArrowRight, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="relative w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary/20">
            <Image
              src="/profile.jpg"
              alt="Nagaraj GK"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 mb-4">
            {siteConfig.name}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Software Engineer | Full Stack Developer | Tech Enthusiast
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="#projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#contact">
                Contact Me
                <Mail className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="flex justify-center gap-4 mt-8">
            {siteConfig.socialLinks.map((social) => (
              <Button key={social.name} variant="ghost" size="icon" asChild>
                <Link href={social.url} target="_blank" rel="noopener noreferrer">
                  <span className="sr-only">{social.name}</span>
                  {social.icon === 'github' && <Github className="h-5 w-5" />}
                  {social.icon === 'linkedin' && <Linkedin className="h-5 w-5" />}
                  {social.icon === 'twitter' && <Twitter className="h-5 w-5" />}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                Hello! I'm Nagaraj GK, a passionate software engineer with a love for building
                exceptional digital experiences. With expertise in modern web technologies, I create
                efficient, scalable, and user-friendly applications.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                My journey in software development started several years ago, and since then, I've had
                the privilege of working with various technologies and collaborating with talented
                people to create amazing products.
              </p>
              <div className="flex flex-wrap gap-2">
                {siteConfig.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="/about.jpg"
                alt="About Me"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
          <div className="space-y-8">
            {siteConfig.experience.map((exp, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-lg shadow-sm border border-border transition-all hover:shadow-md"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <span className="text-sm text-muted-foreground">{exp.date}</span>
                </div>
                <h4 className="text-lg text-primary mb-3">{exp.company}</h4>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg border border-border bg-background p-6 transition-all hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
          <div className="space-y-8">
            {siteConfig.education.map((edu, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-lg shadow-sm border border-border"
              >
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-primary mb-2">{edu.institution}</p>
                <p className="text-muted-foreground">{edu.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of
            your vision.
          </p>
          <Button size="lg" asChild>
            <Link href="mailto:your.email@example.com">
              Say Hello
              <Mail className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
