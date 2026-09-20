import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from './data';
import { motion, AnimatePresence } from 'motion/react';
import javaLogo from './assets/images/java_logo.png';
import pythonLogo from './assets/images/python_logo.avif';
import javascriptLogo from './assets/images/javascript_logo.png';
import reactLogo from './assets/images/react_logo.png';
import sqlLogo from './assets/images/sql_logo.png';
import supabaseLogo from './assets/images/supabase_logo.png';
import aiLogo from './assets/images/ai_logo.png';
import languagesCategoryLogo from './assets/images/languages_category_icon.png';
import toolsCategoryLogo from './assets/images/tools_category_icon.png';
import cppLogo from './assets/images/cpp_logo.png';
import cLogo from './assets/images/c_logo.png';
import tensorflowLogo from './assets/images/tensorflow_logo.png';
import pytorchLogo from './assets/images/pytorch_logo.png';
import scikitLogo from './assets/images/scikit_logo.png';
import pandasLogo from './assets/images/pandas_logo.png';
import numpyLogo from './assets/images/numpy_logo.png';
import opencvLogo from './assets/images/opencv_logo.png';
import matplotlibLogo from './assets/images/matplotlib_logo.svg';
import seabornLogo from './assets/images/seaborn_logo.png';
import huggingfaceLogo from './assets/images/huggingface_logo.png';
import nodejsLogo from './assets/images/nodejs_logo.png';
import typescriptLogo from './assets/images/typescript_logo.png';
import dockerLogo from './assets/images/docker_logo.png';
import gitLogo from './assets/images/git_logo.png';
import tailwindLogo from './assets/images/tailwind_logo.png';
import html5Logo from './assets/images/html5_logo.png';
import css3Logo from './assets/images/css3_logo.png';
import githubLogo from './assets/images/github_logo.svg';
import mysqlLogo from './assets/images/mysql_logo.png';
import postgresqlLogo from './assets/images/postgresql_logo.png';
import highlightAiml from './assets/images/highlight_aiml.png';
import highlightSoftware from './assets/images/highlight_software.png';
import highlightHackathon from './assets/images/highlight_hackathon.png';
import highlightProblemSolver from './assets/images/highlight_problemsolver.png';
import projectSpeakease from './assets/images/project_speakease.png';
import projectFoundly from './assets/images/project_foundly.png';
import projectLibrary from './assets/images/project_library.png';
import chipIcon from './assets/images/chip-icon.png';
import { LaptopVisual } from './components/LaptopVisual';
import {
  Menu,
  X,
  ExternalLink,
  Github as GithubIcon,
  Linkedin as LinkedinIcon,
  Mail as MailIcon,
  Copy,
  Check,
  ArrowRight,
  Download,
  Code2,
  Database,
  Cpu,
  Sparkles,
  Terminal,
  Zap,
  CheckCircle2,
  Layers,
  FileCode2,
  GraduationCap,
  ArrowUpRight,
  Network
} from 'lucide-react';

