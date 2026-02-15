/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: 'class', // Optional: enables dark mode with class="dark" on html/body

  theme: {
    extend: {
      // Custom colors (pick from coolors.co or match her brand)
      colors: {
        primary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6', // main green/teal
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59', // darker green used in navbar
          900: '#134e4a',
        },
        secondary: {
          900: '#111827', // dark gray for text/footer
        },
      },

      // Custom font family (add Google Fonts in index.html if needed)
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'], // for prose/blog content
      },

      // Custom spacing / border-radius if you want consistency
      borderRadius: {
        '4xl': '2rem', // larger rounded corners
      },

      // Custom box shadow
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
    // Optional future plugins
    // require('@tailwindcss/forms'), // better form styling
    // require('@tailwindcss/aspect-ratio'), // for image ratios
  ],
}