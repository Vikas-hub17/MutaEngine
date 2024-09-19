module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#0057D9', // Color from the PDF
        secondary: '#FF6D00', // Accent color from the PDF
        darkGray: '#1F2937', // Dark gray for text
        lightGray: '#F3F4F6', // Light gray for background sections
        buttonText: '#FFFFFF', // Button text color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Ensure the font matches PDF's style
      },
    },
  },
  plugins: [],
};
