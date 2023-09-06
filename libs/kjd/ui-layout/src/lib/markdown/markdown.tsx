import { createElement } from 'react';
import ReactMarkdown, { Options } from 'react-markdown';
import { CodeProps } from 'react-markdown/lib/ast-to-react';

export type MarkdownProps = Omit<Options, 'children'> & {
  children?: string | null;
};

export function Markdown({ className, children, ...rest }: MarkdownProps) {
  if (!children) {
    return null;
  }

  return (
    <ReactMarkdown
      className={`prose-blockquote:border-orange-400 prose-blockquote:font-serif prose-blockquote:text-neutral-400 prose-blockquote:text-xl prose-code:before:hidden prose-code:after:hidden first-of-type:prose-p:mt-0 last-of-type:prose-p:mb-0 ${className}`}
      components={{
        code: InlineCode,
      }}
      {...rest}
    >
      {children}
    </ReactMarkdown>
  );
}

function InlineCode({
  inline,
  node,
  className,
  children,
  ...props
}: CodeProps) {
  if (inline) {
    return (
      <code className="text-orange-300" {...props}>
        {children}
      </code>
    );
  }

  return createElement(node.tagName, { className, ...props }, children);
}
