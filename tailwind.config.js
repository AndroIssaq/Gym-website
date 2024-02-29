/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/App.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: [
      {
        lofi: {
          ...require("daisyui/src/theming/themes")["lofi"],

          "h1": {
            "color":"#4b4a4ab5"
          },
          ".mood":{
            "background-color":"black",
            "color":"white"
          },
        ".hero-span":{
          "background-color":"black",
        },
        ".lines li":{
          "background-color":"#aba7a7",
        },
        ".lines li span":{
          "background-color":"black",
        },

        "aside":{
          "background-color":"white",
        },
      }
    },
    {
      black: {
        ...require("daisyui/src/theming/themes")["black"],

        "h1": {
          "color":"#fff"
        },

        ".mood":{
          "background-color":"white",
          "color":"black"
        },
        ".hero-span":{
          "background-color":"white",
        },
        ".lines li":{
          "background-color":"#2e2e2e",
        },
                ".lines li span":{
          "background-color":"linear-gradient(0deg,hsla(0,0%,100%,.3),hsla(0,0%,100%,0))",
        },
      ".nav-content":{
        "background-color":"#2f8240",
      },

        "aside":{
          "background-color":"#212121",
        },
        
    }
  }
    ],
  },

  plugins: [require("daisyui")],
}