module.exports = {
  purge: ["./src/pages/**/*.js", "./src/components/**/*.js"],
  darkMode: false,
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      boxShadow: {
        out: "-5px 5px 0px 2px #000000",
      },
      fontFamily: {
        sans: ["Poppins"],
      },
      colors: {
        black: "#000100",
        primary: "#4CC1AA",
        gray: {
          100: "#e3e6ea",
          200: "#374151",
          900: "#1e2831",
        },
      },
      transitionTimingFunction: {
        snap: "cubic-bezier(0.42, 0, 0, 1.46)",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#fff",
            a: {
              color: "#4CC1AA",
            },
            code: {
              padding: "0.3rem",
            },
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
