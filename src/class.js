export class Todo {
    todoname;
    tododone;
    constructor(todoname,tododone = true) {
      this.todoname = todoname;
      this.tododone = tododone;
    }
  }