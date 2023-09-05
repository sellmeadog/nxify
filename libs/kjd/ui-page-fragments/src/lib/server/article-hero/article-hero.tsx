import ReactMarkdown from 'react-markdown';
import { FragmentType, fragmentData, graphql } from '../../generated';
import { format, parseISO } from 'date-fns';

const ArticleHeroFragment = graphql(`
  fragment ArticleHeroFragment on Article {
    createdAt
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

export interface ArticleHeroProps {
  data: FragmentType<typeof ArticleHeroFragment>;
}

export function ArticleHero({ data }: ArticleHeroProps) {
  const { createdAt, hero } = fragmentData(ArticleHeroFragment, data);

  return (
    <header className="bg-neutral-800 max-w-none">
      <div className="flex flex-col items-center gap-y-8 max-w-prose mx-auto p-8 md:px-0 lg:py-16 prose-headings:m-0 prose-img:m-0 prose-p:m-0">
        <section className="flex flex-col gap-y-px grow items-center md:items-start">
          <span className="font-medium text-neutral-400 uppercase">
            {format(parseISO(createdAt), 'PPP')}
          </span>
          <h1 className="empty:hidden font-light">{hero?.title}</h1>
          <span className="empty:hidden text-neutral-400">
            {hero?.subtitle}
          </span>
        </section>
        <section>
          <ReactMarkdown className="relative empty:hidden text-center md:text-left">
            {hero?.caption ?? ''}
          </ReactMarkdown>
        </section>
      </div>
    </header>
  );
}
