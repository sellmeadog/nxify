import { PropsWithChildren } from 'react';

export type SectionLayoutProps = PropsWithChildren<{ className?: string }>;

export function SectionLayout({ className, children }: SectionLayoutProps) {
  return (
    <section className="odd:bg-neutral-800 max-w-none">
      <div className={`max-w-prose mx-auto p-8 md:px-0 lg:py-16 ${className}`}>
        {children}
      </div>
    </section>
  );
}
