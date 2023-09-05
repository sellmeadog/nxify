import ReactMarkdown, { Options } from 'react-markdown';

export type MarkdownProps = Omit<Options, 'children'> & {
  children?: string | null;
};

export function Markdown({ className, children, ...rest }: MarkdownProps) {
  if (!children) {
    return null;
  }

  return (
    <ReactMarkdown
      className={`prose-blockquote:border-amber-500 prose-blockquote:font-serif prose-blockquote:text-neutral-400 prose-blockquote:text-xl prose-code:before:hidden prose-code:after:hidden first-of-type:prose-p:mt-0 last-of-type:prose-p:mb-0 ${className}`}
      {...rest}
    >
      {children}
    </ReactMarkdown>
  );
}
