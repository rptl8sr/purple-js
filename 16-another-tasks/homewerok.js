const ToDoList = {
  tasks: [
    {
      title: 'Wash the dishes',
      id: 1,
      priority: 1,
    },
  ],
  addTask: function(task) {
    this.tasks.push(task);
  },
  deleteTask: function(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  },
  updateTask: function(id, patch) {
    this.tasks = this.tasks.map(task => task.id === id ? { ...task, ...patch } : task);
  },
  sortByPriority: function() {
    this.tasks.sort((a, b) => a.priority - b.priority);
  },
};


ToDoList.addTask({
  title: 'Dirty the dishes',
  id: 2,
  priority: 3,
});

ToDoList.addTask({
  title: 'Buy the dishes',
  id: 3,
  priority: 2,
});

ToDoList.deleteTask(2);

ToDoList.updateTask(1, {priority: 5});
ToDoList.updateTask(1, {title: 'Clean the dishes'});

ToDoList.sortByPriority();


console.log(ToDoList.tasks);


const newTask = {
  tasks: [
    {
      title: 'ready',
      id: 10,
      priority: 101,
      decription: 'wait for a while',
    }
  ],
};

const newAddTask = ToDoList.addTask.bind(newTask);
const newDeleteTask = ToDoList.deleteTask.bind(newTask);
const newUpdateTask = ToDoList.updateTask.bind(newTask);
const newSortByPriority = ToDoList.sortByPriority.bind(newTask);

newAddTask({
  title: 'steady',
  id: 20,
  priority: 102,
  decription: 'nearly',
});

newAddTask({
  title: 'go',
  id: 30,
  priority: 103,
  decription: 'run',
});

newDeleteTask(10);

newUpdateTask(20, {priority: 120});
newUpdateTask(30, {title: 'finish'});

newSortByPriority();

console.log(newTask.tasks);