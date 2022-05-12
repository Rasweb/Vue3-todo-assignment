<template>
  <div>
    <button
      @click="
        () => {
          doneTodo();
        }
      "
    >
      Done
    </button>
  </div>
</template>

<script>
import { Vue } from "vue-class-component";
export default class TodoDone extends Vue {
  doneTodo() {
    this.$emit("todoDone");
  }
}
</script>

<style></style>
