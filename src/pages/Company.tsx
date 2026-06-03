import { motion } from 'framer-motion';
import PageHeader from '../components/ui/PageHeader';
import CTABand from '../components/CTABand';
import { reveal, stagger, slideUp } from '../lib/motion';

const VALUES = [
  { title: 'Calm under pressure', body: 'The ED is chaos. Our job is to make the first ten minutes feel quiet, certain, and fast.' },
  { title: 'Explainable, always', body: 'No black-box scores. Every acuity level ships with the reasoning a clinician can check.' },
  { title: 'PHI is sacred', body: 'We redact before we reason and encrypt everything, everywhere. Trust is the product.' },
];

export default function Company() {
  return (
    <>
      <PageHeader
        eyebrow="Company"
        title={<>Built for the people who <span className="italic text-solace-mint">catch us</span> on our worst day.</>}
        blurb="Solace started in North Texas emergency departments, watching minutes bleed away between the door and the diagnosis. We're here to give those minutes back."
      />
      <section className="px-6 py-24 md:py-32">
        <motion.div variants={stagger} {...reveal} className="mx-auto grid max-w-[1100px] gap-5 md:grid-cols-3">
          {VALUES.map((v) => (
            <motion.div
              key={v.title}
              variants={slideUp}
              className="rounded-3xl border border-solace-soft bg-white p-8 shadow-card"
            >
              <h3 className="font-display text-2xl text-ink">{v.title}</h3>
              <p className="mt-3 text-muted">{v.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
      <CTABand />
    </>
  );
}
