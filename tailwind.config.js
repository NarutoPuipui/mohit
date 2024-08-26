/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2020/05/black-paper-background.jpg')",

        
        'Edu-pattern': "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Q1TivwI8QQrNp_M5sBdv3mX6gB37zRUbNQ&s')",

        'Skill-pattern': "url('https://images.pexels.com/photos/396547/pexels-photo-396547.jpeg?auto=compress&cs=tinysrgb&w=600')",


        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily:{
        title:["poppins","sans-serif"]
      },
      
    },
  },
  plugins: [],
};
