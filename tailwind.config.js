/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "500px", // For smaller devices
        sm: "640px", // Default breakpoints for sm and above
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px", // Ensuring 2xl still applies
        ld: { raw: "(min-width: 1280px) and (max-resolution: 96dpi)" }, // Specific for large, low-DPI screens only
      },
      fontFamily: {
        gully: ["Gully", "sans-serif"], // Add the custom font
      },
      fontWeight: {
        regular: 400,
        medium: 500,
      },
    },
  },
  plugins: [],
};
