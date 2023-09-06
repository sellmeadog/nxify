import { render } from '@testing-library/react';

import ArticleMarkdown from './article-markdown';

describe('ArticleMarkdown', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ArticleMarkdown />);
    expect(baseElement).toBeTruthy();
  });
});
