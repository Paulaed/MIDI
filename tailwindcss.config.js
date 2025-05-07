module.exports = {
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        scroll: "scroll 40s linear infinite", // Plus lent (40 secondes)
        spin: "spin-slow 4s linear infinite ",
      },
    },
  },
  plugins: [],
};
