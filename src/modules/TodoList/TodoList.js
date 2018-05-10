import React, { Component } from 'react';
import './TodoAll.scss';
import { TodoForm } from './TodoForm/TodoForm.js'
import { TodoItem } from './TodoItem/TodoItem.js'

export class TodoList extends Component {
  render() {
    const {list, addTodo, todos, index, progressMove, regressMove, removeTodo, modifyTodo } = this.props
    return (
      <div className="list">
        <span className="list__title">{list}</span>
        <TodoForm 
          placeholder='Write here...'
          todoStatus={list}
          addTodo={addTodo}/>
        {todos.map(todo => (
          <TodoItem 
            key={todo.id}
            todo={todo}
            progressArrow={!this.props.isLastList}
            regressArrow={!this.props.isFirstList}
            progressMove={() => progressMove(todo.id, todo.text, index)}
            regressMove={() => regressMove(todo.id, todo.text, index)}
            removeTodo={() => removeTodo(todo.id)}
            modifyTodo={modifyTodo}/>
        ))} 
      </div>
    );
  }
}

