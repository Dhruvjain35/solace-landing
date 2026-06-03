import PageHeader from '../components/ui/PageHeader';
import Metrics from '../components/Metrics';
import Trust from '../components/Trust';
import CTABand from '../components/CTABand';

export default function Clinicians() {
  return (
    <>
      <PageHeader
        eyebrow="For Clinicians"
        title={<>Walk in already <span className="italic text-solace-mint">knowing</span>.</>}
        blurb="No more re-asking the same questions at the bedside. Solace hands you an explainable acuity pre-brief, the patient's matched history, and a note that drafts itself."
      />
      <Metrics />
      <Trust />
      <CTABand />
    </>
  );
}
