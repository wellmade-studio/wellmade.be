/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#47446B',
        accent: '#B1E5F2',
        title: '#2F2F2F',
        body: '#6D6D6D',
        light: '#E8E9F3',
      },
      fontFamily: {
        sans: ['Josefin Sans', 'Arial', 'sans-serif'],
        cursive: ['Indie Flower', 'cursive'],
      },
      fontSize: {
        // Slightly larger base sizes for modern screens
        'base': ['1.125rem', { lineHeight: '1.75' }],    // 18px (was 16px)
        'lg': ['1.25rem', { lineHeight: '1.75' }],       // 20px (was 18px)
        'xl': ['1.375rem', { lineHeight: '1.75' }],      // 22px (was 20px)
        '2xl': ['1.625rem', { lineHeight: '1.4' }],      // 26px (was 24px)
        '3xl': ['2rem', { lineHeight: '1.3' }],          // 32px (was 30px)
        '4xl': ['2.5rem', { lineHeight: '1.2' }],        // 40px (was 36px)
        '5xl': ['3.25rem', { lineHeight: '1.15' }],      // 52px (was 48px)
        '6xl': ['4rem', { lineHeight: '1.1' }],          // 64px (was 60px)
        '7xl': ['5rem', { lineHeight: '1.05' }],         // 80px (was 72px)
      },
      boxShadow: {
        card: '0 20px 24px 1px rgba(0,0,0,0.08)',
        nav: '0 1px 2px 0 rgba(71,68,107,0.2)',
      },
    },
  },
  plugins: [],
};
