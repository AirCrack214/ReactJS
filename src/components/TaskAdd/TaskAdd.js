import React from 'react'


import TaskInput from '../TaskInput/TaskInput'


import { ThemeContext } from "../App/ThemeContext"


import './TaskAdd.module.scss';
import classes from '../Task/Task.module.scss'
import classnames from "classnames/bind"
const cx = classnames.bind(classes)

const TaskAdd = ({submitHandler}) => {
    return (
        <ThemeContext>
            {theme => (
                <div className={cx("task", `task-theme-${theme}`)}>
                    <h2>Create new task</h2>
                    <TaskInput
                        onSubmitHandler={submitHandler}
                    />
                </div>
            )}
        </ThemeContext>
    )
  }

export default TaskAdd