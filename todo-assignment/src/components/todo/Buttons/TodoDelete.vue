<template>
  <div class="deleteCont">
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

<style lang="scss" scoped>
@import "/src/sass/mixins.scss";
@import "/src/sass/variables.scss";

.deleteCont {
  button {
    @include buttonDesign();
    padding: 8px 24px;
  }
}
</style>
