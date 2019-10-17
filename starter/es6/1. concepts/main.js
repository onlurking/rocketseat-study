class List {
  constructor() {
    this.data = []
  }

  add(todo) {
    this.data.push(todo)
    console.log(this.data)
  }
}

class TodoList extends List {
}

const App = new TodoList()

document.getElementById('newtodo').onclick = function() {
  App.add('novo tod')
}