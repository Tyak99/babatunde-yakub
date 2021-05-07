module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'sidehustle-image': "url('/project-images/sidehustle.jpg')",
        'footer-texture': "url('/project-images/footer-texture.png')",
       }),
       height: {
         '112': '28rem',
         '128': '32rem'
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
