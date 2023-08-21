import { Hero } from '@nxify/kjd-ui-layout';

export function HeroSection() {
  return (
    <Hero>
      <Hero.Content className="flex flex-row justify-between text-neutral-300">
        <h1 className="text-4xl font-serif">kennie j. davis</h1>
        <h2>IMG HERE</h2>
      </Hero.Content>
    </Hero>
  );
}
