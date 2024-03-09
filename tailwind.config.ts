import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      lightPrimary:'hsl(var(--light-color-primary) / <alpha-value>)',
      lighBg:'hsl(var(--light-bg) / <alpha-value>)',
      lighTextPrimary:'hsl(var(--light-text-primary) / <alpha-value>)',
      lighBorderPrimary:'hsl(var(--light-border-primary) / <alpha-value>)'
    }
  },
  plugins: [],
};
export default config;
