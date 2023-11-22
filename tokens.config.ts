import { defineTheme } from 'pinceau'

export default defineTheme({
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)',
  },
  color: {
    white: '#ffffff',
    black: '#0E0D0D',
  },
  page: {
    header: {
      height: '60px',
    },
    footer: {
      height: '60px',
    },
  },
  card: {
    borderRadius: '12px',
    shine: {
      size: '300px',
      opacity: '0.3',
    },
    background: {
      content: {
        initial: '#f5f5f5',
        dark: '#1c1c1f',
      },
      container: {
        initial: '#ececec',
        dark: 'rgba(255, 255, 255, 0.12)',
      },
    },
    boxShadow: 'rgba(0, 0, 0, 0.12) 0px 5px 14px',
  },
  fontSize: {
    'xs': '12px',
    'sm': '14px',
    'md': '16px',
    'lg': '18px',
    'xl': '20px',
    '2xl': '22px',
    '3xl': '24px',
  },
  space: {
    'xs': '0.25rem',
    'sm': '0.5rem',
    'md': '0.75rem',
    'lg': '1rem',
    'xl': '1.25rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
    '4xl': '2.5rem',
  },
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
        dark: '#1c1c1f',
      },
      padding: '0.25rem 0.5rem',
      borderRadius: '3px',
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
