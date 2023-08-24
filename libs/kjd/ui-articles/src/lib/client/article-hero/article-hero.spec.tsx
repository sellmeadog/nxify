import { render } from '@testing-library/react';

import ArticleHero from './article-hero';

describe('ArticleHero', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ArticleHero />);
    expect(baseElement).toBeTruthy();
  });
});
