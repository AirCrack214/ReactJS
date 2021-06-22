import React from 'react'
import {connect} from 'react-redux'


import {TaskInput} from './TaskInput/TaskInput'


import './TaskAdd.module.scss';
import classes from '../TaskList/Task/Task.module.scss'
import classnames from "classnames/bind"
const cx = classnames.bind(classes)

const mapStateToProps = (state) => ({theme: state.themeState.theme})

const TaskAddComponent = ({theme, projectId}) => {
    return (
        <div className={cx("task", `task-theme-${theme}`)}>
            <h2>Create new task</h2>
            <TaskInput
                projectId={projectId}
            />
        </div>
    )
  }

export const TaskAdd = connect(mapStateToProps)(TaskAddComponent)