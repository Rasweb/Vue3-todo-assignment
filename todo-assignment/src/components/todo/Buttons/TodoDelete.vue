<template>
  <div>
    <button
      @click="
        () => {
          deleteTodo();
        }
      "
    >
      Remove
    </button>
  </div>
</template>

<script>
import { Vue } from "vue-class-component";

export default class TodoDelete extends Vue {
  deleteTodo() {
    this.$emit("todoDelete");
  }
}
</script>

<style></style>
