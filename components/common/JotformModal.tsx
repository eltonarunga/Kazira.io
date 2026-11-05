import React, { useState } from 'react';
import { ExternalLink, Loader2 } from 'lucide-react';
import Modal from './Modal';
import { JOTFORM_UPDATES_URL } from '../../constants';

export interface JotformModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  formUrl?: string;
  initialType?: 'update' | 'benchmark' | 'consultation' | string;
}

export const JotformModal: React.FC<JotformModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  formUrl = JOTFORM_UPDATES_URL,
  initialType = 'update',
}) => {
  const [isLoading, setIsLoading] = useState(true);

  // Derive contextual title and subtitle if not provided explicitly
  const resolvedTitle = title || (
    initialType === 'benchmark'
      ? "Subscribe to K-AARB Benchmark Drops"
      : initialType === 'consultation'
      ? "Request Consultation"
      : "Stay Connected"
  );

  const resolvedSubtitle = subtitle || (
    initialType === 'benchmark'
      ? "Receive direct alerts when new benchmark results, cohort evaluations, and model transcripts are published."
      : initialType === 'consultation'
      ? "Connect with our team to discuss custom AI strategy, workflow automation, and enterprise deployment."
      : "Subscribe for company updates, research, and new product releases from Kazira.io."
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={resolvedTitle} maxWidthClassName="max-w-2xl">
      <div className="w-full flex flex-col">
        {resolvedSubtitle && (
          <p className="text-sm text-black/60 mb-4 font-light leading-relaxed">
            {resolvedSubtitle}
          </p>
        )}

        <div className="relative w-full h-[520px] sm:h-[560px] rounded-xl border border-gray-200 bg-gray-50/50 shadow-inner overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50/90 z-10 transition-opacity">
              <Loader2 className="w-8 h-8 text-gold animate-spin mb-3" />
              <p className="text-xs font-mono text-black/50 uppercase tracking-widest">
                Loading Form...
              </p>
            </div>
          )}

          <iframe
            src={formUrl}
            title={resolvedTitle}
            className="w-full h-full border-none"
            onLoad={() => setIsLoading(false)}
          />
        </div>

        <div className="mt-4 pt-2 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-black/50">
          <span className="font-light">Safe & confidential submission via Jotform</span>
          <a
            href={formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-black/70 hover:text-gold transition-colors underline inline-flex items-center gap-1.5 font-medium"
          >
            Open in new tab <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </Modal>
  );
};

export default JotformModal;
