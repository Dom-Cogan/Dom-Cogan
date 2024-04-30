/* @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bgPrimary: "var(--background)",
        bgSecondary: "var(--bg-secondary)",
        txtPrimary: "var(--primary)",
        txtSecondary: "var(--txt-secondary)",
      },
      boxShadow: {
        border: "4px 4px var(--primary), -4px -4px var(--primary)",
        header: "0px 3px var(--primary), 0px -3px var(--primary)",
      },
    },
  },
  plugins: [],
};
