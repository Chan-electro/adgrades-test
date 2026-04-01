import Link from 'next/link';
import { buttonVariants } from '@/lib/button-variants';
import { cn } from '@/lib/utils';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <p className="text-8xl font-black text-brand/20 font-mono select-none mb-4">404</p>
        <h1 className="text-3xl md:text-4xl font-black tracking-tighter text-foreground mb-4">
          Page Not Found
        </h1>
        <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
        </p>
        <Link href="/" className={cn(buttonVariants({ size: 'lg' }), 'gap-2')}>
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
