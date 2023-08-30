import { hygraph } from '@nxify/kjd-data-access-hygraph';
import { FragmentType, graphql, useFragment } from '../../generated';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';

const ArticleExplorerSectionFragment = graphql(`
  fragment ArticleExplorerContent on ArticleExplorer {
    first
    id
    subtitle
    title
  }
`);

const ArticleExplorerQuery = graphql(`
  query RecentArticles($first: Int = 10) {
    articles: articlesConnection(first: $first, orderBy: createdAt_DESC) {
      edges {
        node {
          createdAt
          hero {
            caption
            title
          }
          id
          slug
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        pageSize
        startCursor
      }
    }
  }
`);

export interface ArticleExplorerSectionProps {
  fragment?: FragmentType<typeof ArticleExplorerSectionFragment>;
}

export async function ArticleExplorerSection(
  props: ArticleExplorerSectionProps
) {
  const fragment = useFragment(ArticleExplorerSectionFragment, props.fragment);

  if (!fragment) {
    return null;
  }

  const { articles } = await hygraph.request(ArticleExplorerQuery, {
    first: fragment?.first,
  });

  return (
    <section className="max-w-none">
      <div className="max-w-5xl mx-auto p-4 md:p-8 lg:p-16">
        {articles.edges.map(({ node }) => {
          const published = parseISO(node.createdAt);

          return (
            <article className="flex flex-col lg:flex-row border-b border-neutral-600 last-of-type:border-transparent py-4 md:py-8 lg:py-16 prose-h2:mt-0 prose-p:m-0">
              <section className="flex grow">
                <span className="leading-8 lg:leading-10 text-neutral-400 uppercase">
                  {format(published, 'PP')}
                </span>
              </section>
              <section className="max-w-prose">
                <h2>
                  <Link className="font-medium lg:font-light" href={node.slug}>
                    {node.hero?.title}
                  </Link>
                </h2>
                <p>{node.hero?.caption}</p>
              </section>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default ArticleExplorerSection;
