<template>
  <img class="comp" :src="details.data.url" alt="Blog Image" />
</template>

<script setup>
const details = defineProps({
  data: Object
});
</script>

<style scoped>
.comp {
  margin: 10px 0;
  width: 100%;
}
</style>