// Tech Strip Icons helper
const TechIcon = ({ name }: { name: string }) => {
  switch (name) {
    case 'Java':
      return (
        <img
          src={javaLogo}
          alt="Java"
          className="w-6 h-6 object-contain"
        />
      );
    case 'Python':
      return (
        <img
          src={pythonLogo}
          alt="Python"
          className="w-6 h-6 object-contain"
        />
      );
    case 'JavaScript':
      return (
        <img
          src={javascriptLogo}
          alt="JavaScript"
          className="w-6 h-6 object-contain"
        />
      );
    case 'TypeScript':
      return (
        <img
          src={typescriptLogo}
          alt="TypeScript"
          className="w-6 h-6 object-contain rounded-sm"
        />
      );
    case 'React':
      return (
        <img
          src={reactLogo}
          alt="React"
          className="w-6 h-6 object-contain"
        />
      );
    case 'SQL':
      return (
        <img
          src={sqlLogo}
          alt="SQL"
          className="w-6 h-6 object-contain"
        />
      );
    case 'Supabase':
      return (
        <img
          src={supabaseLogo}
          alt="Supabase"
          className="w-6 h-6 object-contain"
        />
      );
    case 'AI/ML':
      return (
        <img
          src={aiLogo}
          alt="AI/ML"
          className="w-6 h-6 object-contain"
        />
      );
    case 'REST APIs':
      return (
        <div className="w-6 h-6 rounded bg-[#071426] border border-white/10 flex items-center justify-center text-[#2F9BFF]">
          <Network className="w-3.5 h-3.5 text-[#2F9BFF]" />
        </div>
      );
    case 'C++':
      return (
        <img
          src={cppLogo}
          alt="C++"
          className="w-6 h-6 object-contain"
        />
      );
    case 'C':
      return (
        <img
          src={cLogo}
          alt="C"
          className="w-6 h-6 object-contain"
        />
      );
    case 'TensorFlow':
      return (
        <img
          src={tensorflowLogo}
          alt="TensorFlow"
          className="w-6 h-6 object-contain"
        />
      );
    case 'PyTorch':
      return (
        <img
          src={pytorchLogo}
          alt="PyTorch"
          className="w-6 h-6 object-contain"
        />
      );
    case 'Scikit-Learn':
      return (
        <img
          src={scikitLogo}
          alt="Scikit-Learn"
          className="w-6 h-6 object-contain"
        />
      );
    case 'Pandas':
      return (
        <img
          src={pandasLogo}
          alt="Pandas"
          className="w-6 h-6 object-contain"
        />
      );
    case 'NumPy':
      return (
        <img
          src={numpyLogo}
          alt="NumPy"
          className="w-6 h-6 object-contain"
        />
      );
    case 'OpenCV':
      return (
        <img
          src={opencvLogo}
          alt="OpenCV"
          className="w-6 h-6 object-contain"
        />
      );
    case 'Matplotlib':
      return (
        <img
          src={matplotlibLogo}
          alt="Matplotlib"
          className="w-6 h-6 object-contain"
        />
      );
    case 'Seaborn':
      return (
        <img
          src={seabornLogo}
          alt="Seaborn"
          className="w-6 h-6 object-contain"
        />
      );
    case 'Hugging Face':
      return (
        <img
          src={huggingfaceLogo}
          alt="Hugging Face"
          className="w-6 h-6 object-contain"
        />
      );
    case 'Generative AI':
      return (
        <div className="w-6 h-6 rounded bg-[#071426] border border-[#1683FF]/30 flex items-center justify-center text-[#2F9BFF]">
          <Sparkles className="w-3.5 h-3.5 text-[#2F9BFF]" />
        </div>
      );
    case 'Node.js':
      return (
        <img
          src={nodejsLogo}
          alt="Node.js"
          className="w-6 h-6 object-contain"
        />
      );
    case 'Docker':
      return (
        <img
          src={dockerLogo}
          alt="Docker"
          className="w-6 h-6 object-contain"
        />
      );
    case 'Git':
      return (
        <img
          src={gitLogo}
          alt="Git"
          className="w-6 h-6 object-contain"
        />
      );
    case 'Tailwind CSS':
      return (
        <img
          src={tailwindLogo}
          alt="Tailwind CSS"
          className="w-6 h-6 object-contain"
        />
      );
    case 'HTML5':
      return (
        <img
          src={html5Logo}
          alt="HTML5"
          className="w-6 h-6 object-contain"
        />
      );
    case 'CSS3':
      return (
        <img
          src={css3Logo}
          alt="CSS3"
          className="w-6 h-6 object-contain"
        />
      );
    case 'GitHub':
      return (
        <img
          src={githubLogo}
          alt="GitHub"
          className="w-6 h-6 object-contain rounded-full drop-shadow-sm"
        />
      );
    case 'MySQL':
      return (
        <img
          src={mysqlLogo}
          alt="MySQL"
          className="w-6 h-6 object-contain"
        />
      );
    case 'PostgreSQL':
      return (
        <img
          src={postgresqlLogo}
          alt="PostgreSQL"
          className="w-6 h-6 object-contain"
        />
      );
    default:
      return <Code2 className="w-6 h-6 text-[#348AF0]" />;
  }
};

