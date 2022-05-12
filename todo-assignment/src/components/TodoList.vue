<template>
  <div>
    <h2>To Do</h2>
    <TodoItem
      @todoDelete="handleRem($event)"
      v-for="todo in todos"
      :todos="todo"
      :key="todo.id"
      :title="todo.title"
    />
    <div>
      <TodoAdd @todoAdd="handleAdd($event)" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Todo } from "@/models/Todo";
import TodoItem from "./todo/TodoItem.vue";
import TodoAdd from "./todo/Buttons/TodoAdd.vue";

@Options({
  props: {},
  components: {
    TodoItem,
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

  handleRem(todoItem: Todo) {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].id === todoItem.id) {
        this.todos.splice(i, 1);
      }
    }
  }

  // handleRem(index: number) {
  //   this.todos.splice(index, 1);
  //   //this.todos.splice(this.todos.indexOf(t), 1);
  // }
}
</script>

<style lang="scss" scoped></style>
