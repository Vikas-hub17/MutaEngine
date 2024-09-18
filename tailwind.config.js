module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#1A73E8', // Blue from PDF
        secondary: '#FF7C1F', // Accent orange color
        dark: '#1F2937', // Dark gray for text
        lightGray: '#F3F4F6', // Light gray background
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Change to match the design if needed
      },
    },
  },
  plugins: [],
};
