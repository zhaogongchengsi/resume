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
  icon: {
    size: {
      '@sm': '1.2rem',
      '@md': '1.25rem',
    },
    color: {
      initial: '#333333',
      dark: '#bcbcbc',
    },
  },
  prose: {
    p: {
      fontSize: {
        sm: '14px',
        md: '16px',
      },
    },
  },
})
