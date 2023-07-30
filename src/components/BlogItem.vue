<template>
  <div class="blog-card">
    <img class="blog-image" :src="props.Blog.img" alt="Blog Image" />
    <div class="title">{{ props.Blog.title }}</div>
    <ul class="blog-list">
      <li>{{ props.Blog.date }}</li>
      <li><div class="dash"></div></li>
      <li>
        <FontAwesomeIcon icon="fa-regular fa-comments" />
        {{ props.Blog.comments }} Comments
      </li>
    </ul>
    <p class="desc">
      {{ props.Blog.description }}
    </p>
    <button class="direct-button-white">Read More</button>
  </div>
</template>

<script setup>
const props = defineProps({
  Blog: Object
});
</script>

<style scoped>
.dash {
  width: 1px;
  height: 100%;
  background: black;
}
.blog-card {
  display: flex;
  width: 70%;
  flex-direction: column;
  color: var(--vt-c-black);
  gap: 10px;
  margin-bottom: 20px;
}
.blog-image {
  width: 100%;
  height: 75%;
}
.title {
  font-weight: 700;
  font-size: 18px;
}
.blog-list {
  display: flex;
  list-style: none;
  padding: 0;
  gap: 30px;
}
.blog-list li {
  font-weight: 600;
}
</style>
