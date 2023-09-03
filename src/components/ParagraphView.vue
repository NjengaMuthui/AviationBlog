<template>
  <p class="blog-paragraph">
    {{ details.data.text }}
  </p>
</template>

<script setup>
const details = defineProps({
  data: Object
});
</script>

<style scoped>
.blog-paragraph {
  margin: 10px 0;
}
</style>
