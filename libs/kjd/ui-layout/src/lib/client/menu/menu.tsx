'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CenterColumn } from '../center-column/center-column';

/* eslint-disable-next-line */
export interface MenuProps {}

export function Menu(props: MenuProps) {
  return (
    <CenterColumn variant="nav">
      <nav className="flex gap-x-2 md:gap-x-4">
        <MenuItem href="/" title="HOME" />
        <MenuItem href="/blog" title="BLOG" />
      </nav>
    </CenterColumn>
  );
}

function MenuItem({ href, title }: { href: string; title: string }) {
  const path = usePathname();
  const active = href === '/' ? path === href : path.includes(href);

  const borderClass = active ? 'border-cyan-300' : 'border-transparent';
  const textClass = active ? 'text-neutral-50' : 'text-neutral-400';

  return (
    <div
      className={`border-t p-2 md:border-t-2 md:p-4 ${borderClass} ${textClass} hover:text-white uppercase font-medium`}
    >
      <Link href={href}>{title}</Link>
    </div>
  );
}

export default Menu;
