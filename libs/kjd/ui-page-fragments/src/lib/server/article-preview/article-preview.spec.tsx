import React from 'react';
import { render } from '@testing-library/react';

import { ArticlePreview, ArticlePreviewFragment } from './article-preview';
import { makeFragmentData } from '../../generated';

describe('ArticlePreview', () => {
  it('should render successfully', () => {
    const fragment = makeFragmentData(CONTENT, ArticlePreviewFragment);
    const { baseElement } = render(<ArticlePreview data={fragment} />);
    expect(baseElement).toMatchInlineSnapshot(`
      <body>
        <div>
          <article
            class="prose-headings:font-light prose-headings:mt-0 prose-p:mb-0 border-neutral-800 last-of-type:border-transparent border-b py-8 first-of-type:pt-0 last-of-type:pb-0 lg:py-16"
          >
            <header>
              <span
                class="font-medium text-neutral-400 text-sm uppercase"
              >
                August 20th, 2023
              </span>
              <h2
                class="prose-a:font-light"
              >
                <a
                  href="/blog/quick-tip-configure-eslint-to-allow-the-expo-statusbar-style-prop"
                >
                  Quick Tip: Configure ESLint to Allow the Expo StatusBar "style" Prop
                </a>
              </h2>
            </header>
            <main>
              <p>
                ESLint flags the Expo StatusBar \`style\` prop by default; the \`react/style-prop-object\` lint rule offers an easy configuration option to clear this warning.
              </p>
            </main>
          </article>
        </div>
      </body>
    `);
  });
});

const CONTENT = {
  author: {
    name: 'Kennie Davis',
  },
  createdAt: '2023-08-20T21:56:31.683674+00:00',
  hero: {
    caption:
      'ESLint flags the Expo StatusBar `style` prop by default; the `react/style-prop-object` lint rule offers an easy configuration option to clear this warning.',
    title:
      'Quick Tip: Configure ESLint to Allow the Expo StatusBar "style" Prop',
    subtitle: '',
  },
  id: 'clljzmzq5otiw0blova54wa9a',
  slug: 'quick-tip-configure-eslint-to-allow-the-expo-statusbar-style-prop',
};
