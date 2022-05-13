<template>
  <div class="listCont">
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
      <button @click="todoSort">Sort by title</button>
      <button @click="todoUnsort">unsort</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Todo } from "@/models/Todo";
import TodoItem from "./todo/TodoItem.vue";
import TodoAdd from "./todo/Buttons/TodoAdd.vue";

@Options({
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

  todoSort() {
    let oldSort = this.todos;
    let newSort = oldSort.sort((a, b) => (a.title > b.title ? 1 : -1));
    console.log("New: ", newSort);
  }

  todoUnsort() {
    let oldSort = this.todos;
    let newSort = oldSort.sort((a, b) => (b.title > a.title ? 1 : -1));
    console.log("New: ", newSort);
  }

  handleAdd(t: Todo) {
    this.todos.push(t);
  }

  handleRem(t: Todo) {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].id === t.id) {
        this.todos.splice(i, 1);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.listCont {
  h2 {
    border-bottom: 1px solid lightgrey;
  }
}
</style>
