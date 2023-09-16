import { FragmentType, unmaskFragment, graphql } from '../../generated';
import { Markdown } from '@nxify/kjd-ui-layout';

const PageHeroFragment = graphql(`
  fragment PageHeroFragment on Page {
    hero {
      caption
      image {
        url
      }
      subtitle
      title
    }
  }
`);

const CONTAINER_CLASS = {
  home: 'items-center md:items-start',
  page: '',
};

const TITLE_CLASS = {
  home: 'font-serif',
  page: '',
};

const MARKDOWN_CLASS = {
  home: 'text-center md:text-left',
  page: '',
};

export interface PageHeroProps {
  data: FragmentType<typeof PageHeroFragment>;
  variant?: 'home' | 'page';
}

export function PageHero({ data, variant = 'page' }: PageHeroProps) {
  const { hero } = unmaskFragment(PageHeroFragment, data);

  return (
    <header className="bg-neutral-700 max-w-none">
      <section className="flex flex-col-reverse md:flex-row items-center gap-y-8 max-w-prose mx-auto p-8 md:px-0 lg:py-16 prose-headings:m-0 prose-img:m-0 last-of-type:prose-p:mb-0">
        <div className={`flex flex-col ${CONTAINER_CLASS[variant]}`}>
          <h1 className={`empty:hidden font-light ${TITLE_CLASS[variant]}`}>
            {hero?.title}
          </h1>
          <span className="empty:hidden text-neutral-400">
            {hero?.subtitle}
          </span>
          <Markdown className={`empty:hidden mt-8 ${MARKDOWN_CLASS[variant]}`}>
            {hero?.caption ?? ''}
          </Markdown>
        </div>
        {hero?.image?.url && (
          <img
            alt={hero?.title}
            className="aspect-square bg-neutral-950 md:bg-transparent rounded-full md:rounded-none w-1/3"
            src={hero?.image?.url}
          />
        )}
      </section>
    </header>
  );
}
