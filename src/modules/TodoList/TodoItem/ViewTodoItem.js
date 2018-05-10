import React from 'react';
import { IoIosMinusEmpty, IoIosArrowThinRight, IoIosArrowThinLeft } from 'react-icons/lib/io'
import '../TodoAll.scss';
import { Button } from '../../Button/Button.js'

export const ViewTodoItem = (props) => {
  return (
    <div className="list__item">
      <span 
        className="list__item__text" 
        onClick={props.openModifyTodo}>
        {props.text}
      </span>
        {
          props.progressArrow && <Button
          type="arrow"
          icon={<IoIosArrowThinRight />}
          onClick={props.progressMove}/>
        }
        {
          props.regressArrow && <Button
          type="arrow"
          icon={<IoIosArrowThinLeft />}
          onClick={props.regressMove}/>
        }
      <Button 
        type="delete"
        icon={<IoIosMinusEmpty />}
        onClick={props.removeTodo}/>
    </div>
  )
}