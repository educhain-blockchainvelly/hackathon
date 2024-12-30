/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          500: "#B759D7", // SyncFi 보라색
          600: "#A340C4", // 호버 상태용 진한 보라색
        },
      },
    },
  },
  plugins: [],
};
