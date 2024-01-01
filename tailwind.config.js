/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'carbon-fiber': '#2D2D2D',
        'dou-lu-green': '#009379',
        'sunset-orange': '#FF6250',
        'sango-pink': "#F3AFA8",
        'bleached-silk': "#F3F3F3",
        'pixel-cream': "#F7D684",
      }
    },
  },
  plugins: [],
};
