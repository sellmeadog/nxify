import { render } from '@testing-library/react';

import ArticleBody from './article-body';

describe('ArticleBody', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ArticleBody />);
    expect(baseElement).toBeTruthy();
  });
});
