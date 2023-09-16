import React from 'react';
import { render } from '@testing-library/react';

import { ArticleAuthor, ArticleAuthorFragment } from './article-author';
import { makeFragmentData } from '../../generated';

describe('ArticleAuthor', () => {
  it('should render successfully', () => {
    const fragment = makeFragmentData(
      {
        author: {
          name: 'Kennie Davis',
          avatar: {
            url: 'https://media.graphassets.com/mIH7lhHRTEiQU18HLARU',
          },
          biography:
            "An Arizona native, father of three, and software engineer passionate about Nx, React, GraphQL and improving both the developer and user experience. I write about what I'm working on and learning along the way.",
          socialIcons: [
            {
              network: 'github',
              href: 'https://github.com/sellmeadog/nxify',
            },
            {
              network: 'linkedin',
              href: 'https://linkedin.com/in/kenniejaydavis',
            },
            {
              network: 'x',
              href: 'https://twitter.com/kenniejaydavis',
            },
          ],
        },
      },
      ArticleAuthorFragment
    );

    const { baseElement } = render(<ArticleAuthor data={fragment} />);
    expect(baseElement).toMatchSnapshot();
  });
});
