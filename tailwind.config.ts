import type { Config } from "tailwindcss";



export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tertiary: "var(--color-tertiary)",
        accent: "var(--color-accent)",
        cards: "var(--color-cards)",
        contactCards: "var(--color-bg-contactCards)",
        employeeCard: "var(--color-bg-employeeCard)",
        listing: "var(--color-bg-listing)",
        agent: "var(--color-bg-agent)",
      },
      textColor: {
        skin: {
          base: "var(--color-text-base)",
          inverted: "var(--color-text-inverted)",
          muted: "var(--color-text-muted)",
          listing: "var(--color-text-listing)",
        },
      },
      fontFamily: {
        roboto: ["Montserrat", "sans-serif"],
      },
      backgroundColor: {
        skin: {
          base: "var(--color-bg-base)",
          fill: "var(--color-bg-fill)",
          inverted: "var(--color-bg-inverted)",
          fill_inverted: "var(--color-bg-fill-inverted)",
          map_marked: "var(--color-bg-map-marked)",
        },
      },
      backgroundImage: {
        consultaion: "linear-gradient(180deg, rgba(0, 90, 140, 0) 67.59%, #005A8C 100%)"
      },
      borderColor: {
        skin: {
          inverted: "var(--color-border-inverted)",
          listing: "var(--color-border-listing)",
        },
      },
      borderRadius: {
        'custom': '0% 0% 50% 50%',
      },
      screens: {
        "3xl": "1920px",
      },
      transitionProperty: {
        'max-height': 'max-height'
      }
    },
  },
  plugins: [],
} satisfies Config;
