import React from 'react';
import { render } from '@testing-library/react';

import { ArticleExplorerSection } from './article-explorer-section';

describe('ArticleExplorerSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ArticleExplorerSection data={{}} />);
    expect(baseElement).toBeTruthy();
  });
});
