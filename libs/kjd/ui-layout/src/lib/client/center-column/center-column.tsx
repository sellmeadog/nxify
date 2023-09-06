import { PropsWithChildren } from 'react';

type CenterColumnVariant = 'footer' | 'hero' | 'nav' | 'prose';

export type CenterColumnProps = PropsWithChildren<{
  className?: string;
  variant?: CenterColumnVariant;
}>;

export function CenterColumn({
  children,
  className,
  variant = 'prose',
}: CenterColumnProps) {
  return (
    <div className={outerVariantClass(variant)}>
      <div className={`mx-auto ${innerVariantClass(variant)} ${className}`}>
        {children}
      </div>
    </div>
  );
}

function outerVariantClass(variant?: CenterColumnVariant) {
  if (variant === 'footer' || variant === 'hero') {
    return 'bg-neutral-800';
  }

  return '';
}

function innerVariantClass(variant?: CenterColumnVariant) {
  const classes = [];

  if (variant !== 'nav') {
    classes.push('max-w-prose p-4 md:px-0 md:py-8 lg:py-16');
  } else {
    classes.push('max-w-prose');
  }

  return classes.join(' ');
}
