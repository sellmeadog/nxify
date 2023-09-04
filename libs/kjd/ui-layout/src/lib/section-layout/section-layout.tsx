import { PropsWithChildren } from 'react';

export type SectionLayoutProps = PropsWithChildren;

export function SectionLayout({ children }: SectionLayoutProps) {
  return (
    <div className="odd:bg-neutral-800 max-w-none">
      <section className="max-w-prose mx-auto p-8 md:px-0 lg:py-16">
        {children}
      </section>
    </div>
  );
}
