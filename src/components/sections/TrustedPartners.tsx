import ClientRibbon from '@/components/ui/ClientRibbon';

export default function TrustedPartners() {
  return (
    <section className="!py-0 bg-background border-b border-border overflow-hidden">
      <div className="container mx-auto px-6 pt-14 pb-2 text-center">
        <p className="text-muted-foreground font-bold tracking-widest uppercase text-xs">
          Trusted by Industry Leaders
        </p>
        <div className="w-16 h-0.5 bg-brand mx-auto rounded-full mt-4 mb-0" />
      </div>
      <ClientRibbon />
    </section>
  );
}
