import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'kennie j. davis',
  description: `Welcome to my blog, inspired by Cunningham's Law, in which my potential to share wrong answers is paradoxically the easiest way to get them corrected. I don't know everything, and I'm hoping that together we can begin a journey of correcting inaccuracies and unexpected revelations.`,
};

async function HomePage() {
  return <h1>Welcome to Home</h1>;
}

export default HomePage;
