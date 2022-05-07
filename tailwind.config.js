module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Rale': 'Raleway',
        'RS': 'Roboto Slab',
      },
      boxShadow: {
        'xx': '0px 2.98256px 7.4564px rgba(255, 255, 255, 0.23)'
      },
      colors: {
        'left-grad': 'rgba(255,255,255,0.48)',
        'middle-grad': 'rgba(255,255,255,0.9)',
        'end-grad': 'rgba(255,255,255,0.48)',
        'about-grad-start': '#402565',
        'about-grad-end': '#327a66',
      }
    },
  },
  variants: {},
  plugins: [],
}
