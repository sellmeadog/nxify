import { hygraph } from '@nxify/kjd-data-access-hygraph';
import { graphql } from '../../generated';
import { ArticlePreview } from '../article-preview/article-preview';

const ArticleExplorerQuery = graphql(`
  query ArticleExplorerQuery($first: Int) {
    articlesConnection(first: $first, orderBy: createdAt_DESC) {
      edges {
        cursor
        node {
          ...ArticlePreviewFragment
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

export interface ArticleExplorerProps {
  first?: number;
}

export async function ArticleExplorer({ first = 10 }: ArticleExplorerProps) {
  const query = await hygraph.request(ArticleExplorerQuery, { first });

  return query.articlesConnection.edges.map(({ node }, index) => (
    <ArticlePreview key={`${node.__typename}:${index}`} data={node} />
  ));
}
