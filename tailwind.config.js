/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        search: 'rgba(42, 163, 239, 0.06)',
        // Add any other custom colors here
      },
    },
  },
  plugins: [],
}

