import { useState } from 'react';
import { motion } from 'framer-motion';
import SilkBackground from '../components/ui/SilkBackground';
import { transitions } from '../lib/motion';
import { Check } from '../components/ui/Icons';

export default function Demo() {
  const [sent, setSent] = useState(false);

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-ink px-6 pt-40 pb-24">
      <div className="absolute inset-0 -z-10">
        <SilkBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/30 to-ink" />
      </div>

      <div className="mx-auto grid max-w-[1100px] items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transitions.slow}
        >
          <h1 className="font-display text-5xl leading-[0.95] tracking-tight text-white md:text-7xl">
            See Solace on <span className="italic text-solace-mint">your floor</span>.
          </h1>
          <p className="mt-6 max-w-md text-lg text-white/65">
            We'll run a live intake-to-pre-brief on a workflow that looks like yours —
            in about 20 minutes.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-white/75">
            {['No EHR change to evaluate', 'HIPAA-ready from the first call', 'See the SHAP explanation live'].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-solace-mint/20 text-solace-mint">
                  <Check className="h-4 w-4" />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transitions.slow, delay: 0.1 }}
          className="rounded-3xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur-xl"
        >
          {sent ? (
            <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-solace-mint/20 text-solace-mint">
                <Check className="h-7 w-7" />
              </span>
              <p className="font-display mt-4 text-2xl text-white">Thanks — we'll be in touch.</p>
              <p className="mt-2 text-sm text-white/60">A member of the Solace team will reach out within one business day.</p>
            </div>
          ) : (
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              {[
                { label: 'Full name', type: 'text', ph: 'Dr. Jordan Lee' },
                { label: 'Work email', type: 'email', ph: 'you@hospital.org' },
                { label: 'Organization', type: 'text', ph: 'North Texas ED' },
              ].map((f) => (
                <div key={f.label}>
                  <label className="text-sm text-white/70">{f.label}</label>
                  <input
                    required
                    type={f.type}
                    placeholder={f.ph}
                    className="mt-1.5 w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-solace-mint"
                  />
                </div>
              ))}
              <button type="submit" className="btn-primary w-full">
                Book a Demo
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
