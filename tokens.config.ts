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
    primary: {
      50: '#d9e5ff',
      100: '#b3cbff',
      200: '#8db0ff',
      300: '#6696ff',
      400: '#407cff',
      500: '#1a62ff',
      600: '#0047e1',
      700: '#0035a9',
      800: '#002370',
      900: '#001238',
    },
  },
  page: {
    header: {
      height: '60px',
    },
    footer: {
      height: '60px',
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
