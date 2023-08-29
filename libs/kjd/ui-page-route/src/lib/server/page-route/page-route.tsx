import { graphql } from '../../generated';
import { hygraph } from '@nxify/kjd-data-access-hygraph';

const RouteBaseQuery = graphql(`
  query PageBySlug($slug: String = "") {
    page(where: { slug: $slug }) {
      hero {
        caption
        id
        image {
          url
        }
        subtitle
        title
      }
      sections {
        __typename
        ... on ArticleExplorer {
          first
          id
          subtitle
          title
        }
        ... on TagExplorer {
          id
          first
          subtitle
          title
        }
      }
    }
  }
`);

export interface PageRouteProps {
  slug: string;
}

export async function PageRoute({ slug = 'home' }: PageRouteProps) {
  const { page } = await hygraph.request(RouteBaseQuery, { slug });

  return (
    <div>
      <pre>{JSON.stringify(page, undefined, 2)}</pre>
    </div>
  );
}
