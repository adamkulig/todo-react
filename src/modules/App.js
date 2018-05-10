import React, { Component } from 'react';
import './App.scss';
import { Header } from './Header/Header.js'; 
import { TodoList } from './TodoList/TodoList.js';
import { Footer } from './Footer/Footer.js'; 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextId: 1,
      lists: [
        {
          description: 'To do',
          todos: []
        },
        {
          description: 'Done',
          todos: []
        }
      ]
    }
  }
  
  addTodoHandler = (todo) => {
    const newTodo = {
      id: this.state.nextId,
      text: todo.todoContent
    }
    
    const status = todo.todoStatus;
    
    this.setState({
      nextId: this.state.nextId + 1,
      lists: this.state.lists.map(list => {
        if(list.description === status) {
          return {
             ...list,
             todos: [ ...list.todos, newTodo ]
          }
        }
        return list;
      })
    });
  }
  
  removeTodo = (id) => {
    this.setState({
      lists: this.state.lists.map(list => {
        return {
          ...list,
          todos: list.todos.filter(todo => todo.id !== id)
        }
      })
    });
  }
  
  progressMove = (id, text, listIndex) => {
    const todoCopy = {
      id,
      text
    }

    this.setState({
      lists: [
        {
          description: this.state.lists[listIndex].description,
          todos: [...this.state.lists[listIndex].todos.filter(todo => todo.id !== id)]
        },
        {
          description: this.state.lists[listIndex+1].description,
          todos: [ ...this.state.lists[listIndex+1].todos, todoCopy ]
        }
      ]
    })
  }

  regressMove = (id, text, listIndex) => {
    const todoCopy = {
      id,
      text
    }

    this.setState({
      lists: [
        {
          description: this.state.lists[listIndex-1].description,
          todos: [ ...this.state.lists[listIndex-1].todos, todoCopy ]
        },
        {
          description: this.state.lists[listIndex].description,
          todos: [...this.state.lists[listIndex].todos.filter(todo => todo.id !== id)]
        },
      ]
    })
  }
  
  modifyTodo = (id, newText) => {
    const modifiedTodo = {
      id,
      text: newText
    }
    this.setState({
      lists: this.state.lists.map(list => {
        const todoIndex = list.todos.findIndex(todo => todo.id === id)
        if (todoIndex>=0){
          return {
            ...list,
            todos: [...list.todos.slice(0,todoIndex), modifiedTodo, ...list.todos.slice(todoIndex+1)]
          }
        } else {
          return list;
        }
      })
    });
  }
  
  isFirstList = (index) => index === 0;

  isLastList = (index, length) => index === length - 1;

  render() {
    return (
      <div className="App">
        <Header />
        <div className="content">
          {
            this.state.lists.map((list, index, array) => (
            <TodoList
              key={index}
              index={index}
              isFirstList={this.isFirstList(index)}
              isLastList={this.isLastList(index, array.length)}
              list={list.description}
              addTodo={this.addTodoHandler}
              progressMove={this.progressMove}
              regressMove={this.regressMove}
              removeTodo={this.removeTodo}
              modifyTodo={this.modifyTodo}
              todos={list.todos}/>
            ))
          }
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
