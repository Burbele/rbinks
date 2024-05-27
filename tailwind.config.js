/** @type {import('tailwindcss').Config} */
module.exports = {
  // Specify the files Tailwind should scan for class names
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Define custom fonts
    fontFamily: {
      primary: 'Oswald',
      secondary: 'Raleway',
      tertiary: 'Rozha One',
    },
    // Container padding settings
    container: {
      padding: {
        DEFAULT: '20px',
        lg: '0',
      },
    },
    // Define custom screen sizes
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1300px',
    },
    extend: {
      // Extend default color palette
      colors: {
        dark: '#111111',
        grey: {
          DEFAULT: '#555555',
        },
      },
      // Define custom background images
      backgroundImage: {
        hero: "url('/src/img/hero/bg.jpg')",
        about: "url('/src/img/about/image.png')",
      },
      // Define custom content property
      content: {
        outlineText: 'url("/src/img/hero/outline-text.svg")',
      },
    },
  },
  plugins: [],
};
