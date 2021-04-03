module.exports = {
  darkMode: 'media',
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#8edc34',
    }),
    backgroundImage: () => ({
      none: 'none',
      'gradient-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
      'gradient-to-tr':
        'linear-gradient(to top right, var(--tw-gradient-stops))',
      'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
      'gradient-to-br':
        'linear-gradient(to bottom right, var(--tw-gradient-stops))',
      'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
      'gradient-to-bl':
        'linear-gradient(to bottom left, var(--tw-gradient-stops))',
      'gradient-to-l': 'linear-gradient(to left, var(--tw-gradient-stops))',
      'gradient-to-tl':
        'linear-gradient(to top left, var(--tw-gradient-stops))',
      colors:
        'linear-gradient(\n' +
        '    90deg,\n' +
        '    rgba(247, 68, 228, 1) 0%,\n' +
        '    rgba(247, 68, 228, 1) 12.5%,\n' +
        '    rgba(224, 51, 235, 1) 12.5%,\n' +
        '    rgba(224, 51, 235, 1) 25%,\n' +
        '    rgba(203, 34, 242, 1) 25%,\n' +
        '    rgba(203, 34, 242, 1) 37.5%,\n' +
        '    rgba(191, 25, 244, 1) 37.5%,\n' +
        '    rgba(191, 25, 244, 1) 50%,\n' +
        '    rgba(176, 13, 250, 1) 50%,\n' +
        '    rgba(176, 13, 250, 1) 62.5%,\n' +
        '    rgba(5, 173, 37, 1) 62.5%,\n' +
        '    rgba(5, 173, 37, 1) 75%,\n' +
        '    rgba(11, 188, 218, 1) 75%,\n' +
        '    rgba(11, 188, 218, 1) 87.5%,\n' +
        '    rgba(0, 173, 231, 1) 87.5%,\n' +
        '    rgba(0, 173, 231, 1) 100%\n' +
        '  )',
    }),
    scale: {
      0: '0',
      25: '.25',
      50: '.5',
      75: '.75',
      90: '.9',
      95: '.95',
      100: '1',
      105: '1.05',
      110: '1.1',
      125: '1.25',
      150: '1.5',
      200: '2',
    },
  },
}
