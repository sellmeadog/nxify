import { render } from '@testing-library/react';

import { ArticlePreview } from './article-preview';
import React from 'react';

describe('ArticlePreview', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ArticlePreview />);
    expect(baseElement).toBeTruthy();
  });
});
