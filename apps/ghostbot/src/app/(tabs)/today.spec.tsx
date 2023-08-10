import React from 'react';
import { render } from '@testing-library/react-native';

import Today from '.';

describe('Today', () => {
  it('should render successfully', () => {
    const { root } = render(< Today />);
    expect(root).toBeTruthy();
  });
});
