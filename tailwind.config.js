/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        // See https://tailwindcss.com/docs/customizing-colors for the default tailwind color palette
        colors: {
          background: {
              DEFAULT: "#fde68a" // eq to amber-200
          },
          primary: {
              DEFAULT: "#433012"
          },
          secondary: {
              DEFAULT: "#f3af44"
          },
          accent: {
              DEFAULT: "#634e01"
          }
        },
        backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            'gradient-conic':
                'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
    },
  },
  plugins: [],
}
