import { ElementType } from 'react';
import { HeroSection } from '../../client/hero-section/hero-section';
import { graphql } from '../../generated';
import { hygraph } from '@nxify/kjd-data-access-hygraph';
import ArticleExplorerSection from '../../client/article-explorer-section/article-explorer-section';

const RouteBaseQuery = graphql(`
  query PageBySlug($slug: String = "") {
    page(where: { slug: $slug }) {
      hero {
        ...HeroSectionContent
      }
      sections {
        __typename
        ... on ArticleExplorer {
          ...ArticleExplorerContent
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

const SECTIONS: { [key: string]: ElementType } = {
  ArticleExplorer: ArticleExplorerSection,
};

export interface PageRouteProps {
  slug: string;
}

export async function PageRoute({ slug = 'home' }: PageRouteProps) {
  const { page } = await hygraph.request(RouteBaseQuery, { slug });

  return (
    <>
      <HeroSection fragment={page?.hero} />
      {page?.sections.map((fragment, index) => {
        const Component = SECTIONS[fragment.__typename];

        if (Component) {
          return (
            <Component
              key={`${fragment.__typename}:${index}`}
              fragment={fragment}
            />
          );
        }

        return null;
      })}
    </>
  );
}
