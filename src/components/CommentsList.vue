<template>
  <div>
    <h1 class="title">{{ props.title }}</h1>
    <div class="comment-container">
      <div class="avatar">
        <div class="avatar-letter">P</div>
      </div>
      <div class="column">
        <input
          class="comment-input"
          type="text"
          placeholder="Add Your Comment here"
        />
        <div class="comment-control">
          <button class="control">Cancel</button>
          <button class="control">Submit</button>
        </div>
      </div>
    </div>
    <div class="comments-list">
      <CommentsView v-for="comment in store.comments" :CommentOBJ="comment" />
    </div>
    <div class="placeholder">
      <p class="placeholder-text">There are no comments to view</p>
    </div>
  </div>
</template>

<script setup>
import { commentsStore } from "../stores/comments";
import CommentsView from "./CommentsView.vue";

const props = defineProps({
  title: String
});

const store = commentsStore();
</script>

<style scoped>
.title {
  color: #000;
  margin-bottom: 40px;
}
.comment-container {
  display: flex;
  margin: 40px 0;
}
.avatar-letter {
  width: 50px;
  height: 50px;
  background: gold;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  color: aliceblue;
  font-weight: 600;
}
.avatar {
  margin-right: 15px;
}
.comment-input {
  min-width: 400px;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: var(--vt-c-indigo) 2px solid;
  font-size: 16px;
  padding: 3px 0;
}
.comment-input:focus {
  outline: none;
  border-bottom: #000 2px solid;
}
.control {
  border: none;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
  background: transparent;
  border-radius: 10px;
  font-weight: 600;
}
.comment-control {
  display: flex;
  justify-content: end;
  margin-top: 10px;
  gap: 20px;
}
.control:hover {
  background: #d5dcf9;
}
</style>
