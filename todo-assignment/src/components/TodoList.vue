<template>
  <div>
    <h2>To Do</h2>
    <TodoItem v-for="todo in todos" :key="todo.id" :todos="todo" />
    <div>
      <TodoDelete @todoDelete="handleDelete($event)" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Todo } from "@/models/Todo";
import TodoItem from "./todo/TodoItem.vue";
import TodoDelete from "./todo/Buttons/TodoDelete.vue";

@Options({
  props: {},
  components: {
    TodoItem,
    TodoDelete,
  },
})
export default class TodoList extends Vue {
  todos: Todo[] = [
    new Todo("Prepare breakfast", 1),
    new Todo("Eat breakfast", 2),
    new Todo("Brush teeth", 3),
  ];

  handleDelete(index: number) {
    this.todos.splice(index, 1);
  }

  // mounted() {
  // }
}
</script>

<style lang="scss" scoped></style>
