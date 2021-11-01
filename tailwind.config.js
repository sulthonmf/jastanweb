const plugin = require("tailwindcss/plugin")
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundAttachment: ['hover', 'focus']
    },
  },
  plugins: [
    plugin(function({ addUtilities}){
      const utilities = {
        ".bg-hero": {
          "background-image": "url(/hero42.jpg)"
        }
      };

      addUtilities(utilities);
    })
  ],
}
