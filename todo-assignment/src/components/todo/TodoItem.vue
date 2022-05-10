<template>
  <div>
    <li v-for="todo in todos" :key="todo.id">
      <h2>{{ todo.title }}</h2>
      <p>{{ todo.id }}</p>
    </li>
  </div>
</template>

<script lang="ts">
import { Todo } from "@/models/Todo";
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    todos: Todo,
  },
})
export default class TodoItem extends Vue {
  todos!: Todo;

  mounted() {
    console.log(this.todos);
  }
}
</script>

<style></style>
