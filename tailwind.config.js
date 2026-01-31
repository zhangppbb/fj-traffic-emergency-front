/** @type {import('tailwindcss').Config} */
module.exports = {
  //文件路径根据自己项目来定，可能是 ./src/**/*.{js,ts,jsx,tsx}
    purge: [ "./src/**/*.{js,jsx,vue}", "./src/index.html" ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {}
    },
    variants: {},
    plugins: []
  };
  