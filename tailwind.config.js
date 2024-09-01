/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#fefefe",
          "200": "#fafafa",
          "300": "#242533",
        },
        white: "#fff",
        whitesmoke: {
          "100": "#f3f3f4",
          "200": "#f1f1f1",
        },
        black: "#000",
        mediumseagreen: {
          "100": "#1fcf8a",
          "200": "#05b570",
        },
        darkslategray: "#2d3748",
        slategray: "#718096",
        tomato: "#ff5151",
        goldenrod: "#ffc021",
        lightsteelblue: "#a0aec0",
        darkgray: {
          "100": "#b3b3b3",
          "200": "#9e9e9e",
        },
        gainsboro: "#e0e0e0",
        dimgray: {
          "100": "#686868",
          "200": "#666",
          "300": "rgba(104, 104, 104, 0.5)",
        },
      },
      spacing: {},
      fontFamily: {
        "plus-jakarta-sans": "'Plus Jakarta Sans'",
        poppins: "Poppins",
        roboto: "Roboto",
      },
      borderRadius: {
        "3xs": "10px",
        "8xs": "5px",
      },
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      inherit: "inherit",
    },
    screens: {
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
