import React from 'react'
import '../App/App.scss';
import { BrowserRouter, Route, Switch} from "react-router-dom"



import HomePage from './HomePage/HomePage'
import ProjectsPage from '../ProjectsPage/ProjectsPage'
import ProjectPage from '../ProjectPage/ProjectPage'
import PageNotFound from './PageNotFound/PageNotFound'


import { DEFAULT_THEME, ThemeContext } from "./ThemeContext"

import projects from '../ProjectsData/projectsData'
import normalizeState from '../ProjectsData/stateNormalizer'


const {projectsById, tasksById} = normalizeState(projects)

class App extends React.Component {
  state = {
    theme: DEFAULT_THEME,
    themeTurnedToDark: false,
    projectsById, 
    tasksById
  };

  changeTaskStatusHandler = (taskId) => {
    const taskToChange = this.state.tasksById[taskId]
    const taskToChange_updatedStatus = { ...taskToChange, completed: !taskToChange.completed }

    this.setState( (currentState) => ({
        tasksById: {
          ...currentState.tasksById, 
          [taskId]: taskToChange_updatedStatus
        }
    }))
  }

  taskAddHandler = (projectId, taskName, taskDescription) => {
    taskName&&taskDescription 
    ? this.setState( (currentState) => {
      const projectTasksIdsList = [...currentState.projectsById[projectId].tasksIds]
      const tasksList = {...currentState.tasksById};
      
      function getLastId(tasks) {
        let lastId = 0
        for (let task in tasks) {
          if (lastId <= task) {
            lastId++
          } else {return lastId}
        }
        return lastId
      }

      const lastTask_id = getLastId(tasksList)
      const newTask_id = lastTask_id+1
      const projectNewTask_id = getLastId(projectTasksIdsList)

      projectTasksIdsList[projectNewTask_id] = newTask_id

      tasksList[newTask_id] = {
        id: newTask_id,
        name: taskName,
        description: taskDescription,
        completed: false
      }

      return {
        projectsById: {
          ...currentState.projectsById,
          [projectId]: { ...currentState.projectsById[projectId], 
              tasksIds: projectTasksIdsList
          }
        },
        tasksById: tasksList
      }
      
    } )
    : alert('Enter NEW TASK name and description')
  }

  themeChangeHandler = (event) => {
    const themeMode = event.target.checked ? 'dark' : 'light'
    this.setState( {theme: themeMode, themeTurnedToDark: !this.state.themeTurnedToDark} )
  }

  onProjectAddHandler = (projectName, projectDescription) => {
    function setNewProjectId(projects) {
      let lastId = 0
      for (let projectId in projects) {
        if (lastId <= projectId) {
          lastId++
        } else {return ++lastId}
      }
      return ++lastId
    }

    projectName&&projectDescription 
    ? this.setState( (currentState) => {
        const newProjectsList = {...currentState.projectsById}
        const projectToBeAddedID = setNewProjectId(newProjectsList)
        newProjectsList[projectToBeAddedID] = {
          id: projectToBeAddedID,
          name: projectName,
          description: projectDescription,
          tasksIds: []
        }
        return {
          projectsById: newProjectsList
        }
    })
    : alert('Enter PROJECT name and description!') 
  }

  render() {
    return (
      <BrowserRouter>
        <ThemeContext.Provider value={this.state.theme}>
          <Switch>
            <Route exact path='/'>
              <HomePage 
                themeChangeHandler={this.themeChangeHandler}
                themeTurnedToDark={this.state.themeTurnedToDark}
              />
            </Route>
            <Route exact path='/projects'>
                <ProjectsPage 
                  projectsById={this.state.projectsById} 
                  tasksById={this.state.tasksById}
                  themeChangeHandler={this.themeChangeHandler}
                  onProjectAddHandler={this.onProjectAddHandler}
                  themeTurnedToDark={this.state.themeTurnedToDark}
                />
            </Route>
            <Route exact path='/projects/:projectId'>
                <ProjectPage
                  projectsById={this.state.projectsById} 
                  tasksById={this.state.tasksById}
                  taskAddHandler={this.taskAddHandler}
                  changeTaskStatusHandler={this.changeTaskStatusHandler}
                  themeChangeHandler={this.themeChangeHandler}
                  themeTurnedToDark={this.state.themeTurnedToDark}
                />
            </Route>
            <Route>
              <PageNotFound 
                themeChangeHandler={this.themeChangeHandler}
                themeTurnedToDark={this.state.themeTurnedToDark}
              />
            </Route>
            <Route exact path='/404'>
              <PageNotFound 
                themeChangeHandler={this.themeChangeHandler}
                themeTurnedToDark={this.state.themeTurnedToDark}
              />
            </Route>
          </Switch>
        </ThemeContext.Provider>
      </BrowserRouter>
    )
  }
}

export default App;
