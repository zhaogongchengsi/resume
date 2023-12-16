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
  fontSize: {
    'xs': '0.75rem',
    'sm': '0.85rem',
    'md': '1rem',
    'lg': '1.125rem',
    'xl': '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
  },
  text: {
    primary: {
      static: {
        initial: '{color.gray.900}',
        dark: '{color.gray.50}',
      },
      // TODO: add `hover` state
      hover: {
        initial: '{color.green.400}',
        dark: '{color.green.300}',
      },
    },
    secondary: {
      static: {
        initial: '{color.gray.500}',
        dark: '{color.gray.400}',
      },
      hover: {
        initial: '{color.gray.700}',
        dark: '{color.gray.200}',
      },
    },
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
})
