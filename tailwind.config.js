

/** @type {import('tailwindcss').Config} */
export default {
  darkMode : "class",
  content: [ 
    "./src/App.jsx",
    "./src/components/Header.jsx",
    "./src/components/Welcome.jsx",
    "./src/components/About.jsx",
    "./src/components/Travel.jsx",
    "./src/components/Contact.jsx",

  ],
  theme: {
    extend: {
      screens:{
        'sm' : '350px',
        'md' : '576px',
        'lg' : '768px',
        'xl' : '992px',
      },
      boxShadow:{
        '3d' : '0 -1px 4px rgba(0,0,0,0.15)',
        '3da' : '0 -1px 4px rgba(255,255,255,0.30)',
        'white-glow': '0 4px 15px rgba(255, 255, 255, 0.5)',
        'green-glow': '0 4px 15px rgba(82, 213, 177, 0.5)'
      },
      colors:{
        'Title-color' : 'hsl(0%, 0%, 20%)',
        'Tilte-Color-Dark' : 'hsl(0%, 0%, 0%)',
        'Text-color':'hsl(0%, 0%, 46%)',
        'Body-Color':'hsl(0%, 0%, 98%)',
        "Toogle" : "hsl(230, 22%, 74%)",
        "Light-Grayish-Blue" : "hsl(227, 47%, 96%)"
      },
      backgroundImage:{
        'Toggle-Gradient-Dark' : 'linear-gradient(to right, #202a31, #6d95a3)',
        'Toggle-Gradient' : 'linear-gradient( to right,#fbea24 , #b47509)',
        'Gradient-show-menu' : 'radial-gradient(circle at bottom, #475569,#8596ab )',
        'Gradient-Title' : 'linear-gradient(45deg, #0F2027, #5bb2b7)',
        'about' : 'linear-gradient(to top, #d2cac8, #5c633c)',
        'cardGradient': 'linear-gradient(to right, #ffe000, #799f0c)'
      },
      spacing:{
        'calc-left' : 'calc(50% - 110px)'
      }
    },
  },
  plugins: [],
}