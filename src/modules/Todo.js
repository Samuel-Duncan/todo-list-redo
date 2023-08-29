// Generate todo constructor class
// - properties: title, dueDate
// - methods: get/set todos, get/set dueDate, format dueDate, toggle complete
import format from 'date-fns/format';

export default class Todo {
  constructor(title, dueDate, isComplete = false) {
    this.title = title;
    this.dueDate = dueDate;
    this.isComplete = isComplete;
  }

  getTitle() {
    return this.title;
  }

  setTitle(title) {
    this.title = title;
  }

  getDueDate() {
    return this.dueDate;
  }

  setDueDate() {
    this.dueDate = this.getDateFormatted();
  }

  getDateFormatted() {
    return format(new Date(this.dueDate, 'MM/dd/yyy'));
  }

  toggleComplete() {
    this.isComplete = !this.isComplete;
  }
}
