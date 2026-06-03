import { motion } from 'framer-motion';
import PageHeader from '../components/ui/PageHeader';
import { reveal, stagger, slideUp } from '../lib/motion';
import { Arrow } from '../components/ui/Icons';

const POSTS = [
  { tag: 'Triage', title: 'Why we score acuity in two stages', read: '6 min read' },
  { tag: 'Research', title: 'SHAP in the ED: making AI triage explainable', read: '8 min read' },
  { tag: 'Product', title: 'Designing voice intake for 30+ languages', read: '5 min read' },
  { tag: 'Security', title: 'Redacting PHI before it ever reaches a model', read: '7 min read' },
];

export default function Blog() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title={<>Notes from the <span className="italic text-solace-mint">front door</span>.</>}
        blurb="What we're learning about AI, triage, and the first ten minutes of an emergency visit."
      />
      <section className="px-6 py-24 md:py-32">
        <motion.div variants={stagger} {...reveal} className="mx-auto grid max-w-[1100px] gap-5 md:grid-cols-2">
          {POSTS.map((p) => (
            <motion.a
              key={p.title}
              href="#"
              variants={slideUp}
              className="group flex flex-col justify-between rounded-3xl border border-solace-soft bg-white p-8 shadow-card transition-all duration-300 ease-standard hover:-translate-y-1.5 hover:shadow-lift"
            >
              <div>
                <span className="eyebrow">{p.tag}</span>
                <h3 className="font-display mt-5 text-2xl text-ink">{p.title}</h3>
              </div>
              <div className="mt-8 flex items-center justify-between text-sm text-muted">
                <span>{p.read}</span>
                <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </section>
    </>
  );
}
