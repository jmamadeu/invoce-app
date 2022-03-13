module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        headline: ['Tienne'],
        default: ['Roboto']
      },
      colors: {
        darkPurple: {
          100: '#130F1C',
          200: '#56447F',
          300: '#8E82A9'
        },
        gray: {
          0: '#000000',
          10: '#1F1B29',
          25: '#2E2A36',
          50: '#5A5761',
          100: '#5A5761',
          200: '#BAB9BD',
          300: '#DEDEE0',
          400: '#ECECEE',
          500: '#F3F3F5',
          600: '#FAFAFA'
        },
        purple: {
          100: '#651FFF',
          200: '#4C17BF',
          300: '#331080'
        }
      }
    },
  },
  plugins: [],
}
