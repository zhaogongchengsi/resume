import { defineTheme } from 'pinceau'

export default defineTheme({
  state: {
    success: {
      background: {
        initial: '{color.green.100}',
        dark: '{color.green.900}',
      },
      color: {
        initial: '{color.green.300}',
        dark: '{color.green.700}',
      },
      border: {
        initial: '{color.green.200}',
        dark: '{color.green.800}',
      },
    },
    danger: {
      background: {
        initial: '{color.red.100}',
        dark: '{color.red.900}',
      },
      color: {
        initial: '{color.red.300}',
        dark: '{color.red.700}',
      },
      border: {
        initial: '{color.red.200}',
        dark: '{color.red.800}',
      },
    },
    warning: {
      background: {
        initial: '{color.yellow.100}',
        dark: '{color.yellow.900}',
      },
      color: {
        initial: '{color.yellow.300}',
        dark: '{color.yellow.700}',
      },
      border: {
        initial: '{color.yellow.200}',
        dark: '{color.yellow.800}',
      },
    },
    info: {
      background: {
        initial: '{color.indigoblue.100}',
        dark: '{color.indigoblue.900}',
      },
      color: {
        initial: '{color.indigoblue.500}',
        dark: '{color.indigoblue.700}',
      },
      border: {
        initial: '{color.indigoblue.200}',
        dark: '{color.indigoblue.800}',
      },
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
  avatar: {
    size: {
      xl: '120px',
      lg: '80px',
      md: '60px',
      sm: '40px',
      xs: '30px',
    },
    background: {
      initial: '#f5f5f5',
      dark: '#1c1c1f',
    },
    border: {
      initial: '#ececec',
      dark: 'rgba(255, 255, 255, 0.12)',
    },
  },
})
