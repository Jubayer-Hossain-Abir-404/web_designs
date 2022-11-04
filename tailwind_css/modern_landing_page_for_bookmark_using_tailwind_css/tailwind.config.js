module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "bookmark-purple": "#5267DF",
        "bookmark-red": "#FA5959",
        "bookmark-blue": "#242A45",
        "bookmark-gray": "#9194A2",
        "bookmark-white": "#f7f7f7",
      },
    },
    fontFamily: {
      Poppins: ['Poppins', 'sans-serif'],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        'lg': '768px',
        'xl': '768px',
        '2xl': '768px',
      },
    },
  },
  plugins: [],
}
