/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth:{
          '87rem': '87rem', // Adds a custom max-width of 90rem
      },
    },
  },
  plugins: [],
};

// module.exports = {
//   theme: {
//     extend: {
//       maxWidth: {
//         '90rem': '90rem', // Adds a custom max-width of 90rem
//       },
//     },
//   },
//   plugins: [],
// };
