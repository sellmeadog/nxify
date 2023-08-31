import { FragmentType, graphql, useFragment } from '../../generated';

const HeroSectionFragment = graphql(`
  fragment HeroSectionContent on HeroSection {
    caption
    id
    image {
      url
    }
    subtitle
    title
  }
`);

export interface HeroSectionProps {
  fragment?: FragmentType<typeof HeroSectionFragment> | null;
}

export function HeroSection(props: HeroSectionProps) {
  const fragment = useFragment(HeroSectionFragment, props.fragment);

  if (!fragment) {
    return null;
  }

  const { caption, image, subtitle, title } = fragment;

  return (
    <section className="bg-neutral-800 max-w-none">
      <div className="max-w-5xl mx-auto p-4 md:p-8 lg:p-16 flex flex-col-reverse gap-y-4 md:flex-row items-center">
        <div className="flex flex-col gap-y-2 md:gap-y-4 lg:gap-y-6 basis-full">
          <div className="flex flex-col items-center md:items-start gap-y-px md:gap-y-2">
            <h1 className="font-serif font-medium !m-0 !p-0 !text-white">
              {title}
            </h1>
            <p className="text-neutral-500 !m-0 !p-0">{subtitle}</p>
          </div>
          <p className="!m-0 !p-0">{caption}</p>
        </div>
        <HeroImage title={title} url={image?.url} />
      </div>
    </section>
  );
}

function HeroImage({ title, url }: { title?: string; url?: string }) {
  if (!url) {
    return null;
  }

  return (
    <div className="flex justify-center items-center md:basis-auto">
      <img
        alt={title}
        className="!m-0 !p-0 object-cover rounded-full bg-neutral-900 w-1/3 md:w-full md:rounded-none md:bg-transparent"
        src={url}
      />
    </div>
  );
}
