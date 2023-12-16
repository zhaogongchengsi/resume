import { defineTheme } from 'pinceau'

export default defineTheme({
  prose: {
    h1: {
      fontSize: '2.25rem',
      fontWeight: 'bold',
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 'bold',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: '400',
    },
    h5: {
      fontSize: '1rem',
      fontWeight: '400',
    },
    h6: {
      fontSize: '0.875rem',
      fontWeight: '400',
    },
    p: {
      fontSize: '1rem',
      lineHeight: '1.5rem',
      fontWeight: '400',
      letterSpacing: '0.01em',
      margin: '0 0 1rem 0',
    },
    a: {
      fontSize: '1rem',
      color: {
        initial: '#000000',
        dark: '#ffffff',
      },
      textDecoration: 'none',
      lineHeight: '1.5rem',
      fontWeight: '500',
      letterSpacing: '0.01em',
    },
    li: {
      margin: '0.5rem 0',
      padding: '0 0 0 1.5rem',
    },
    ul: {
      listStyleType: 'disc',
      listStylePosition: 'inside',
      offsetRight: '0',
      // 嵌套样式
      nested: {
        listStyleType: 'circle',
        listStylePosition: 'inside',
        offsetRight: '1rem',
        // 向右偏移
      },
    },
    ol: {
      listStyleType: 'decimal',
      listStylePosition: 'inside',
      offsetRight: '0',
      // 嵌套样式
      nested: {
        listStyleType: 'decimal',
        listStylePosition: 'inside',
        offsetRight: '1rem',
        // 向右偏移
      },
    },
    pre: {
      borderRadius: '3px',
      margin: '2rem 0',
      padding: '16px',
      backgroundColor: {
        initial: '#f6f8fa',
        dark: '#1c1c1f',
      },
      lineHeight: '1.65',
      border: {
        width: '1px',
        style: 'solid',
        color: {
          initial: '#e9e9e9',
          dark: '#212121',
        },
      },
    },
    hr: {
      size: '1px',
      color: {
        initial: '#e3e3e3',
        dark: '#3e3e3e',
      },
      margin: '2rem 0',
    },
    code: {
      fontSize: '1rem',
      lineHeight: '1.5rem',
      fontWeight: '400',
      letterSpacing: '0.01em',
      backgroundColor: {
        initial: '#f6f8fa',
        dark: '#313131',
      },
      padding: '0.15rem 0.2rem',
      borderRadius: '5px',
    },
    table: {
      align: 'center',
      border: {
        width: '1px',
        style: 'solid',
        color: {
          initial: '#e3e3e3',
          dark: '#3e3e3e',
        },
      },
    },
  },
})
