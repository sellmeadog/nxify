import { RichText } from '@graphcms/rich-text-react-renderer';
import { HomePageHero } from '@nxify/kjd-data-access-hygraph';
import { Hero } from '@nxify/kjd-ui-layout';

export type HeroSectionProps = HomePageHero;

export function HeroSection({
  content,
  image,
  subtitle,
  title,
}: HeroSectionProps) {
  return (
    <Hero>
      <Hero.Content className="flex flex-row text-neutral-300">
        <div className="flex flex-col basis-3/4 justify-center gap-8">
          <section>
            <h1 className="text-4xl font-serif">{title}</h1>
            <p className="text-neutral-400 text-lg">{subtitle}</p>
          </section>
          <section className="text-base">
            {content.map(({ raw }) => (
              <RichText content={raw} />
            ))}
          </section>
        </div>
        <div className="flex basis-1/4 items-center">
          <img alt={title} src={image?.url} />
        </div>
      </Hero.Content>
    </Hero>
  );
}
