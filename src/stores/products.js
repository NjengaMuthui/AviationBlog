import { ref } from "vue";
import { defineStore } from "pinia";

export const useProductsStore = defineStore("ShoppingProducts", () => {
  const products = ref([
    {
      img: "/src/assets/headphones.jpg",
      name: "Headphones",
      price: 5000
    },
    {
      img: "/src/assets/Flight-Computer.jpg",
      name: "Flight Computer",
      price: 8000
    }
  ]);
  return { products };
});
