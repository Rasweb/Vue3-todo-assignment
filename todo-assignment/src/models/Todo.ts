export class Todo {
  done: boolean;
  constructor(public title: string, public id: number) {
    this.done = false;
  }
}
