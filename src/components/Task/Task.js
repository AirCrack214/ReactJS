import React from 'react'
import classes from './Task.module.css'

import Button from '../Button/Button'

const Task = ({ id, name, desc, status, onClick }) => {
    const cls = [classes.task]
    status ? cls.push(classes.completed) : cls.push(classes.incompleted)

    return (
      <div id={id} className={cls.join(' ')}>
          <h2>{name}</h2>
          <p>{desc}</p>
          { status ? <Button btnName='Не готово' onClick={() => onClick(id)}/> : <Button btnName='Готово' onClick={() => onClick(id)}/> }
      </div>
    )
  }

export default Task