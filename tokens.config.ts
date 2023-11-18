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
  prose: {
    p: {
      fontSize: {
        sm: '14px',
        md: '16px',
      },
    },
  },
})
