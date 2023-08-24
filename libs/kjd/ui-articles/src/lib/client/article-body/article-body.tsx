import { FragmentType, useFragment } from '../../generated';
import { ArticleBodyFragmentDoc } from '../../generated/graphql';
import { RichText } from '@graphcms/rich-text-react-renderer';

export interface ArticleBodyProps {
  fragment?: FragmentType<typeof ArticleBodyFragmentDoc> | null;
}

export function ArticleBody({ fragment }: ArticleBodyProps) {
  const article = useFragment(ArticleBodyFragmentDoc, fragment);

  if (!article) {
    return null;
  }

  return (
    <main className="prose-p:first-of-type:mt-0 prose-p:last-of-type:mb-0 max-w-prose mx-auto p-4 md:px-0 md:py-8 lg:py-16">
      <RichText content={article.body.raw} />
    </main>
  );
}

export default ArticleBody;
