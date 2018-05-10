import React from 'react';
import { EditTodoItem} from './EditTodoItem';
import { ViewTodoItem} from './ViewTodoItem';
import '../TodoAll.scss';

export class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      currentId: this.props.todo.id,
      currentText: this.props.todo.text
    }
  }
  
  openModifyTodo = () => {
    this.setState({
      editing: true,
    });
  }
  
  modifyTodoHandler = (event) => {
    const writtenText = event.target.value;
    this.setState({
      currentText: writtenText,
    });
    }
  
  confirmModifyTodoHandler = () => {
    const {currentId, currentText} = this.state;
    if (this.state.currentText.length > 0){
      this.props.modifyTodo(currentId, currentText);
      this.closeModifyTodo();
    }
  }
  
  closeModifyTodo = () => {
    this.setState({
      editing: false,
    })
  }
  
 render() {
    const isEdit = this.state.editing;
    const { todo, progressArrow, regressArrow, progressMove, regressMove, removeTodo } = this.props;
    return (
      <div>
        {
          isEdit 
          ? <EditTodoItem 
            onChange={this.modifyTodoHandler}
            value={this.state.currentText}
            onClick={this.confirmModifyTodoHandler}/> 
          : <ViewTodoItem
            text={todo.text}
            openModifyTodo={this.openModifyTodo}
            progressArrow={progressArrow}
            regressArrow={regressArrow}
            progressMove={progressMove}
            regressMove={regressMove}
            removeTodo={removeTodo}
          />
        }
      </div>
    )
  }
}
