import ReactMarkdown from 'react-markdown';
import { FragmentType, fragmentData, graphql } from '../../generated';

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

export interface PageHeroProps {
  data: FragmentType<typeof PageHeroFragment>;
}

export function PageHero({ data }: PageHeroProps) {
  const { hero } = fragmentData(PageHeroFragment, data);

  return (
    <header className="bg-neutral-800 max-w-none">
      <div className="flex flex-col-reverse md:flex-row items-center gap-y-8 max-w-prose mx-auto p-8 md:px-0 lg:py-16 prose-headings:m-0 prose-img:m-0 last-of-type:prose-p:mb-0">
        <section className="flex flex-col grow items-center md:items-start">
          <h1 className="empty:hidden font-light font-serif">{hero?.title}</h1>
          <span className="empty:hidden text-neutral-400">
            {hero?.subtitle}
          </span>
          <ReactMarkdown className="empty:hidden text-center md:text-left">
            {hero?.caption ?? ''}
          </ReactMarkdown>
        </section>
        {hero?.image?.url && (
          <img
            alt={hero?.title}
            className="aspect-square bg-neutral-950 md:bg-transparent rounded-full md:rounded-none w-1/3"
            src={hero?.image?.url}
          />
        )}
      </div>
    </header>
  );
}
