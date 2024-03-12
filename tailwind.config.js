/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'dark': '#1C2833 ',
      'malachite': {
        '50': '#f0fdf2',
        '100': '#dcfce1',
        '200': '#bbf7c5',
        '300': '#87ee99',
        '400': '#4bdd66',
        '500': '#23c441',
        '600': '#17a231',
        '700': '#167f2a',
        '800': '#176426',
        '900': '#145322',
        '950': '#052e0f',
    },
      // ...
    },
  },
  plugins: [],
}