import React from 'react';
import { render } from '@testing-library/react-native';

import JournalEntryTimeline from './journal-entry-timeline';

describe('JournalEntryTimeline', () => {
  it('should render successfully', () => {
    const { root } = render(< JournalEntryTimeline />);
    expect(root).toBeTruthy();
  });
});
