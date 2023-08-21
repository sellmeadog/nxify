import { HeroContentFn } from './hero-content';

export type HeroProps = JSX.IntrinsicElements['div'];

function HeroFn({ children, className, ...rest }: HeroProps) {
  return (
    <div className={`bg-neutral-800 ${className}`}>
      {/* <div className="p-4 md:p-8 lg:p-16 max-w-5xl mx-auto">
        <h1>Welcome to Hero!</h1>
      </div> */}
      {children}
    </div>
  );
}

export const Hero = Object.assign(HeroFn, { Content: HeroContentFn });
