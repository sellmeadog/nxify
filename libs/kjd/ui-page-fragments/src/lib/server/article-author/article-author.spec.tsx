import { render } from '@testing-library/react';

import ArticleAuthor from './article-author';

describe('ArticleAuthor', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ArticleAuthor />);
    expect(baseElement).toBeTruthy();
  });
});
