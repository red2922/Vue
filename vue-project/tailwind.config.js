/** @type {import('tailwindcss').Config} */
//Note to create this config via the command with NPX you need an earlier version of tailwind.Tailwind 3 and below still uses this

//Essentially Everything in this export default becomes the default values for the particular themes.
export default {
  content: ["./index.html", "./src/**/*.{vue, js, ts, jsx, tsx}"], //What files you want to watch for the tailwind config
  theme: {
    extend: {
      fontFamily: { sans: ["Poppins", "sans-serif"] },
    },
    gridTemplateColumns: { "70/30": "70% 28%" },
  },
  plugins: [],
};
