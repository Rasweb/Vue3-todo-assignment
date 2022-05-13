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
@import "/src/sass/variables.scss";

.addCont {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5%;
  @include ipad() {
    margin: 4%;
  }
  @include desktop() {
    margin: 2%;
  }
  input {
    margin: 4px;
    font-size: 16px;
    height: 10%;
    padding: 8px 20px;
    @include desktop() {
      padding: 10px 35px;
      font-size: 18px;
    }
  }
  button {
    @include buttonDesign();
    @include desktop() {
      padding: 10px 4%;
    }
  }
}
</style>
