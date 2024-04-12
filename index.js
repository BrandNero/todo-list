/* eslint-disable func-style */
// Arrays to keep track of each task's state


// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    logState() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    completeTask() {
      this.complete = true;
    }
  };
  return task;
}


// DRIVER CODE BELOW
const task1 = newTask("Clean Cat Litter", "take all the poopoo out of the litter box");
const task2 = newTask("do the Laundry", "😥");
const tasks = [task1, task2];

task1.logState(); // Clean Cat Litter has not been completed
task1.completeTask();
task1.logState(); // Clean Cat Litter has been completed
