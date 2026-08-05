import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from './data';
import { Menu, X, ExternalLink, Github as GithubIcon, Copy, Check } from 'lucide-react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-[#f8efe4] selection:text-[#8b6845] scroll-smooth">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-[#C9A177] tracking-tight">
            {PORTFOLIO_DATA.header.logoText}
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {PORTFOLIO_DATA.header.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-neutral-600 hover:text-[#C9A177] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neutral-600 hover:text-[#C9A177] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-neutral-100 shadow-sm py-4 px-6 flex flex-col space-y-4">
            {PORTFOLIO_DATA.header.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMobileMenu}
                className="text-base font-medium text-neutral-600 hover:text-[#C9A177] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      <main className="max-w-6xl mx-auto px-6 md:px-12 pt-32 pb-24 space-y-32">
        {/* Hero Section */}
        <section id="hero" className="flex flex-col-reverse md:flex-row items-center md:items-start justify-center min-h-[70vh] animate-in fade-in slide-in-from-bottom-4 duration-1000 gap-12 md:gap-8 pt-12 md:pt-20">
          <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1">
            <h2 className="text-[#C9A177] font-medium tracking-wide text-sm md:text-base uppercase mb-4">
              Hi, my name is
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 mb-4 tracking-tight">
              {PORTFOLIO_DATA.hero.name}.
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-500 mb-4 tracking-tight">
              {PORTFOLIO_DATA.hero.title}
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-[#C9A177] mb-6 tracking-tight">
              {PORTFOLIO_DATA.hero.university}
            </h3>
            <p className="max-w-2xl text-lg text-neutral-600 leading-relaxed mb-10">
              {PORTFOLIO_DATA.hero.pitch}
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="px-8 py-3 w-full sm:w-auto text-center bg-[#C9A177] text-white font-medium rounded-md hover:bg-[#be986f] transition-colors shadow-sm"
              >
                View Projects
              </a>
              <a
                href={PORTFOLIO_DATA.hero.resumeUrl}
                download="Tanmay_Kumar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={async (e) => {
                  e.preventDefault();
                  try {
                    // Try fetching the file to create a blob download
                    const res = await fetch(PORTFOLIO_DATA.hero.resumeUrl);
                    if (!res.ok) throw new Error('Network response was not ok');
                    
                    // Verify it's actually a PDF and not an HTML fallback
                    const contentType = res.headers.get('content-type');
                    if (contentType && contentType.includes('text/html')) {
                       throw new Error('Received HTML instead of file');
                    }
                    
                    const blob = await res.blob();
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.style.display = 'none';
                    a.href = url;
                    a.download = 'Tanmay_Kumar_Resume.pdf';
                    document.body.appendChild(a);
                    a.click();
                    window.URL.revokeObjectURL(url);
                    document.body.removeChild(a);
                  } catch (err) {
                    console.error('Download failed via blob, falling back to window.open:', err);
                    window.open(PORTFOLIO_DATA.hero.resumeUrl, '_blank');
                  }
                }}
                className="px-8 py-3 w-full sm:w-auto text-center bg-white text-[#C9A177] font-medium rounded-md border border-[#efdeca] hover:border-[#C9A177] hover:bg-[#fcf8f3] transition-colors shadow-sm"
              >
                Download Resume
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-6 mt-12">
              {PORTFOLIO_DATA.hero.socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-500 hover:text-[#C9A177] hover:-translate-y-1 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <Icon size={24} />
                  </a>
                );
              })}
            </div>
          </div>
          
          <div className="flex-shrink-0 md:ml-8 flex items-center justify-center mt-8 md:mt-0">
            <div className="relative p-1.5 rounded-full border-[3px] border-[#C9A177] transition-transform duration-300 hover:scale-[1.03]">
              <img
                src={PORTFOLIO_DATA.hero.photoUrl}
                alt={`${PORTFOLIO_DATA.hero.name} profile photo`}
                className="w-40 h-40 md:w-[200px] md:h-[200px] rounded-full object-cover object-center border-4 border-transparent bg-white bg-clip-padding"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="scroll-mt-24">
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900">About Me</h3>
            <div className="h-px bg-neutral-200 flex-grow max-w-xs"></div>
          </div>
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-neutral-100 max-w-3xl">
            <p className="text-lg text-neutral-600 leading-relaxed mb-6">
              {PORTFOLIO_DATA.about.bio}
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed">
              {PORTFOLIO_DATA.about.focus}
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-24">
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900">Skills & Technologies</h3>
            <div className="h-px bg-neutral-200 flex-grow max-w-xs"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PORTFOLIO_DATA.skills.map((skillGroup) => (
              <div key={skillGroup.category} className="space-y-4">
                <h4 className="text-lg font-semibold text-neutral-900">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-white border border-neutral-200 rounded-full text-sm text-neutral-700 font-medium hover:border-[#e3cbaf] hover:text-[#C9A177] transition-colors shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-24">
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900">Featured Projects</h3>
            <div className="h-px bg-neutral-200 flex-grow max-w-xs"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO_DATA.projects.map((project, index) => (
              <div
                key={index}
                className="group flex flex-col bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-neutral-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="text-[#C9A177]">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-[#C9A177] transition-colors" aria-label="GitHub Repository">
                        <GithubIcon size={20} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-[#C9A177] transition-colors" aria-label="Live Demo">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-[#C9A177] transition-colors">
                  {project.title}
                </h4>
                <p className="text-neutral-600 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono text-[#C9A177] bg-[#fcf8f3] px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Moments Section */}
        <section id="moments" className="scroll-mt-24">
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900">Moments</h3>
            <div className="h-px bg-neutral-200 flex-grow max-w-xs"></div>
          </div>
          <p className="text-lg text-neutral-600 mb-8">Some milestones along the way</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.moments.map((moment, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-neutral-100 shadow-sm border border-neutral-100 hover:shadow-md transition-all duration-300"
              >
                <div className="aspect-[4/3] w-full">
                  <img
                    src={moment.image}
                    alt={moment.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h4 className="text-white font-bold text-xl mb-1">{moment.title}</h4>
                  {(moment.event || moment.date) && (
                    <p className="text-neutral-200 text-sm font-medium">
                      {moment.event}
                      {moment.event && moment.date && " \u2014 "}
                      {moment.date}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="scroll-mt-24">
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900">Education</h3>
            <div className="h-px bg-neutral-200 flex-grow max-w-xs"></div>
          </div>
          <div className="space-y-6 max-w-3xl">
            {PORTFOLIO_DATA.education.map((item, index) => (
              <div key={index} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-neutral-100 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-md transition-shadow">
                <div>
                  <h4 className="text-xl font-bold text-neutral-900 mb-1">{item.degree}</h4>
                  <p className="text-neutral-600">{item.college}</p>
                </div>
                <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center w-full md:w-auto">
                  {item.cgpa && <span className="text-[#C9A177] font-semibold">{item.cgpa}</span>}
                  <span className="text-sm text-neutral-400 font-mono">{item.year}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-24 flex flex-col items-center text-center max-w-2xl mx-auto pb-12">
          <h2 className="text-[#C9A177] font-medium tracking-wide text-sm md:text-base uppercase mb-4">
            What's Next?
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">Get In Touch</h3>
          <p className="text-lg text-neutral-600 leading-relaxed mb-10">
            {PORTFOLIO_DATA.contact.message}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href={`mailto:${PORTFOLIO_DATA.contact.email}`}
              className="px-8 py-4 bg-[#C9A177] text-white font-medium rounded-md hover:bg-[#be986f] transition-colors shadow-sm flex items-center justify-center min-w-[200px]"
            >
              Say Hello
            </a>
            <button
              onClick={copyToClipboard}
              className="px-6 py-4 bg-white text-neutral-700 font-medium rounded-md border border-neutral-200 hover:border-[#C9A177] hover:text-[#C9A177] transition-colors shadow-sm flex items-center justify-center min-w-[200px] gap-2"
            >
              {copiedEmail ? (
                <>
                  <Check size={18} className="text-emerald-500" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={18} />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-neutral-200/50">
        <p className="text-sm text-neutral-500 font-mono">
          {PORTFOLIO_DATA.footer.text}
        </p>
      </footer>
    </div>
  );
}
