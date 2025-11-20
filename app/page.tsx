"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, ExternalLink, Briefcase, Database, Code, User } from 'lucide-react';

const projects = [
  {
    id: 'dashboard',
    title: 'Interactive Data Analysis Dashboard',
    description:
      'A web-based analytics dashboard that visualizes key metrics using interactive charts and clean UI. Built to showcase EDA and visualization skills.',
    tech: ['HTML', 'JavaScript', 'Chart.js', 'TailwindCSS'],
    demo: 'https://tubular-valkyrie-d321c9.netlify.app/',
    github: '#'
  },
  {
    id: 'password-gen',
    title: 'Secure Password Generator',
    description:
      'Generates secure random passwords with options for length and complexity. Lightweight, accessible, and easy to use.',
    tech: ['HTML', 'JavaScript'],
    demo: 'https://tubular-paprenjak-a81cdf.netlify.app/',
    github: '#'
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Frontend',
    description:
      'A responsive e-commerce frontend demo showing product listings, cart interactions, and a polished Bootstrap-based UI.',
    tech: ['HTML', 'Bootstrap', 'JavaScript'],
    demo: 'https://lustrous-faun-71a554.netlify.app/',
    github: '#'
  },
  {
    id: 'tts',
    title: 'Text-to-Speech Web App',
    description:
      'Accessible tool using the Web Speech API to convert typed text into speech, with controls for pitch and rate.',
    tech: ['HTML', 'JavaScript', 'Web APIs'],
    demo: 'https://shiny-chebakia-f8ec9a.netlify.app/',
    github: '#'
  }
];

