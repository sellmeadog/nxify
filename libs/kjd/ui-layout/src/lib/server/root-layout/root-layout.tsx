import { PropsWithChildren } from 'react';

export function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className="bg-neutral-900 max-w-none prose prose-sm prose-invert prose-neutral:invert prose-a:text-cyan-400 hover:prose-a:text-cyan-200 prose-a:no-underline prose-headings:font-extralight prose-headings:text-amber-500 md:prose-base lg:prose-lg">
        {children}
      </body>
    </html>
  );
}
