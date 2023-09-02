'use client';

import Link, { LinkProps } from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

export interface NavigationBarProps {}

export function NavigationBar(props: NavigationBarProps) {
  return (
    <nav className="flex flex-row justify-between max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
      <section className="flex flex-row gap-x-4">
        <NavigationLink href={'/'} title="Home" />
        <NavigationLink href={'/blog'} title="Blog" />
      </section>
    </nav>
  );
}

function NavigationLink({
  href,
  title,
  ...rest
}: LinkProps & { title: string }) {
  const segment = '/' + (useSelectedLayoutSegment() ?? '');
  const activeClass =
    segment === href.toString()
      ? 'border-cyan-500 font-medium text-neutral-50'
      : 'border-transparent text-neutral-400';

  console.log(href, segment);

  return (
    <Link
      className={`${activeClass} border-b-4 px-3 py-2 md:px-6 md:py-4 hover:text-cyan-200 text-sm uppercase`}
      href={href}
      {...rest}
    >
      {title}
    </Link>
  );
}
