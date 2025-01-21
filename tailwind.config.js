/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-img-bali':"url('https://images.pexels.com/photos/1643130/pexels-photo-1643130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        'bg-img-store':"url('https://images.pexels.com/photos/30274731/pexels-photo-30274731/free-photo-of-authentic-japanese-restaurant-at-night-in-tokyo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        'bg-img-leaf':"url('https://cdn.pixabay.com/photo/2023/10/12/17/56/after-the-rain-8311416_1280.jpg')",
        'bg-img-mountain':"url('https://cdn.pixabay.com/photo/2020/11/09/18/54/mountains-5727541_1280.jpg')",
        'bg-img-nepal':"url('https://images.pexels.com/photos/20046906/pexels-photo-20046906/free-photo-of-lake-and-mountains-in-winter.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        'bg-img-ballon':"url('https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",


      },
      fontFamily: {
        lora: ['Lora','sans-serif'],

      },
    },
  },
  plugins: [],
}