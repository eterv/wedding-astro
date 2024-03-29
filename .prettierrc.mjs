export default {
  printWidth: 80,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  arrowParens: 'always',
  plugins: [
    'prettier-plugin-astro',
    'prettier-plugin-svelte',
    'prettier-plugin-tailwindcss',
  ],
  overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
};
