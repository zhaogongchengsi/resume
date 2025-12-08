import type { MDXComponents } from 'mdx/types'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mb-6 text-[#333] dark:text-[#bdc1c6]">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold mb-4 mt-8 text-[#333] dark:text-[#bdc1c6]">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold mb-3 mt-6 text-[#333] dark:text-[#bdc1c6]">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="mb-4 text-[#666] dark:text-[#999] leading-relaxed">
        {children}
      </p>
    ),
    a: ({ href, children }) => (
      <a 
        href={href} 
        className="text-[#1a73e8] dark:text-[#8ab4f8] hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 text-[#666] dark:text-[#999]">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 text-[#666] dark:text-[#999]">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="mb-2">{children}</li>
    ),
    code: ({ children }) => (
      <code className="bg-[#f5f5f5] dark:bg-[#1e1e1e] px-1.5 py-0.5 rounded text-sm font-mono text-[#d73a49] dark:text-[#ff7b72]">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-[#f5f5f5] dark:bg-[#1e1e1e] p-4 rounded-lg overflow-x-auto mb-4 border border-[#e5e5e5] dark:border-[#333]">
        {children}
      </pre>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[#e5e5e5] dark:border-[#333] pl-4 italic text-[#666] dark:text-[#999] my-4">
        {children}
      </blockquote>
    ),
    ...components,
  }
}
