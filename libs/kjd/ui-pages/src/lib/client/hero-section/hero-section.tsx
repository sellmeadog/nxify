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
    <div className="bg-neutral-800">
      <section className="grid grid-flow-row-dense grid-cols-3 grid-rows-2 max-w-5xl mx-auto p-4 text-white gap-y-4 md:gap-y-6 md:p-8 lg:p-16">
        <section className="col-span-3 flex flex-col justify-center gap-y-2 md:col-span-2">
          <h1 className="text-5xl font-serif font-medium md:text-5xl">
            {title}
          </h1>
          <p className="text-base text-neutral-400">{subtitle}</p>
        </section>
        <section className="hidden row-span-2 md:flex">
          <img alt={title ?? ''} src={image?.url} />
        </section>
        <section className=" flex flex-col gap-y-1 col-span-3 text-sm md:col-span-2 lg:text-base">
          {content.map(({ __typename, raw }, index) => (
            <RichText key={`${__typename}:${index}`} content={raw} />
          ))}
        </section>
      </section>
    </div>
  );
}

export default HeroSection;
