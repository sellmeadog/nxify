export type HeroContentProps = JSX.IntrinsicElements['div'];

export function HeroContentFn({
  children,
  className,
  ...rest
}: HeroContentProps) {
  return (
    <div
      className={`p-4 md:px-0 md:py-8 lg:py-16 max-w-prose mx-auto ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
