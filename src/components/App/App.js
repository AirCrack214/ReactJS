import React from 'react'
import '../App/App.scss';
import MyTodoList from '../MyTodoList/MyTodoList'
import Switch from '../UI/Switch/Switch'
import { DEFAULT_THEME, ThemeContext } from "./ThemeContext"

import classes from './App.scss'
import classnames from "classnames/bind"
const cx = classnames.bind(classes)

class App extends React.Component {
  state = {
    theme: DEFAULT_THEME,
    tasks: [
      {
        id: 1,
        name: 'Домашние задания',
        desc: 'Доделать все задания по учебе до дедлайнов',
        status: false,
      },
      {
        id: 2,
        name: 'Бот',
        desc: 'Закончить модуль создания аккаунтов в боте',
        status: false,
      },
      {
        id: 3,
        name: 'Магазин',
        desc: 'Зайти в магазин за продуктами',
        status: true,
      },
      {
        id: 4,
        name: 'Экзамен',
        desc: 'Сдать экзамен по стратегическому менеджменту',
        status: false,
      },
      {
        id: 5,
        name: 'Практика',
        desc: 'Подать заявление на практику',
        status: true,
      }
    ]
  };

  handleTaskStatus = (taskID) => {
    const taskToChange_id = this.state.tasks.findIndex((task) => task.id === taskID); 
    this.setState((currentState) => {
      const newTasksList = [...currentState.tasks]
      newTasksList[taskToChange_id] = { ...newTasksList[taskToChange_id], completed: !currentState.tasks[taskToChange_id].completed }
      return {
        tasks: newTasksList
      }
    })
  }

  submitHandler = (name, value) => {
    name&&value ? this.setState( (currentState) => {
      const newTasksList = [...currentState.tasks]
      const tasksLastID = newTasksList.length
      newTasksList[tasksLastID] = {
        id: tasksLastID+1,
        name: name,
        description: value,
        completed: false
      } 

      return {
        tasks: newTasksList
      }
    })
    : alert('Enter name and description!')
  }

  // Смена темы
  themeChangeHadnler = (event) => {
    const themeMode = event.target.checked ? 'dark' : 'light'
    this.setState( {theme: themeMode} )
  }

  render() {
    return (
      <section className={cx('application-wrapper', `application-wrapper-theme-${this.state.theme}`)}>
        <div className={cx('tasks-wrapper__layout')}>
          <ThemeContext.Provider value={this.state.theme}>
            <>
              <Switch
                  themeChangeHadnler={this.themeChangeHadnler}
              />
              <MyTodoList 
                  tasks={this.state.tasks}
                  submitHandler={this.submitHandler}
                  handleTaskStatus={this.handleTaskStatus}
              />
            </>
          </ThemeContext.Provider>
        </div>
      </section>
    )
  }
}

export default App;
