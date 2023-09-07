import React from 'react';
import { render } from '@testing-library/react';

import { ArticleHero, ArticleHeroFragment } from './article-hero';
import { makeFragmentData } from '../../generated';

describe('ArticleHero', () => {
  it('should render successfully', () => {
    const fragment = makeFragmentData(CONTENT, ArticleHeroFragment);
    const { baseElement } = render(<ArticleHero data={fragment} />);

    expect(baseElement).toMatchSnapshot();
  });
});

const CONTENT = {
  createdAt: '2023-08-20T21:56:31.683674+00:00',
  hero: {
    caption:
      'ESLint flags the Expo StatusBar `style` prop by default; the `react/style-prop-object` lint rule offers an easy configuration option to clear this warning.',
    image: null,
    subtitle: '',
    title:
      'Quick Tip: Configure ESLint to Allow the Expo StatusBar "style" Prop',
  },
};
