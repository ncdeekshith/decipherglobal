import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#06162f",
        midnight: "#0b2451",
        electric: "#25d9ff",
        teal: "#16c7ae",
        cloud: "#f6f9fc",
        graphite: "#1a2638"
      },
      boxShadow: {
        premium: "0 24px 80px rgba(6, 22, 47, 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
