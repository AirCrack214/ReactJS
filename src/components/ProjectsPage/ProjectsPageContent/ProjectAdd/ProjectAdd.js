import React from 'react'
import { connect } from 'react-redux'


import {ProjectInput} from './ProjectInput/ProjectInput'


import './ProjectAdd.module.scss';
import classes from '../ProjectsList/ProjectPreview/ProjectPreview.module.scss'
import classnames from "classnames/bind"
const cx = classnames.bind(classes)

const mapStateToProps = (state) => ({theme: state.themeState.theme})

const ProjectAddComponent = ({theme}) => {
    return(
        <div className={cx("project-add", "project", `project-theme-${theme}`)}>
            <h2>Create new project</h2>
            <ProjectInput/>
        </div>
    )
}

export const ProjectAdd = connect(mapStateToProps)(ProjectAddComponent)
