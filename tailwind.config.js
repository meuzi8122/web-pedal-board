/** @type {import("tailwindcss").Config} */
export default {
  content: ["./components/**/*.vue", "./layouts/**/*.vue", "./pages/**/*.vue", "./app.vue"],
  daisyui: {
    themes: ["aqua"],
  },
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    /* 静的コンポーネントスタイルを適用（TailwindCss標準） */
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "90%",
          "@screen sm": {
            maxWidth: "600px",
          },
          "@screen md": {
            maxWidth: "700px",
          },
          "@screen lg": {
            maxWidth: "900px",
          },
          "@screen xl": {
            maxWidth: "1200px",
          },
        },
      });
    },
  ],
};