export default function PortfolioApp() {
  const [activeProject, setActiveProject] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-800">
      <header className="max-w-5xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white font-semibold text-lg">OS</div>
          <div>
            <h1 className="text-xl font-bold">Okonkwo Stephen Ifeanyi</h1>
            <p className="text-sm text-slate-600">Data Science • Backend Development • Database Engineering</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-4">
          <a href="#about" className="text-sm hover:underline">About</a>
          <a href="#projects" className="text-sm hover:underline">Projects</a>
          <a href="#experience" className="text-sm hover:underline">Experience</a>
          <a href="#contact" className="text-sm hover:underline">Contact</a>
        </nav>
        <button
          className="md:hidden p-2 rounded-md bg-slate-200"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {menuOpen && (
        <div className="md:hidden bg-white border-b">
          <div className="max-w-5xl mx-auto p-4 flex flex-col gap-2">
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        </div>
      )}

      <main className="max-w-5xl mx-auto p-6">
        {/* Hero */}
        <section id="about" className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center py-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-2"
          >
            <h2 className="text-3xl font-extrabold mb-2">Hi — I’m Stephen. I build data-driven and backend systems.</h2>
            <p className="text-slate-600 mb-4">
              I am a Computer Science student at Hallmark University (Year 3) focused on Data Science, backend development, and databases. I enjoy turning messy data into actionable insights and creating dependable backend systems.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="mailto:stephenokonkwo18@gmail.com" className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:brightness-95">
                <Mail size={16} /> Contact Me
              </a>
              <a href="https://tubular-valkyrie-d321c9.netlify.app/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border rounded-md">
                <ExternalLink size={16} /> View Live Dashboard
              </a>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-4 rounded-2xl shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-lg">OS</div>
              <div>
                <h3 className="font-semibold">Nigeria, Lagos</h3>
                <p className="text-sm text-slate-500">+234 9134 5183 52</p>
                <p className="text-sm text-slate-500">stephenokonkwo18@gmail.com</p>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <User size={14} /> <span>Year 3 — BSc Computer Science (Expected June 2027)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <Briefcase size={14} /> <span>Tofemtech Lab — Data Intern (Data cleaning & statistical tests)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <Database size={14} /> <span>MySQL • MongoDB • PHP • Python</span>
              </div>
            </div>
          </motion.aside>
        </section>

        {/* Skills */}
        <section id="skills" className="mt-6">
          <h3 className="text-2xl font-semibold mb-3">Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h4 className="font-semibold mb-2">Programming</h4>
              <p className="text-sm text-slate-600">Python • SQL • PHP • JavaScript</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h4 className="font-semibold mb-2">Databases</h4>
              <p className="text-sm text-slate-600">MySQL • MongoDB</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h4 className="font-semibold mb-2">Data & Tools</h4>
              <p className="text-sm text-slate-600">Data cleaning • Statistical testing • Dashboards • Web APIs</p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-10">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold">Selected Projects</h3>
            <p className="text-sm text-slate-500">Click a project for details & live demo</p>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((p) => (
              <motion.article
                key={p.id}
                whileHover={{ y: -6 }}
                className="bg-white p-5 rounded-2xl shadow hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-semibold text-lg">{p.title}</h4>
                    <p className="text-sm text-slate-600 mt-2">{p.description}</p>
                    <div className="flex gap-2 mt-3 flex-wrap">
                      {p.tech.map((t) => (
                        <span key={t} className="text-xs px-2 py-1 rounded-md bg-slate-100">{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <div className="text-sm text-slate-500">Live</div>
                    <div className="flex gap-2">
                      <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-1 rounded-md border text-sm">
                        Demo <ExternalLink size={14} />
                      </a>
                      <button
                        onClick={() => setActiveProject(p)}
                        className="px-3 py-1 rounded-md bg-slate-800 text-white text-sm"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mt-10">
          <h3 className="text-2xl font-semibold mb-4">Experience</h3>
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h4 className="font-semibold">Tofemtech Lab — Data Intern</h4>
            <p className="text-slate-600 text-sm mt-2">Cleaned and preprocessed data, performed statistical tests for decision support, and improved data readiness with repeatable pipelines.</p>
            <ul className="list-disc ml-5 mt-3 text-sm text-slate-600">
              <li>Built data cleaning scripts to automate repetitive tasks.</li>
              <li>Designed small analysis reports to support business decisions.</li>
            </ul>
          </div>

          <div className="mt-6 bg-white p-6 rounded-2xl shadow-sm">
            <h4 className="font-semibold">Freelance Projects — Backend & Databases</h4>
            <p className="text-slate-600 text-sm mt-2">Created database-driven applications using PHP and MySQL. Ongoing work to expand MongoDB skills with NoSQL projects.</p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-10 mb-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-semibold">Get in touch</h3>
            <p className="text-slate-600 mt-2">I’m open to internship and entry-level roles in data science and backend development. Send me an email or view my live projects.</p>

            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Mail size={16} /> <a href="mailto:stephenokonkwo18@gmail.com" className="underline">stephenokonkwo18@gmail.com</a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Github size={16} /> <a href="#" className="underline">GitHub (add your repo link)</a>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h4 className="font-semibold mb-2">Quick Contact Form (Client-side)</h4>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="border-t py-6 mt-6">
        <div className="max-w-5xl mx-auto text-center text-sm text-slate-500">© {new Date().getFullYear()} Okonkwo Stephen • Built with React & Tailwind</div>
      </footer>

      {/* Project Modal */}
      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="w-full max-w-3xl bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-sm text-slate-600 mt-2">{project.description}</p>
            <div className="flex gap-2 mt-3 flex-wrap">
              {project.tech.map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded-md bg-slate-100">{t}</span>
              ))}
            </div>
          </div>

          <div className="flex gap-2">
            <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-md border">
              Open Demo <ExternalLink size={14} />
            </a>
            <button onClick={onClose} className="px-3 py-2 rounded-md bg-slate-800 text-white">Close</button>
          </div>
        </div>

        <div className="mt-5">
          <p className="text-sm text-slate-500">Preview:</p>
          <div className="mt-3 border rounded-md overflow-hidden" style={{ height: 360 }}>
            <iframe src={project.demo} title={project.title} className="w-full h-full" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  function submit(e) {
    e.preventDefault();
    // Client-side demo only — for production connect to a server or service like Formspree
    console.log('Contact form submitted', form);
    setSent(true);
    setTimeout(() => setForm({ name: '', email: '', message: '' }), 300);
  }

  return (
    <form onSubmit={submit} className="space-y-3">
      <input
        required
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        placeholder="Your name"
        className="w-full border rounded-md p-2"
      />
      <input
        required
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        placeholder="Your email"
        className="w-full border rounded-md p-2"
      />
      <textarea
        required
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        placeholder="Message"
        rows={4}
        className="w-full border rounded-md p-2"
      />
      <div className="flex items-center gap-3">
        <button type="submit" className="px-4 py-2 rounded-md bg-green-600 text-white">Send</button>
        {sent && <span className="text-sm text-green-700">Message ready to send (demo mode)</span>}
      </div>
    </form>
  );
}
