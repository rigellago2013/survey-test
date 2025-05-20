/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-brand': '#1E40AF',
        
      },
        animation: {
        'float1': 'float1 8s ease-in-out infinite',
        'float2': 'float2 12s ease-in-out infinite',
        'float3': 'float3 10s ease-in-out infinite',
        'glow': 'pulse-glow 4s ease-in-out infinite'
      },
      keyframes: {
        float1: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-20px) translateX(10px)' }
        },
        float2: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(15px) translateX(-10px)' }
        },
        float3: {
          '0%, 100%': { transform: 'translateY(0) translateX(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) translateX(15px) rotate(10deg)' }
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px 5px rgba(59, 130, 246, 0.2)' },
          '50%': { boxShadow: '0 0 30px 8px rgba(59, 130, 246, 0.4)' }
        }
      }
    },
  },
  plugins: [],
}