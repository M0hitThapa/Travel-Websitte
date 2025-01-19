/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-img-bali':"url('https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        'bg-img-store':"url('https://images.pexels.com/photos/30274731/pexels-photo-30274731/free-photo-of-authentic-japanese-restaurant-at-night-in-tokyo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",


      }
    },
  },
  plugins: [],
}