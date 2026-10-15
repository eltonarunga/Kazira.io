import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../common/Logo';

const Footer: React.FC = () => (
  <footer className="border-t border-neutral-200 bg-white">
    <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <Link to="/" className="inline-flex items-center gap-3" aria-label="Kazira home">
            <Logo height={28} className="h-7 w-auto text-neutral-950" />
          </Link>
          <p className="mt-4 max-w-md text-sm leading-6 text-neutral-500">Strategy, digital products, and practical systems for real-world challenges.</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-neutral-600">
          <a className="inline-flex items-center gap-1 hover:text-neutral-950" href="https://x.com/nanostrategyke" target="_blank" rel="noreferrer">NanoStrategyKE <ArrowUpRight size={13} /></a>
          <Link className="hover:text-neutral-950" to="/privacy">Privacy</Link>
          <Link className="hover:text-neutral-950" to="/terms">Terms</Link>
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-2 border-t border-neutral-200 pt-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Kazira. All rights reserved.</p>
        <p>Built with clarity and purpose.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
