import React from 'react';
import { render } from '@testing-library/react-native';

import { TodayScreen } from './today-screen';

describe('TodayScreen', () => {
  it('should render successfully', () => {
    const { root } = render(<TodayScreen />);
    expect(root).toBeTruthy();
  });
});
