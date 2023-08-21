export type HeroContentProps = JSX.IntrinsicElements['div'];

export function HeroContentFn({
  children,
  className,
  ...rest
}: HeroContentProps) {
  return (
    <div
      className={`p-4 md:p-8 lg:p-16 max-w-5xl mx-auto ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
