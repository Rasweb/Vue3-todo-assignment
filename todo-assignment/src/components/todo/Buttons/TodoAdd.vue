<template>
  <div>
    <input type="text" placeholder="Title" v-model="itemTitle" />
    <input type="number" placeholder="id" v-model="itemId" />
    <button
      @click="
        () => {
          addTodo();
        }
      "
    >
      Add
    </button>
  </div>
</template>

<script>
import { Todo } from "@/models/Todo";
import { Vue } from "vue-class-component";

export default class TodoAdd extends Vue {
  itemTitle = "";
  itemId = 0;

  addTodo() {
    this.$emit("todoAdd", new Todo(this.itemTitle, this.itemId));

    this.itemTitle = "";
    this.itemId = 0;
  }
}
</script>

<style></style>
