<template>
  <div>
    <h1>To do list assignment</h1>
    <div><TodoList /></div>
    <footer>Created by Rasmus</footer>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TodoList from "./components/TodoList.vue";

@Options({
  components: {
    TodoList,
  },
})
export default class App extends Vue {}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #2c3e50;
  color: rgba(255, 255, 255, 0.827);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}
</style>
