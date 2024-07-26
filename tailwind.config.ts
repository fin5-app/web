/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

const config: Config = {
  content: [
    flowbite.content(),
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(200%)', opacity: '0' },
          '100%': { transform: 'translateX(100)', opacity: '1' },
        },
        slideOut: {
          '0%': { transform: 'translateX(100)', opacity: '1' },
          '100%': { transform: 'translateX(200%)', opacity: '0' },
        },
      },
      animation: {
        slideIn: 'slideIn 0.5s ease-out forwards',
        slideOut: 'slideOut 0.5s ease-in forwards',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          100: '#0C0D0E'
        },
        secondary: {
          100: '#151718'
        },
        borderPrimary: {
          100: '#30363db3'
        },
        button: {
          primary: '#604AD9'
        },
        text: {
          primary: '#c5d1de',
          secondary: '#848d97'
        },
        success: {
          100: '#bbf7d0'
        },
        error: {
          100: '#fecaca'
        },
        primaryBlue: {
          100: '#bfdbfe'
        },
        purple: {
          100: '#A48FF6',
          200: '#604AD9',
          300: '#5526B1'
        }
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}
export default config;