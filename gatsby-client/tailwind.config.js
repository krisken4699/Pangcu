module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: {
       '0': '0',
       '1/4': '25%',
       '10vh': '10vh',
       '20vh': '20vh',
       '30vh': '30vh',
       '40vh': '40vh',
       '50vh': '50vh',
       '60vh': '60vh',
       '70vh': '70vh',
       '80vh': '80vh',
       '1/2': '50%',
       '10': '2.5rem',
       '20': '5rem',
       '32': '8rem',
       '3/4': '75%',
       'full': '100%',
      },
      height: {
        '45vw': '45vw',
        '16vw': '16vw',
        '10vh': '10vh',
        '20vh': '20vh',
        '30vh': '30vh',
        '40vh': '40vh',
        '50vh': '50vh',
        '60vh': '60vh',
        '70vh': '70vh',
        '80vh': '80vh',
        '25vh': '25vh',
        '50vw': '50vw',
        '1/3vh': '33.333vh',
        '2/3vh': '66.666vh',
        '50vmin': '50vmin',
        '35vmin': '35vmin',
        '25vmin': '25vmin',
        '41vmin': '41vmin',
        '40vmin': '40vmin',
        '37vmin': '37vmin',
        '200vh': '200vh',
      },
      width: {
        '40vh': '40vh',
        '50vh': '50vh',
        '50vw': '50vw',
        '45vw': '45vw',
        '16vw': '16vw',
        '37vmin': '37vmin',
        '25vmin': '25vmin',
        '41vmin': '41vmin',
        '40vmin': '40vmin',
        '50vmin': '50vmin',
        '35vmin': '35vmin',
        '1/3vw': '33.333vw',
        '2/3vw': '66.666vw',
        '200vw': '200vw',
      },
      rotate: {
        '-20': '-20deg',
        '20': '20deg',
        '-6.02': '-6.02deg',
        '6.02': '6.02deg',
      },
      spacing: {
        '1/7': '14.2857143vmin',
        '2/7': '28.5714286vmin',
        '3/7': '42.8571429vmin',
        '4/7': '57.1428571vmin',
        '5/7': '71.4285714vmin',
        '6/7': '85.7142857vmin',
        '7/7': '100vmin',
        '1/10': '10vmin',
        '2/10': '20vmin',
        '3/10': '30vmin',
        '4/10': '40vmin',
        '5/10': '50vmin',
        '6/10': '60vmin',
        '7/10': '70vmin',
        '8/10': '80vmin',
        '9/10': '90vmin',
        '10/10': '100vmin',
      },
      zIndex: {
        '-1': '-1',
      },
      colors: {
        'gray': {
          '450': '#858585',
          '350': '#ADADAD'
        },
        'AA0000': '#AA0000',
        'C4C4C4': '#C4C4C4',
        'F0F0F0': '#F0F0F0',
        'F9C74F': '#F9C74F',
        'F7F5F2': '#F7F5F2',
        '666666': '#666666',
        'DDDDDD': '#DDDDDD',
        'EDF4FD': '#EDF4FD',
        '113D8B': '#113D8B',
        'D9D9D9': '#D9D9D9',
        '0A122A': '#0A122A',
        '3075EC': '#3075EC',
      }
    }
  },
  variants: {
    extend: {
      cursor: ['hover', 'focus'],
      borderWidth: ['hover', 'focus', 'responsive'],
      gradientColorStops: ['active', 'group-hover', 'hover'],
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
