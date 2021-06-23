import React from 'react'


import ProjectInput from './ProjectInput/ProjectInput'


import { ThemeContext } from '../../../App/ThemeContext'


import './ProjectAdd.module.scss';
import classes from '../ProjectsList/ProjectPreview/ProjectPreview.module.scss'
import classnames from "classnames/bind"
const cx = classnames.bind(classes)


const ProjectAdd = ({onProjectAddHandler}) => {
    return(
        <ThemeContext.Consumer>
            {theme => {
                return (
                    <div className={cx("project-add", "project", `project-theme-${theme}`)}>
                        <h2>Create new project</h2>
                        <ProjectInput 
                            onProjectAddHandler={onProjectAddHandler}
                        />
                    </div>
                )
            }}
        </ThemeContext.Consumer>
    )
}

export default ProjectAdd