const getProjectLogo = (title: string, category: string) => {
  const lower = title.toLowerCase();
  if (lower.includes('speakease') || lower.includes('stammer') || lower.includes('speech')) {
    return projectSpeakease;
  }
  if (lower.includes('foundly') || lower.includes('lost') || lower.includes('found')) {
    return projectFoundly;
  }
  if (lower.includes('library') || lower.includes('book') || category === 'Java') {
    return projectLibrary;
  }
  return projectSpeakease;
};

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [activeProjectFilter, setActiveProjectFilter] = useState('All');

  const filteredProjects = PORTFOLIO_DATA.projects.filter((project) => {
    if (activeProjectFilter === 'All') return true;
    return project.category === activeProjectFilter || (project.tags && project.tags.includes(activeProjectFilter));
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'moments', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
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

  // Tech items for technology strip
  const techStripItems = [
    { name: 'Java' },
    { name: 'Python' },
    { name: 'JavaScript' },
    { name: 'React' },
    { name: 'SQL' },
    { name: 'AI/ML' },
    { name: 'REST APIs' },
  ];

  return (
    <div className="min-h-screen bg-[#0A121E] text-[#F5F7FA] font-sans selection:bg-[#348AF0]/30 selection:text-[#348AF0] scroll-smooth overflow-x-hidden relative">
      {/* Background ambient lighting - Deep nocturnal blue theme from reference */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[850px] h-[550px] bg-radial from-[#348AF0]/15 via-[#0E1A2E]/40 to-transparent blur-3xl opacity-75" />
        <div className="absolute top-[35%] right-[-5%] w-[650px] h-[650px] bg-radial from-[#348AF0]/10 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-[10%] left-[-10%] w-[550px] h-[550px] bg-radial from-[#348AF0]/8 via-transparent to-transparent blur-3xl" />
      </div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? 'bg-[#0A121E]/95 backdrop-blur-md border-white/10 py-3 shadow-xl shadow-black/60'
            : 'bg-transparent border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Lockup from reference: Stylized TK Monogram | TANMAY KUMAR / BUILD • LEARN • GROW */}
          <a
            href="#hero"
            className="flex items-center gap-3 group select-none"
            aria-label="Tanmay Kumar Portfolio"
          >
            {/* Stylized TK Monogram */}
            <div className="flex items-baseline font-black tracking-tighter text-2xl group-hover:scale-105 transition-transform duration-200">
              <span className="text-white">T</span>
              <span className="text-[#348AF0] -ml-0.5">K</span>
            </div>

            {/* Vertical thin white line separator */}
            <div className="h-7 w-[1px] bg-white/30" />

            {/* Stacked Name */}
            <div className="flex flex-col text-left justify-center">
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-white uppercase leading-tight">
                TANMAY KUMAR
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-7">
            {PORTFOLIO_DATA.header.navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative text-sm font-medium transition-all duration-200 py-1 ${
                    isActive
                      ? 'text-[#348AF0]'
                      : 'text-[#AAB7C8] hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#348AF0] rounded-full shadow-[0_0_8px_#348AF0]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg bg-[#0E1A2E] border border-white/10 text-white hover:text-[#348AF0] hover:border-[#348AF0]/50 transition-all"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Nav Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#0A121E] border-b border-white/10 shadow-2xl py-6 px-6 flex flex-col space-y-4"
            >
              {PORTFOLIO_DATA.header.navLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={`text-base font-medium transition-colors flex items-center justify-between ${
                      isActive ? 'text-[#348AF0]' : 'text-[#AAB7C8] hover:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[#348AF0]" />}
                  </a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Container */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-28 md:pt-36 pb-24 space-y-32 overflow-visible">
        {/* HERO SECTION */}
        <section id="hero" className="scroll-mt-32 pt-2 overflow-visible">
          {/* Top-Right Tagline from Reference: Turning Ideas Into Impact with extended blue underline */}
          <div className="w-full flex justify-end items-center mb-6 md:mb-10">
            <div className="flex flex-col items-end text-right select-none">
              <div className="text-sm sm:text-base tracking-wide font-normal">
                <span className="text-white">Turning Ideas </span>
                <span className="text-[#348AF0] font-semibold">Into Impact</span>
              </div>
              {/* Thin solid accent blue underline extending past the text */}
              <div className="w-24 sm:w-28 h-[2px] bg-[#348AF0] mt-1.5 rounded-full shadow-[0_0_8px_#348AF0]" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 xl:gap-12 items-center overflow-visible">
            {/* HERO LEFT COLUMN */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="lg:col-span-7 xl:col-span-7 flex flex-col items-start text-left"
            >
              {/* Main Headline Name: Tanmay (White) Kumar (Vivid Blue) */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[1.05] mb-5 select-none">
                <span className="text-white">Tanmay </span>
                <span className="text-[#348AF0] drop-shadow-[0_0_20px_rgba(52,138,240,0.35)]">Kumar</span>
              </h1>

              {/* Subtitle / Roles with vertical white pipes */}
              <h2 className="text-base sm:text-lg md:text-xl font-normal text-white tracking-wide mb-4">
                Software Developer <span className="text-white/40 mx-2">|</span> AI Enthusiast <span className="text-white/40 mx-2">|</span> Problem Solver
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-xl leading-relaxed mb-8 font-normal">
                Building real-world solutions through code, creativity and curiosity.
              </p>

              {/* CTA Buttons matching reference: Solid Blue + Transparent with Outline */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="#projects"
                  className="px-7 py-3.5 bg-[#348AF0] hover:bg-[#2573D6] text-white font-semibold rounded-xl shadow-[0_0_25px_rgba(52,138,240,0.45)] hover:shadow-[0_0_35px_rgba(52,138,240,0.65)] transition-all duration-300 flex items-center justify-center gap-2 group text-center"
                >
                  <span>View My Work</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://www.linkedin.com/in/tanmay-kumar-219a322a9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 bg-transparent border border-white/60 hover:border-white hover:bg-white/5 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center text-center"
                >
                  <span>Let's Connect</span>
                </motion.a>
              </div>
            </motion.div>

            {/* HERO RIGHT COLUMN - REALISTIC MACBOOK VISUAL */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="lg:col-span-5 xl:col-span-5 flex flex-col items-center justify-center relative w-full pt-8 sm:pt-10 lg:pt-8 xl:pt-10 lg:pr-8 xl:pr-12 lg:-translate-x-4 xl:-translate-x-6 overflow-visible"
            >
              <LaptopVisual />
            </motion.div>
          </div>

          {/* HERO TECHNOLOGY STRIP & BOTTOM-RIGHT SIGNATURE */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 sm:mt-16 pt-8 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            {/* Horizontal row of icons, each with label directly below it */}
            <div className="flex items-center justify-start gap-6 sm:gap-8 md:gap-10 overflow-x-auto scrollbar-none py-2 px-1 w-full lg:w-auto">
              {techStripItems.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col items-center gap-2 group cursor-default shrink-0"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center p-2 group-hover:border-[#348AF0]/60 group-hover:bg-[#348AF0]/10 group-hover:scale-105 transition-all duration-200">
                    <TechIcon name={item.name} />
                  </div>
                  <span className="text-xs sm:text-sm font-medium tracking-wide text-white/90 group-hover:text-[#348AF0] transition-colors">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom-Right "Keep Building" Handwritten Signature from Reference */}
            <div className="flex flex-col items-end justify-center select-none shrink-0 self-end lg:self-center pr-2">
              <span className="text-2xl sm:text-3xl text-white tracking-wide font-['Caveat',cursive] font-bold">
                Keep Building
              </span>
              {/* Hand-drawn style wavy accent blue underline */}
              <svg
                className="w-28 sm:w-36 h-3 text-[#348AF0] -mt-0.5"
                viewBox="0 0 120 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 7C25 3.5 50 10 75 5.5C92 3 106 6.5 117 5"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </motion.div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="scroll-mt-28">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="text-xs font-mono text-[#1683FF] uppercase tracking-widest mb-1">// BACKGROUND</div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-[#F5F7FA]">
                About <span className="bg-gradient-to-r from-[#1683FF] to-[#2F9BFF] bg-clip-text text-transparent">Me</span>
              </h3>
            </div>
            <div className="hidden sm:block h-px bg-white/10 flex-grow max-w-xs ml-8" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column: Bio & Focus */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 bg-[#0B1728] p-8 md:p-10 rounded-2xl shadow-xl border border-white/10 flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-[#1683FF]/10 to-transparent blur-2xl pointer-events-none" />
              <div className="space-y-4">
                {PORTFOLIO_DATA.about.paragraphs.map((p, idx) => (
                  <p
                    key={idx}
                    className={`text-base sm:text-[17px] leading-relaxed ${
                      idx === 0 ? 'text-[#F5F7FA] font-normal' : 'text-[#AAB7C8]'
                    }`}
                  >
                    {p}
                  </p>
                ))}
              </div>

              <div className="pt-6 mt-8 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#AAB7C8]/70">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#1683FF]" />
                  <span>{PORTFOLIO_DATA.about.department}</span>
                </span>
                <span className="text-[#2F9BFF]">2024 - 2028</span>
              </div>
            </motion.div>

            {/* Right Column: Key Highlights */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                whileHover={{ y: -3 }}
                className="bg-[#071426] p-5 rounded-2xl border border-white/10 hover:border-[#1683FF]/50 hover:shadow-[0_0_20px_rgba(22,131,255,0.15)] transition-all flex flex-col justify-between"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0B1728] border border-white/10 flex items-center justify-center p-2 mb-3 shadow-inner">
                  <img src={highlightAiml} alt="AI/ML Enthusiast" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h4 className="text-[15px] font-semibold text-[#F5F7FA] tracking-tight mb-1">AI/ML Enthusiast</h4>
                  <p className="text-xs text-[#94A3B8] font-normal leading-relaxed">Specializing in Deep Learning & NLP architectures</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                className="bg-[#071426] p-5 rounded-2xl border border-white/10 hover:border-[#1683FF]/50 hover:shadow-[0_0_20px_rgba(22,131,255,0.15)] transition-all flex flex-col justify-between"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0B1728] border border-white/10 flex items-center justify-center p-2 mb-3 shadow-inner">
                  <img src={highlightSoftware} alt="Software Developer" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h4 className="text-[15px] font-semibold text-[#F5F7FA] tracking-tight mb-1">Software Developer</h4>
                  <p className="text-xs text-[#94A3B8] font-normal leading-relaxed">Building full-stack web applications & backend APIs</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                className="bg-[#071426] p-5 rounded-2xl border border-white/10 hover:border-[#1683FF]/50 hover:shadow-[0_0_20px_rgba(22,131,255,0.15)] transition-all flex flex-col justify-between"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0B1728] border border-white/10 flex items-center justify-center p-2 mb-3 shadow-inner">
                  <img src={highlightHackathon} alt="Hackathon Builder" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h4 className="text-[15px] font-semibold text-[#F5F7FA] tracking-tight mb-1">Hackathon Builder</h4>
                  <p className="text-xs text-[#94A3B8] font-normal leading-relaxed">Smart India Hackathon Internal Round Qualifier</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                className="bg-[#071426] p-5 rounded-2xl border border-white/10 hover:border-[#1683FF]/50 hover:shadow-[0_0_20px_rgba(22,131,255,0.15)] transition-all flex flex-col justify-between"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0B1728] border border-white/10 flex items-center justify-center p-2 mb-3 shadow-inner">
                  <img src={highlightProblemSolver} alt="Problem Solver" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h4 className="text-[15px] font-semibold text-[#F5F7FA] tracking-tight mb-1">Problem Solver</h4>
                  <p className="text-xs text-[#94A3B8] font-normal leading-relaxed">Applying data structures to real-world challenges</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="scroll-mt-28">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="text-xs font-mono text-[#1683FF] uppercase tracking-widest mb-1">// CAPABILITIES</div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-[#F5F7FA]">
                Technical <span className="bg-gradient-to-r from-[#1683FF] to-[#2F9BFF] bg-clip-text text-transparent">Skills</span>
              </h3>
            </div>
            <div className="hidden sm:block h-px bg-white/10 flex-grow max-w-xs ml-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.skills.map((skillGroup, idx) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#0B1728] rounded-2xl p-6 border border-white/10 shadow-lg flex flex-col justify-between group hover:border-[#1683FF]/40 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#071426] border border-white/10 text-[#2F9BFF] flex items-center justify-center p-1.5 overflow-hidden">
                        {idx === 0 ? (
                          <img src={languagesCategoryLogo} alt="Languages" className="w-full h-full object-contain" />
                        ) : idx === 1 ? (
                          <img src={aiLogo} alt="AI & ML" className="w-full h-full object-contain" />
                        ) : (
                          <img src={toolsCategoryLogo} alt="Web & Tools" className="w-full h-full object-contain" />
                        )}
                      </div>
                      <h4 className="text-lg font-bold text-[#F5F7FA]">{skillGroup.category}</h4>
                    </div>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#071426] text-[#AAB7C8] border border-white/5">
                      {skillGroup.items.length} skills
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-2.5">
                    {skillGroup.items.map((skill) => (
                      <div
                        key={skill}
                        className="px-3.5 py-2.5 bg-[#071426] border border-white/10 rounded-xl text-sm text-[#F5F7FA] font-medium flex items-center justify-between hover:border-[#1683FF]/60 hover:text-[#2F9BFF] hover:shadow-[0_0_15px_rgba(22,131,255,0.15)] hover:-translate-y-0.5 transition-all duration-200 group/item cursor-default"
                      >
                        <div className="flex items-center gap-2.5">
                          <TechIcon name={skill} />
                          <span>{skill}</span>
                        </div>
                        <span className="text-[10px] font-mono text-[#AAB7C8]/50 opacity-0 group-hover/item:opacity-100 transition-opacity">
                          PRO
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="scroll-mt-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <div className="text-xs font-mono text-[#1683FF] uppercase tracking-widest mb-1">// PORTFOLIO WORK</div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-[#F5F7FA]">
                Featured <span className="bg-gradient-to-r from-[#1683FF] to-[#2F9BFF] bg-clip-text text-transparent">Projects</span>
              </h3>
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-2 md:pb-0">
              {['All', 'AI/ML', 'Web', 'Java'].map((category) => {
                const isActive = activeProjectFilter === category;
                return (
                  <button
                    key={category}
                    onClick={() => setActiveProjectFilter(category)}
                    className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all duration-200 shrink-0 border ${
                      isActive
                        ? 'bg-[#1683FF] text-white border-[#1683FF] shadow-[0_0_15px_rgba(22,131,255,0.4)]'
                        : 'bg-[#071426] text-[#AAB7C8] border-white/10 hover:border-white/20 hover:text-[#F5F7FA]'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col bg-[#0B1728] rounded-2xl shadow-xl border border-white/10 hover:border-[#1683FF]/50 hover:shadow-[0_15px_35px_rgba(22,131,255,0.2)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
              >
                {/* Project Header Banner Graphic */}
                <div className="relative p-6 bg-[#071426] border-b border-white/10 flex items-center justify-between overflow-hidden">
                  <div className="absolute inset-0 bg-radial from-[#1683FF]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="p-2 rounded-xl bg-[#0B1728] border border-white/10 group-hover:border-[#1683FF]/40 transition-colors flex items-center justify-center w-12 h-12 shrink-0">
                      <img
                        src={getProjectLogo(project.title, project.category)}
                        alt={`${project.title} icon`}
                        className="w-8 h-8 object-contain drop-shadow-[0_0_10px_rgba(47,155,255,0.4)]"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#2F9BFF] uppercase tracking-wider block">
                        {project.category || 'Software'}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#0B1728] text-[#2F9BFF] border border-[#1683FF]/30 relative z-10">
                    {project.category}
                  </span>
                </div>

                {/* Project Body */}
                <div className="p-6 md:p-7 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-[#F5F7FA] mb-3 group-hover:text-[#2F9BFF] transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-[#AAB7C8] mb-6 flex-grow leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono text-[#2F9BFF] bg-[#071426] border border-white/5 px-2.5 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2.5 px-4 bg-[#071426] border border-white/10 hover:border-[#1683FF] hover:text-[#2F9BFF] text-[#F5F7FA] text-xs font-mono font-semibold rounded-lg flex items-center justify-center gap-2 transition-all"
                      >
                        <GithubIcon size={16} />
                        <span>Repository</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-4 bg-[#1683FF]/15 border border-[#1683FF]/30 hover:bg-[#1683FF] text-[#2F9BFF] hover:text-white text-xs font-mono font-semibold rounded-lg flex items-center justify-center gap-2 transition-all"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* MOMENTS SECTION */}
        <section id="moments" className="scroll-mt-28">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="text-xs font-mono text-[#1683FF] uppercase tracking-widest mb-1">// ACHIEVEMENTS</div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-[#F5F7FA]">
                Key <span className="bg-gradient-to-r from-[#1683FF] to-[#2F9BFF] bg-clip-text text-transparent">Milestones</span>
              </h3>
            </div>
            <div className="hidden sm:block h-px bg-white/10 flex-grow max-w-xs ml-8" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.moments.map((moment, index) => {
              const CardTag = (moment as { link?: string }).link ? motion.a : motion.div;
              const linkProps = (moment as { link?: string }).link
                ? {
                    href: (moment as { link?: string }).link,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  }
                : {};

              return (
                <CardTag
                  key={index}
                  {...linkProps}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative aspect-[4/3] rounded-2xl shadow-xl border border-white/10 hover:border-[#1683FF]/60 hover:shadow-[0_15px_35px_rgba(22,131,255,0.25)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden cursor-pointer bg-[#071426] block"
                >
                  {/* Full Image */}
                  <img
                    src={moment.image}
                    alt={moment.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Dark Gradient Overlay - Only on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030B16]/95 via-[#071426]/75 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  {/* Category Tag & External Link Icon - Only on Hover */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300 pointer-events-none z-10">
                    <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-md bg-[#030B16]/90 text-[#2F9BFF] border border-[#1683FF]/40 backdrop-blur-md shadow-md">
                      {moment.event.includes('Hackathon') || moment.event.includes('Hack')
                        ? 'HACKATHON'
                        : moment.event.includes('Talk Show')
                        ? 'AWARD'
                        : 'SUMMIT'}
                    </span>
                    {(moment as { link?: string }).link && (
                      <span className="p-1.5 rounded-lg bg-[#030B16]/90 text-[#2F9BFF] border border-[#1683FF]/40 backdrop-blur-md shadow-md">
                        <ExternalLink size={13} />
                      </span>
                    )}
                  </div>

                  {/* Details Content Overlay - Only on Hover */}
                  <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none z-10">
                    <span className="text-xs font-mono text-[#2F9BFF] font-medium block mb-1 drop-shadow-sm">
                      {moment.event}
                      {moment.date ? ` • ${moment.date}` : ''}
                    </span>
                    <h4 className="text-base md:text-lg font-bold text-[#F5F7FA] leading-snug drop-shadow-md">
                      {moment.title}
                    </h4>
                  </div>
                </CardTag>
              );
            })}
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="scroll-mt-28">
          <div className="flex items-center justify-between mb-10">
            <div>
              <div className="text-xs font-mono text-[#1683FF] uppercase tracking-widest mb-1">// ACADEMIC JOURNEY</div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-[#F5F7FA]">
                Education <span className="bg-gradient-to-r from-[#1683FF] to-[#2F9BFF] bg-clip-text text-transparent">Timeline</span>
              </h3>
            </div>
            <div className="hidden sm:block h-px bg-white/10 flex-grow max-w-xs ml-8" />
          </div>

          <div className="relative pl-6 sm:pl-8 border-l-2 border-white/10 space-y-8 max-w-3xl ml-2 sm:ml-4">
            {PORTFOLIO_DATA.education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#030B16] border-2 border-[#1683FF] group-hover:bg-[#1683FF] group-hover:shadow-[0_0_12px_#1683FF] transition-all duration-300 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2F9BFF] group-hover:bg-white transition-colors" />
                </div>

                {/* Timeline Content Card */}
                <div className="bg-[#0B1728] p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-[#1683FF]/40 hover:shadow-[0_10px_30px_rgba(22,131,255,0.12)] transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <h4 className="text-lg sm:text-xl font-bold text-[#F5F7FA] group-hover:text-[#2F9BFF] transition-colors">
                      {item.degree}
                    </h4>
                    <span className="text-xs font-semibold font-sans px-3.5 py-1 rounded-full bg-[#071426] text-[#2F9BFF] border border-[#1683FF]/30 w-fit shrink-0 tracking-wide">
                      {item.year}
                    </span>
                  </div>

                  <p className="text-base font-medium text-[#AAB7C8] mb-1 flex items-center gap-2">
                    <GraduationCap size={18} className="text-[#1683FF] shrink-0" />
                    <span>{item.college}</span>
                  </p>

                  {item.cgpa && (
                    <p className="text-xs font-mono text-[#2F9BFF] mt-2">
                      Score: {item.cgpa}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="scroll-mt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-b from-[#0B1728] to-[#071426] rounded-3xl p-8 sm:p-12 md:p-16 border border-white/10 text-center relative overflow-hidden shadow-2xl max-w-4xl mx-auto"
          >
            {/* Background Glow */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-radial from-[#1683FF]/20 via-[#1683FF]/5 to-transparent blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#071426] border border-[#1683FF]/30 text-[#2F9BFF] text-xs font-sans font-semibold tracking-wider uppercase mb-6">
                <span>LET'S CONNECT</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F5F7FA] mb-5 tracking-tight leading-tight">
                Let's Build Something <span className="bg-gradient-to-r from-[#1683FF] to-[#2F9BFF] bg-clip-text text-transparent">Together.</span>
              </h2>

              <p className="text-base sm:text-lg text-[#AAB7C8] leading-relaxed mb-10 max-w-xl mx-auto">
                Have an idea, opportunity, or project in mind? Let's connect and transform concepts into real impact.
              </p>

              {/* Primary Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <a
                  href="https://www.linkedin.com/in/tanmay-kumar-219a322a9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-[#1683FF] hover:bg-[#2F9BFF] text-white font-bold rounded-xl shadow-[0_0_25px_rgba(22,131,255,0.4)] hover:shadow-[0_0_35px_rgba(47,155,255,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <span>Let's Connect</span>
                  <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <button
                  onClick={copyToClipboard}
                  className="w-full sm:w-auto px-6 py-4 bg-[#071426] text-[#F5F7FA] font-semibold rounded-xl border border-white/10 hover:border-[#1683FF] hover:text-[#2F9BFF] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {copiedEmail ? (
                    <>
                      <Check size={18} className="text-emerald-400" />
                      <span>Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={18} />
                      <span>{PORTFOLIO_DATA.contact.email}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Social Links Row */}
              <div className="flex items-center justify-center gap-4 pt-8 border-t border-white/10">
                {PORTFOLIO_DATA.hero.socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="p-3.5 bg-[#071426] border border-white/10 rounded-xl text-[#AAB7C8] hover:text-[#2F9BFF] hover:border-[#1683FF]/50 hover:bg-[#0B1728] hover:-translate-y-1 transition-all duration-200"
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-10 border-t border-white/10 bg-[#030B16] relative z-10">
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-[#1683FF] to-[#2F9BFF] bg-clip-text text-transparent font-mono">
              TK.
            </span>
            <span className="text-sm font-semibold text-[#F5F7FA]">
              Tanmay Kumar
            </span>
          </div>

          <div className="text-xs font-mono tracking-widest text-[#2F9BFF] uppercase">
            Build • Learn • Grow
          </div>

          <div className="text-xs font-mono text-[#AAB7C8]/70">
            © {new Date().getFullYear()} Tanmay Kumar. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
