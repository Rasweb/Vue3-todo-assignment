<template>
  <div>
    <TodoItem :todos="todos" />
    <div></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Todo } from "@/models/Todo";
import TodoItem from "./todo/TodoItem.vue";

@Options({
  props: {},
  components: {
    TodoItem,
  },
})
export default class TodoList extends Vue {
  todos: Todo[] = [
    new Todo("Prepare breakfast", 1),
    new Todo("Eat breakfast", 2),
    new Todo("Brush teeth", 3),
  ];
  // mounted() {
  // }
}
</script>

<style lang="scss" scoped></style>
