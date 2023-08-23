import { FragmentType, useFragment } from '../../generated';
import { ArticlePreviewFragmentDoc } from '../../generated/graphql';

/* eslint-disable-next-line */
export interface ArticlePreviewProps {
  fragment: FragmentType<typeof ArticlePreviewFragmentDoc>;
}

export function ArticlePreview({ fragment }: ArticlePreviewProps) {
  const { excerpt, title } = useFragment(ArticlePreviewFragmentDoc, fragment);
  return (
    <article className="text-white">
      <header>
        <h1>{title}</h1>
      </header>
      <main>
        <p>{excerpt}</p>
      </main>
    </article>
  );
}
