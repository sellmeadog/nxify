import Link from 'next/link';
import { FragmentType, fragmentData, graphql } from '../../generated';
import { format, parseISO } from 'date-fns';

const ArticlePreviewFragment = graphql(`
  fragment ArticlePreviewFragment on Article {
    author {
      name
    }
    createdAt
    hero {
      caption
      title
      subtitle
    }
    id
    slug
  }
`);

export interface ArticlePreviewProps {
  data: FragmentType<typeof ArticlePreviewFragment>;
}

export function ArticlePreview({ data }: ArticlePreviewProps) {
  const { createdAt, hero, slug } = fragmentData(ArticlePreviewFragment, data);

  return (
    <article className="prose-headings:font-light prose-headings:mt-0 prose-p:mb-0 border-neutral-800 last-of-type:border-transparent border-b py-8 last-of-type:pb-0 lg:py-16">
      <header>
        <span className="font-medium text-neutral-400 text-sm uppercase">
          {format(parseISO(createdAt), 'PPP')}
        </span>
        <h2 className="prose-a:font-light">
          <Link href={`/blog/${slug}`}>{hero?.title}</Link>
        </h2>
      </header>
      <main>
        <p>{hero?.caption}</p>
      </main>
    </article>
  );
}
