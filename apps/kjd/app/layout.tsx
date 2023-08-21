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
      <body className="bg-neutral-900">{children}</body>
    </html>
  );
}