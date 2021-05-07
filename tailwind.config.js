module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxWidth: {
      xs: "16rem",
    },
    extend: {
      backgroundImage: (theme) => ({
        "sidehustle-image": "url('/project-images/sidehustle.jpg')",
        "fibre-image": "url('/project-images/fibre.svg')",
        "jackocoins-image": "url('/project-images/jackocoins.svg')",
      }),
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
