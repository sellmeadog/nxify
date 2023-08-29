import { graphql } from '../../generated';
import { GraphQLClient } from 'graphql-request';

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

const hygraph = new GraphQLClient(process.env.KJD_HYGRAPH_ENDPOINT);

export interface RouteBaseProps {
  slug: string;
}

export async function RouteBase({ slug = 'home' }: RouteBaseProps) {
  const { page } = await hygraph.request(RouteBaseQuery, { slug });

  return (
    <div>
      <pre>{JSON.stringify(page, undefined, 2)}</pre>
    </div>
  );
}
