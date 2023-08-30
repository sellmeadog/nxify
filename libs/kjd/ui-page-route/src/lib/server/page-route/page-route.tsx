import { HeroSection } from '../../client/hero-section/hero-section';
import { graphql } from '../../generated';
import { hygraph } from '@nxify/kjd-data-access-hygraph';

const RouteBaseQuery = graphql(`
  query PageBySlug($slug: String = "") {
    page(where: { slug: $slug }) {
      hero {
        ...HeroSectionContent
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
    <>
      <HeroSection fragment={page?.hero} />
      <pre>{JSON.stringify(page, undefined, 2)}</pre>
    </>
  );
}
