module.exports = {
  content: [
    './src/**/*.{html,js}',
    './*.{html,js}',],
  plugins: [
    require('tw-elements/dist/plugin')
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
}