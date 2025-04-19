/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './pages/*.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Google's official brand colors
        'google-blue': '#4285F4',
        'google-red': '#EA4335',
        'google-yellow': '#FBBC05',
        'google-green': '#34A853',
        'google-gray': '#9AA0A6',
        'google-light-gray': '#F1F3F4',
        'google-dark-gray': '#202124',
        'google-bg': '#FFFFFF',
        'google-hover': '#F8F9FA',
        'google-border': '#DADCE0',
        // Dark mode colors
        'dark-bg': '#202124',
        'dark-card': '#303134',
        'dark-border': '#5f6368',
        'dark-hover': '#3c4043',
        'dark-text': '#e8eaed',
        'dark-text-secondary': '#bdc1c6',
      },
      fontFamily: {
        'sans': ['Roboto', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Arial', 'sans-serif'],
        'product-sans': ['"Product Sans"', '"Google Sans"', 'Roboto', 'Arial', 'sans-serif'],
      },
      animation: {
        'width': 'width 1.5s ease-in-out',
        'gradient-x': 'gradient-x 3s ease infinite',
      },
      keyframes: {
        width: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
      boxShadow: {
        'google': '0 1px 6px 0 rgba(32, 33, 36, 0.28)',
        'google-hover': '0 1px 10px 0 rgba(32, 33, 36, 0.28)',
        'google-card': '0 2px 10px 0 rgba(0, 0, 0, 0.1)',
        'dark-google': '0 1px 6px 0 rgba(0, 0, 0, 0.5)',
        'dark-google-hover': '0 1px 10px 0 rgba(0, 0, 0, 0.6)',
      },
      borderRadius: {
        'google': '24px',
        'google-sm': '8px',
        'google-md': '12px',
        'google-lg': '24px',
        'google-xl': '28px',
      },
      backgroundImage: {
        'skill-gradient-blue': 'linear-gradient(90deg, #4285F4, #34A853)',
        'skill-gradient-red': 'linear-gradient(90deg, #EA4335, #FBBC05)',
        'skill-gradient-green': 'linear-gradient(90deg, #34A853, #4285F4)',
        'skill-gradient-yellow': 'linear-gradient(90deg, #FBBC05, #EA4335)',
        'skill-gradient-multi': 'linear-gradient(90deg, #4285F4, #EA4335, #FBBC05, #34A853)',
      },
    },
  },
  plugins: [],
}