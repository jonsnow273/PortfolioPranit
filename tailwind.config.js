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
        // Premium dark theme with vibrant accents
        'dark-bg': '#050608',
        'dark-card': '#0f1116',
        'dark-border': '#1a1f2e',
        'accent': '#00d4ff',
        'accent-secondary': '#00b8ff',
        'accent-tertiary': '#ff006e',
        'accent-hover': '#00f0ff',
        'accent-glow': '#0099cc',
        'text-primary': '#ffffff',
        'text-secondary': '#a0a9b8',
        'text-muted': '#6b7280',
        'neon-purple': '#9d4edd',
        'neon-blue': '#00d9ff',
        'neon-pink': '#ff006e',
        'gradient-start': '#0099cc',
        'gradient-end': '#ff006e',
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
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'neon-flicker': 'neonFlicker 0.15s infinite',
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
            transform: 'translateY(-8px)',
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
            transform: 'translateY(-15px)',
          },
        },
        pulseGlow: {
          '0%': {
            boxShadow: '0 0 20px rgba(0, 212, 255, 0.4)',
          },
          '100%': {
            boxShadow: '0 0 50px rgba(0, 212, 255, 0.8)',
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
            transform: 'scale(1.08)',
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
            transform: 'translateY(-12px) rotate(1deg)',
          },
          '50%': {
            transform: 'translateY(0) rotate(0deg)',
          },
          '75%': {
            transform: 'translateY(-6px) rotate(-1deg)',
          },
        },
        glowPulse: {
          '0%, 100%': {
            textShadow: '0 0 10px rgba(0, 212, 255, 0.3)',
          },
          '50%': {
            textShadow: '0 0 30px rgba(0, 212, 255, 0.8), 0 0 50px rgba(255, 0, 110, 0.4)',
          },
        },
        neonFlicker: {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': {
            textShadow: '0 0 10px #00d9ff, 0 0 20px #00d9ff, 0 0 40px #00d9ff',
            opacity: '1',
          },
          '20%, 24%, 55%': {
            textShadow: 'none',
            opacity: '0.8',
          },
        },
      },
      backgroundImage: {
        'dot-pattern': 'radial-gradient(circle, rgba(0, 212, 255, 0.1) 1px, transparent 1px)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'neon-grid': 'linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px), linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-size': '20px 20px',
        'grid-size': '50px 50px',
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(0, 212, 255, 0.3)',
        'glow-md': '0 0 20px rgba(0, 212, 255, 0.5)',
        'glow-lg': '0 0 40px rgba(0, 212, 255, 0.6)',
        'glow-xl': '0 0 60px rgba(0, 212, 255, 0.7)',
        'neon': '0 0 20px rgba(0, 212, 255, 0.5), inset 0 0 20px rgba(0, 212, 255, 0.1)',
      },
    },
  },
  plugins: [],
}