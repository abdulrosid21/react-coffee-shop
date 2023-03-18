/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: "#6A4029",
        yellow: "#FFBA33",
        "soft-green": "#88B788",
        "soft-yellow": "#F5C361",
        "soft-red": "#C59378",
      },
      backgroundImage: {
        "image-primary": "url('/src/assets/img/image-primary.jpeg')",
        "image-secondary": "url('/src/assets/img/image-secondary.jpeg')",
        "image-lamp": "url('/src/assets/img/image-lamp.jpeg')",
        order: "url('/src/assets/img/order.jpeg')",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FFFFFF",
          secondary: "#F8F8F8",
          brown: "#6A4029",
          yellow: "#FFBA33",
          accent: "#37CDBE",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require("@tailwindcss/forms")],
};
