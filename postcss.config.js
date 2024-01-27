module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nesting',
    autoprefixer: {},
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  }
};
