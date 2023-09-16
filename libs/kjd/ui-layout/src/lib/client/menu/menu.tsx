'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { CenterColumn } from '../center-column/center-column';
import { SocialIcon, SocialIconProps } from 'react-social-icons';

export interface MenuProps {}

const SOCIAL_ICON_STYLE = {
  width: '30px',
  height: '30px',
};

export function Menu(props: MenuProps) {
  return (
    <CenterColumn variant="nav">
      <nav className="flex flex-row justify-between items-center">
        <section className="flex flex-row gap-x-2 md:gap-x-4">
          <MenuItem href="/" title="HOME" />
          <MenuItem href="/blog" title="BLOG" />
        </section>
        <section className="flex flex-row gap-x-2">
          <MenuItem icon="github" href="https://github.com/sellmeadog/nxify" />
          <MenuItem
            icon="linkedin"
            href="https://linkedin.com/in/kenniejaydavis"
          />
          <MenuItem icon="x" href="https://twitter.com/kenniejaydavis" />
        </section>
      </nav>
    </CenterColumn>
  );
}

function MenuItem({
  href,
  icon,
  title,
}: {
  href: string;
  icon?: SocialIconProps['network'];
  title?: string;
}) {
  const segment = useSelectedLayoutSegment();
  const active = segment ? href.includes(segment) : href === '/';

  const borderClass = active ? 'border-cyan-300' : 'border-transparent';
  const textClass = active ? 'text-neutral-50' : 'text-neutral-400';

  if (title) {
    return (
      <div
        className={`border-t p-2 md:border-t-2 md:p-4 ${borderClass} ${textClass} hover:text-white uppercase font-medium`}
      >
        <Link href={href}>{title}</Link>
      </div>
    );
  } else if (icon) {
    return (
      <SocialIcon
        network={icon}
        href="https://github.com/sellmeadog/nxify"
        style={SOCIAL_ICON_STYLE}
        bgColor="rgb(64,64,64)"
      />
    );
  } else {
    return null;
  }
}

export default Menu;
