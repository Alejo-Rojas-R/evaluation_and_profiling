export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary': '#280384',
        'secondary': '#6C46EB',
        'tertiary': '#4919A1',
        'quaternary': '#37393F',
        'quinary': '#F9B32A',
        'senary': '#EAEAEA',
        'septenary': '#A1AEBF',
        'gray': '#525151',
        'white': '#FFFFFF',
        'black': '#000000',
      },
    },
  },
}