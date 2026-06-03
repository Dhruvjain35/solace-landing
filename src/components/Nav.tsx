import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Logo from './ui/Logo';
import { transitions } from '../lib/motion';

const LINKS = [
  { label: 'Product', to: '/product' },
  { label: 'For Clinicians', to: '/clinicians' },
  { label: 'Company', to: '/company' },
  { label: 'Blog', to: '/blog' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const onDarkHero = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Over the dark hero (home, not scrolled) -> light text on a glass pill.
  const light = onDarkHero && !scrolled;

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={transitions.slow}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
    >
      <nav
        className={`flex items-center gap-2 rounded-pill border px-2.5 py-2 backdrop-blur-xl transition-colors duration-300 ease-standard ${
          light
            ? 'border-white/15 bg-white/10 text-white'
            : 'border-solace-soft bg-white/85 text-ink shadow-card'
        }`}
      >
        <Link to="/" className="px-3" aria-label="Solace home">
          <Logo light={light} compact />
        </Link>

        <div className="hidden items-center md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`rounded-pill px-4 py-2 text-sm transition-colors ${
                light ? 'text-white/80 hover:text-white' : 'text-muted hover:text-ink'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <span className={`mx-1 hidden h-5 w-px md:block ${light ? 'bg-white/20' : 'bg-solace-soft'}`} />

        <Link
          to="/demo"
          className={`hidden rounded-pill px-5 py-2 text-sm font-medium transition md:inline-flex ${
            light
              ? 'bg-white text-solace-green-900 hover:bg-white/90'
              : 'bg-gradient-to-br from-solace-green-700 to-solace-mint text-white'
          }`}
        >
          Book a Demo
        </Link>

        <button className="px-3 md:hidden" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 ${light ? 'bg-white' : 'bg-ink'}`} />
            <span className={`block h-0.5 w-5 ${light ? 'bg-white' : 'bg-ink'}`} />
          </div>
        </button>
      </nav>

      {open && (
        <div className="absolute top-16 left-4 right-4 rounded-3xl border border-solace-soft bg-white p-4 shadow-lift md:hidden">
          {LINKS.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="block py-2.5 text-sm text-muted">
              {l.label}
            </Link>
          ))}
          <Link to="/demo" onClick={() => setOpen(false)} className="btn-primary mt-2 w-full">
            Book a Demo
          </Link>
        </div>
      )}
    </motion.header>
  );
}
