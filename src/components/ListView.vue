<template>
  <ul class="blog-list">
    <li item in details.data.listItems>
      {{ item }}
    </li>
  </ul>
</template>

<script setup>
const details = defineProps({
  data: Object
});
</script>

<style scoped>
.blog-list {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
