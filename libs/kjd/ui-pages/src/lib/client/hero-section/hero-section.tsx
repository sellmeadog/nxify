import { RichText } from '@graphcms/rich-text-react-renderer';
import { FragmentType, useFragment } from '../../generated';
import { HeroSectionFragmentDoc } from '../../generated/graphql';

export interface HeroSectionProps {
  fragment: FragmentType<typeof HeroSectionFragmentDoc>;
}

export function HeroSection({ fragment }: HeroSectionProps) {
  const { content, image, subtitle, title } = useFragment(
    HeroSectionFragmentDoc,
    fragment
  );

  return (
    <section>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <img alt={title ?? ''} src={image?.url} />
      {content.map(({ raw }) => (
        <RichText content={raw} />
      ))}
    </section>
  );
}

export default HeroSection;
