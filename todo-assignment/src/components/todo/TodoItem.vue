<template>
  <li>
    <h2>{{ todos.title }}</h2>
    <p>{{ todos.id }}</p>

    <TodoDelete @todoDelete="handleDelete($event)" />
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

  mounted() {
    for (let i = 0; i < this.todos.length; i++) {
      console.log(i, this.todos.length);
    }
    //console.log(this.todos);
    // console.log(this.todos.id, this.todos.index);
  }

  handleDelete(t: Todo) {
    this.todos.splice(this.todos.indexOf(t), 1);

    //this.todos.splice(index, 1);
    // this.todos = this.todos.filter((e: Todo) => e.id !== id);
    // for (let i = 0; i < todo.length; i++) {}
    //this.todos.splice(event, 1);
    // todo.splice(index, 1);
  }
}
</script>

<style></style>
