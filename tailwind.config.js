/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme colors
        'dark-bg': '#0d0e12',
        'dark-card': '#151619',
        'dark-border': '#2a2d3a',
        'accent': '#6b8cb8',
        'accent-hover': '#7a9bc9',
        'text-primary': '#e8e8ea',
        'text-secondary': '#8a8d94',
        'text-muted': '#5a5d64',
      },
      fontFamily: {
        'heading': ['Inter', 'Space Grotesk', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)',
        'bounce-subtle': 'bounceSubtle 3s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marqueeReverse 25s linear infinite',
        'count-up': 'countUp 1.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)',
        'rotate-slow': 'rotateSlow 20s linear infinite',
        'scale-pulse': 'scalePulse 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'wave': 'wave 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        bounceSubtle: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-6px)',
          },
        },
        marquee: {
          '0%': {
            transform: 'translateX(0%)',
          },
          '100%': {
            transform: 'translateX(-33.33%)',
          },
        },
        marqueeReverse: {
          '0%': {
            transform: 'translateX(-33.33%)',
          },
          '100%': {
            transform: 'translateX(0%)',
          },
        },
        countUp: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        pulseGlow: {
          '0%': {
            boxShadow: '0 0 20px rgba(107, 140, 184, 0.4)',
          },
          '100%': {
            boxShadow: '0 0 40px rgba(107, 140, 184, 0.8)',
          },
        },
        slideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        rotateSlow: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        scalePulse: {
          '0%, 100%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(1.05)',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-200% 0',
          },
          '100%': {
            backgroundPosition: '200% 0',
          },
        },
        wave: {
          '0%, 100%': {
            transform: 'translateY(0) rotate(0deg)',
          },
          '25%': {
            transform: 'translateY(-10px) rotate(1deg)',
          },
          '50%': {
            transform: 'translateY(0) rotate(0deg)',
          },
          '75%': {
            transform: 'translateY(-5px) rotate(-1deg)',
          },
        },
      },
      backgroundImage: {
        'dot-pattern': 'radial-gradient(circle, rgba(107, 140, 184, 0.1) 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-size': '20px 20px',
      },
    },
  },
  plugins: [],
}