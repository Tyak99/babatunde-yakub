module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxWidth: {
      xs: "18rem",
    },
    extend: {
      transitionDelay: {
        0: "0ms",
      },
      transitionTimingFunction: {
        "sidebar-in-out": "cubic-bezier(0.6, 0.05, 0.28, 0.91)",
      },
      height: {
        112: "28rem",
        128: "32rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
