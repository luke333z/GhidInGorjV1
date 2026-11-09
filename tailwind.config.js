/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require("@iconify/tailwind")
module.exports = {
  content: ["./*.{html,js}", "./assets/info/en/*.{html,js}",  "./assets/info/ro/*.{html,js}","./assets/info/fr/*.{html,js}","./flyonui/dist/js/*.js", "./src/*.js"],
  darkMode: 'selector',
  theme: {
    fontFamily: {
      sans: ['Kanit', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        'sec-blue': '#0069b4',
        'sec-white': '#f2f2f7',
        'text-gray': '#85858b',
        'hover-blue':'#0549b5',
        'sec-black': '#1c1c1e',
        'sec-gray': '#3a3a3d',
        'sec-black2': '#2b2b2e',
        'text-gray2': '#b8b6c0'
      },
    },
   
  },
  flyonui: {
    themes: [
      {
        dark: {
          "primary": "#0049b5",
          "primary-content": "#ffffff",
          "secondary": "#606164",
          "secondary-content": "#000000",
          "accent": "#808080",
          "accent-content": "#0049b5",
          "neutral": "#ffffff",
          "neutral-content": "#080a0a",
          "base-100": "#1c1c1e",
          "base-200": "#2b2b2e",
          "base-300": "#3c3d3e",
          "base-content": "#bfbfbf",
          "info": "#3498db",
          "info-content": "#ffffff",
          "success": "#00ffee",
          "success-content": "#000000",
          "warning": "#ff7b00",
          "warning-content": "#000000",
          "error": "#ff0000",
          "error-content": "#000000"
        },
        light: {
          "primary": "#0049b5",
          "primary-content": "#ffffff",
          "secondary": "#999999",
          "secondary-content": "#000000",
          "accent": "#808080",
          "accent-content": "#0049b5",
          "neutral": "#1a1a1a",
          "neutral-content": "#080a0a",
          "base-100": "#f2f2f7",
          "base-200": "#ffffff",
          "base-300": "#cfcfcf",
          "base-content": "#424242",
          "info": "#3498db",
          "info-content": "#ffffff",
          "success": "#00ffee",
          "success-content": "#000000",
          "warning": "#ff7b00",
          "warning-content": "#000000",
          "error": "#ff0000",
          "error-content": "#000000"
        }
      }
    ]
  }, 

  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    require("flyonui"),
    require("flyonui/plugin"),
    addDynamicIconSelectors()
  ],
};