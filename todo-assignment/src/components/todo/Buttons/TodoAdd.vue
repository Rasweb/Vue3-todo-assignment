<template>
  <div class="addCont">
    <input type="text" placeholder="Title" v-model="itemTitle" />
    <input type="number" placeholder="id" v-model="itemId" />
    <button
      @click="
        () => {
          addTodo();
        }
      "
    >
      Add
    </button>
  </div>
</template>

<script>
import { Todo } from "@/models/Todo";
import { Vue } from "vue-class-component";

export default class TodoAdd extends Vue {
  itemTitle = "";
  itemId = 0;

  addTodo() {
    this.$emit("todoAdd", new Todo(this.itemTitle, this.itemId));

    this.itemTitle = "";
    this.itemId = 0;
  }
}
</script>

<style lang="scss">
@import "/src/sass/mixins.scss";

.addCont {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid lightgrey;
  input {
    margin: 4px;
    font-size: 16px;
    width: 50%;
    height: 10%;
  }
  button {
    @include buttonDesign();
  }
}
</style>
