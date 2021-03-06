import React from 'react'


import ProjectHeader from './ProjectHeader/ProjectHeader'
import {TaskList} from './TaskList/TaskList'
import {TaskAdd} from './TaskAdd/TaskAdd';


import classes from './ProjectContent.module.scss'
import classnames from "classnames/bind"
const cx = classnames.bind(classes)

class ProjectContent extends React.Component {
  render() {
    const tasks = this.props.tasks
    const projectId = this.props.projectId
    const projectName = this.props.projectName
    
    return (
      <> 
        <ProjectHeader 
          projectName={projectName}
          numberOfTasks={tasks?.length}
        />
        <div className={cx('tasks-wrapper__layout')}>
          <TaskAdd
              projectId={projectId}
          />
          <TaskList
              projectId={projectId}
          />
        </div>
      </>
    )    
  }
}

export default ProjectContent
