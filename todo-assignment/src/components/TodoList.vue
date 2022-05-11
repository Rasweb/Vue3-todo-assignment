<template>
  <div>
    <h2>To Do</h2>
    <TodoItem
      v-for="todo in todos"
      :todos="todo"
      :key="todo.id"
      :title="todo.title"
    />
    <div>
      <!-- <TodoDelete @todoDelete="handleDelete($event)" /> -->
      <TodoAdd @todoAdd="handleAdd($event)" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Todo } from "@/models/Todo";
import TodoItem from "./todo/TodoItem.vue";
import TodoDelete from "./todo/Buttons/TodoDelete.vue";
import TodoAdd from "./todo/Buttons/TodoAdd.vue";

@Options({
  props: {},
  components: {
    TodoItem,
    TodoDelete,
    TodoAdd,
  },
})
export default class TodoList extends Vue {
  todos: Todo[] = [
    new Todo("Prepare breakfast", 1),
    new Todo("Eat breakfast", 2),
    new Todo("Brush teeth", 3),
  ];

  handleAdd(t: Todo) {
    this.todos.push(t);
  }

  // handleDelete(index: number) {
  //   this.todos.splice(index, 1);
  // }
}
</script>

<style lang="scss" scoped></style>
