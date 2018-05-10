import React, { Component } from 'react';
import '../TodoAll.scss';
import { Button } from '../../Button/Button.js'
import { IoIosPlusEmpty } from 'react-icons/lib/io';

export class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoContent: '',
      todoStatus: ''
    } 
  }
  
  textHandler = (event) => {
    const writtenText = event.target.value;
    this.setState({
      todoContent: writtenText,
      todoStatus: this.props.todoStatus
    });
  }
  
  confirmTodoHandler = () => {
    if (this.state.todoContent.length > 0){
      this.props.addTodo(this.state);
      this.clearTodoState();
    } 
  }
  
  clearTodoState = () => {
    this.setState ({
      todoContent: '',
    })
  }
  
  render() {
    return (
      <div className="list__form list__form--main">
        <input
          type="text"
          className="list__form__input"
          value={this.state.todoContent}
          placeholder={this.props.placeholder}
          onChange={this.textHandler} />
        <Button
          icon={<IoIosPlusEmpty />}
          type="add"
          onClick={this.confirmTodoHandler}/>
      </div>
    );
  }
}
