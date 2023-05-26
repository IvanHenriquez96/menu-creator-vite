/** @type {import('tailwindcss').Config} */
import tailwindcss_animated from "tailwindcss-animated";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [tailwindcss_animated],
};
