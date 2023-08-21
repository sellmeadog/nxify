import { Hero } from '@nxify/kjd-ui-layout';

export type HeroSectionProps = {
  __typename: 'HomePageHero';
  id: string;
  image?: { __typename?: 'Asset'; url: string } | null;
  title: string;
};

export function HeroSection({ image, title }: HeroSectionProps) {
  return (
    <Hero>
      <Hero.Content className="flex flex-row text-neutral-300">
        <div className="flex basis-3/4 items-center">
          <h1 className="text-4xl font-serif">{title}</h1>
        </div>
        <div className="flex basis-1/4 items-center">
          <img alt={title} src={image?.url} />
        </div>
      </Hero.Content>
    </Hero>
  );
}
