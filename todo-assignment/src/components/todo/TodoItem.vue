<template>
  <li>
    <h2>{{ todos.title }}</h2>
    <p>{{ todos.id }}</p>
    <TodoDelete />
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
}
</script>

<style></style>
