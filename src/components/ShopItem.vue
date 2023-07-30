<template>
  <div class="shop-item">
    <div class="img-container">
      <img :src="props.Product.img" alt="Shop Item Name" class="img" />
    </div>
    <h3 class="item-name">{{ props.Product.name }}</h3>
    <h2 class="item-price">{{ price }}</h2>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  Product: Object
});
const price = computed(() => "Kshs " + props.Product.price);
</script>

<style scoped>
.shop-item {
  width: 30%;
  margin: 25px 0;
}
.img {
  width: 100%;
  object-fit: cover;
  object-position: center;
  height: auto;
}
</style>
