import React from 'react';
import { IoIosCheckmarkEmpty} from 'react-icons/lib/io'
import '../TodoAll.scss';
import { Button } from '../../Button/Button.js'

export const EditTodoItem = (props) => {
  return (
    <div className="list__form">
      <input
        type="text"
        className="list__form__input"
        onChange={props.onChange}
        value={props.value}
      />
      <Button
        type="ok"
        icon={<IoIosCheckmarkEmpty />} 
        onClick={props.onClick}
      />
    </div>
  )
}