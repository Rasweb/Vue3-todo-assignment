<template>
  <li class="oneTodoCont" :class="[{ done: todos.done }]">
    <h2>{{ todos.title }}</h2>
    <p>Todo nr: {{ todos.id }}</p>
    <p>Done: {{ todos.done }}</p>
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
@import "/src/sass/variables.scss";

.done {
  text-decoration: line-through;
  color: black;
}

.oneTodoCont {
  list-style: none;
  border-bottom: 1px solid lightgrey;
  margin: 5%;
  @include ipad() {
    margin: 4%;
  }

  p {
    font-size: $desktop-font;
  }
  button {
    @include buttonDesign;
  }
}
</style>
