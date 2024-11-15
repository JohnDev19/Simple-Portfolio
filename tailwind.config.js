module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'rust-bg': 'var(--color-rust-bg)',
        'rust-text': 'var(--color-rust-text)',
        'rust-primary': 'var(--color-rust-primary)',
        'rust-secondary': 'var(--color-rust-secondary)',
        'rust-accent': 'var(--color-rust-accent)',
        'rust-accent-dark': 'var(--color-rust-accent-dark)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'rust-hero': "url('https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg')",
      },
    },
  },
  plugins: [],
}
