import { HeroContentFn } from './hero-content';

export type HeroProps = JSX.IntrinsicElements['div'];

function HeroFn({ children, className, ...rest }: HeroProps) {
  return <div className={`bg-neutral-800 ${className}`}>{children}</div>;
}

export const Hero = Object.assign(HeroFn, { Content: HeroContentFn });
