<template>
  <div class="local">
    <GalleryItem img="headphones.jpg" item_name="Headphones" />
    <GalleryItem img="Flight-Computer.jpg" item_name="Flight Computer" />
  </div>
</template>

<script setup>
import GalleryItem from "./GalleryItem.vue";
</script>
<style scoped>
.local {
  position: relative;
  height: var(--section-height);
  display: flex;
  flex-direction: row;
  background: var(--vt-c-white-soft);
  justify-content: space-around;
}
</style>
