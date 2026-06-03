import PageHeader from '../components/ui/PageHeader';
import Journey from '../components/Journey';
import Products from '../components/Products';
import Integrations from '../components/Integrations';
import CTABand from '../components/CTABand';

export default function Product() {
  return (
    <>
      <PageHeader
        eyebrow="Product"
        title={<>The front of your ED, <span className="italic text-solace-mint">automated</span>.</>}
        blurb="From the waiting-room QR code to the discharge letter — five co-pilots that handle intake, triage, the clinician pre-brief, documentation, and the phones."
      />
      <Products />
      <Journey />
      <Integrations />
      <CTABand />
    </>
  );
}
