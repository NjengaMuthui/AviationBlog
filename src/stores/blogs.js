import { ref } from "vue";
import { defineStore } from "pinia";

export const useBlogStore = defineStore("blogStore", () => {
  const blogs = ref([
    {
      img: "/src/assets/daniel.jpg",
      title: "KCAA APPROVED TRAINING ORGANISATIONS IN KENYA.",
      date: "December 14 2023",
      comments: 45,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ab harum," +
        "doloribus id excepturi sapiente, eligendi ducimus nostrum ipsa hic"
    },
    {
      img: "/src/assets/daniel.jpg",
      title: "KCAA APPROVED TRAINING ORGANISATIONS IN KENYA.",
      date: "December 14 2023",
      comments: 45,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ab harum," +
        "doloribus id excepturi sapiente, eligendi ducimus nostrum ipsa hic"
    },
    {
      img: "/src/assets/daniel.jpg",
      title: "KCAA APPROVED TRAINING ORGANISATIONS IN KENYA.",
      date: "December 14 2023",
      comments: 45,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ab harum," +
        "doloribus id excepturi sapiente, eligendi ducimus nostrum ipsa hic"
    },
    {
      img: "/src/assets/daniel.jpg",
      title: "KCAA APPROVED TRAINING ORGANISATIONS IN KENYA.",
      date: "December 14 2023",
      comments: 45,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ab harum," +
        "doloribus id excepturi sapiente, eligendi ducimus nostrum ipsa hic"
    }
  ]);

  return { blogs };
});
