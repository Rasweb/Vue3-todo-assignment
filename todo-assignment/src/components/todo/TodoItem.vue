<template>
  <div>
    <li>
      <h2>{{ todos.title }}</h2>
      <p>{{ todos.id }}</p>
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
  components: {},
})
export default class TodoItem extends Vue {
  todos!: Todo;

  mounted() {
    console.log(this.todos);
  }
}
</script>

<style></style>
