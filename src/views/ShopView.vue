<template>
  <div class="page">
    <ShopItem v-for="product in store.products" :Product="product" />
  </div>
</template>

<script setup>
import ShopItem from "../components/ShopItem.vue";
import { useProductsStore } from "../stores/products";

const store = useProductsStore();
</script>

<style scoped>
.page {
  width: 80%;
  margin: 62px auto 0 auto;
  display: flex;
}
</style>
