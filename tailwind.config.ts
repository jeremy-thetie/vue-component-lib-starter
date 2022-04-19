const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/components/**/*.{html,js,vue}', './docs/**/**/*.{html,js,vue}'],
  purge: {
    whitelist: ['-mr-32']
  },
  theme: {
    colors: {
      // ...colors,
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000814',
      white: colors.slate['100'],
      gray: {
        ...colors.slate,
        1200: '#07090f'
      },
      truegray: colors.slate,
      red: {
        ...colors.red,
        1200: '#261627'
      },
      yellow: colors.amber,
      blue: {
        ...colors.blue,
        1200: '#0a1d30'
      },
      pink: {
        ...colors.pink,
        1200: '#261627'
      },
      purple: {
        ...colors.violet,
        1200: '#1a1054'
      },
      truegreen: colors.green,
      green: {
        ...colors.emerald,
        1200: '#16271F'
      },
      orange: colors.orange,
      teal: {
        400: colors.teal['400']
      },
      // used mostly for borders and light text
      secondary: colors.slate['400'],
      grid: colors.slate['700']
    },
    extend: {
      spacing: {
        98: '31.5rem',
        104: '36rem',
        110: '42rem'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      gridRow: {
        'span-1/2': 'span 1/2',
        'span-6': 'span 6 / span 6',
        'span-7': 'span 7 / span 7',
        'span-8': 'span 8 / span 8',
        'span-9': 'span 9 / span 9',
        'span-10': 'span 10 / span 10',
        'span-11': 'span 11 / span 11',
        'span-12': 'span 12 / span 12'
      },
      gridCol: {
        'span-6': 'span 6 / span 6',
        'span-7': 'span 7 / span 7',
        'span-8': 'span 8 / span 8',
        'span-9': 'span 9 / span 9',
        'span-10': 'span 10 / span 10',
        'span-11': 'span 11 / span 11',
        'span-12': 'span 12 / span 12'
      },
      width: {
        '12/12': '100%',
        '6/6': '93.333333%',
        132: '33rem'
      },
      zIndex: {
        51: '51'
      }
    },
    customForms: theme => ({
      default: {
        checkbox: {
          backgroundColor: theme('colors.gray.600'),
          '&:focus': {
            outline: 'none',
            boxShadow: 'none',
            borderColor: 'none'
          }
        }
      }
    })
  },
  variants: {
    textColor: ({ after }) => after(['invalid']),
    extend: {
      zIndex: ['hover', 'active']
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms')({
      strategy: 'class'
    }),
    require('@tailwindcss/typography'),
    plugin(function ({ addVariant, e }) {
      addVariant('invalid', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`invalid${separator}${className}`)}:invalid`;
        });
      });
    })
  ]
};
