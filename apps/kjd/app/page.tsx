import { HomePage } from '@nxify/kjd-feature-home';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'kennie j. davis',
  description: `Welcome to my blog where I share what I'm learning while developing with Nx, React and React Native.`,
};

export const revalidate = 10;
export default HomePage;
