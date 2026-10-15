import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Logo from '../common/Logo';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const scrollTo = (id: string) => {
    setOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const linkClass = 'text-sm font-medium text-neutral-600 transition hover:text-neutral-950';

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 md:px-10">
        <Link to="/" aria-label="Kazira home" className="flex items-center gap-3">
          <Logo height={28} className="h-7 w-auto text-neutral-950" />
        </Link>
        <nav className="hidden items-center gap-9 md:flex" aria-label="Main navigation">
          <button className={linkClass} onClick={() => scrollTo('work')}>Our work</button>
          <button className={linkClass} onClick={() => scrollTo('contact')}>About & contact</button>
          <a className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-700" href="https://x.com/nanostrategyke" target="_blank" rel="noreferrer">Get in touch <ArrowUpRight size={15} /></a>
        </nav>
        <button type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} className="rounded-lg p-2 text-neutral-800 md:hidden" onClick={() => setOpen(v => !v)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
      </div>
      {open && <nav className="border-t border-neutral-200 bg-white px-6 py-5 md:hidden" aria-label="Mobile navigation">
        <div className="mx-auto flex max-w-7xl flex-col gap-5">
          <button className={linkClass + ' text-left'} onClick={() => scrollTo('work')}>Our work</button>
          <button className={linkClass + ' text-left'} onClick={() => scrollTo('contact')}>About & contact</button>
          <a className="inline-flex items-center gap-2 font-semibold" href="https://x.com/nanostrategyke" target="_blank" rel="noreferrer">Get in touch <ArrowUpRight size={15} /></a>
        </div>
      </nav>}
    </header>
  );
};

export default Header;
