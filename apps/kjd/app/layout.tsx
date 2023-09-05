import { Menu } from '@nxify/kjd-ui-layout';
import '../index.css';

export const metadata = {
  title: 'Welcome to kjd',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-900">
        <Menu />
        <article className="max-w-none prose prose-neutral !prose-invert prose-a:text-cyan-400 hover:prose-a:text-cyan-200 prose-a:no-underline">
          {children}
        </article>
      </body>
    </html>
  );
}
