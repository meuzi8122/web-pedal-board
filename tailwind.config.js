/** @type {import("tailwindcss").Config} */
export default {
  content: ["./components/**/*.vue", "./layouts/**/*.vue", "./pages/**/*.vue", "./app.vue"],
  daisyui: {
    themes: ["aqua"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
