<template>
  <li>
    <h2>{{ todos.title }}</h2>
    <p>{{ todos.id }}</p>
    <p>{{ todos.done }}</p>
    <TodoDelete @todoDelete="handleDelete()" />
    <input type="checkbox" :checked="todos.done" @click="todoDone" />
  </li>
</template>

<script lang="ts">
import { Todo } from "@/models/Todo";
import { Options, Vue } from "vue-class-component";
import TodoDelete from "./Buttons/TodoDelete.vue";

@Options({
  props: {
    todos: Todo,
  },
  components: {
    TodoDelete,
  },
})
export default class TodoItem extends Vue {
  todos!: Todo;

  todoDone() {
    this.todos.done = !this.todos.done;
  }

  handleDelete() {
    this.$emit("todoDelete", this.todos);
  }
}
</script>

<style></style>
