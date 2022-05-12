<template>
  <li class="oneTodoCont">
    <h2>{{ todos.title }}</h2>
    <p>{{ todos.id }}</p>
    <p>{{ todos.done }}</p>
    <TodoDelete @todoDelete="handleDelete()" />
    <button @click="todoDone">Done</button>
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

<style lang="scss" scoped>
@import "/src/sass/mixins.scss";
.oneTodoCont {
  list-style: none;
  border-top: 1px solid lightgrey;
  margin: 5%;

  button {
    @include buttonDesign;
  }
}
</style>
