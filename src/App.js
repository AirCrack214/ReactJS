import './App.css';
import React from 'react';

import TaskList from './components/TaskList/TaskList'
import TaskAdd from './components/TaskAdd/TaskAdd';



const App = () => {
  return (
    <TodoList/>
  )
}

class TodoList extends React.Component {
  state = {
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
  }
  handleTaskStatus = (taskID) => {
    const taskToChange_id = this.state.tasks.findIndex((task) => task.id === taskID);
    this.setState((currentState) => {
      const newList = [...currentState.tasks]
      newList[taskToChange_id] = { ...newList[taskToChange_id], status: !currentState.tasks[taskToChange_id].status }
      return {
        tasks: newList
      }
    })
  }

  submitHandler = (name, value) => {
    name && value ? this.setState( (currentState) => { 
      const newList = [...currentState.tasks]
      const idsLen = newList.length
      newList[idsLen] = {
        id: idsLen + 1,
        name: name,
        desc: value,
        status: false
      } 

      return {
        tasks: newList
      }
    })
    : alert('Отсутствует ввод')
  }

  render() {
    const tasks = this.state.tasks 

    return (
      <>
        <TaskAdd submitHandler={this.submitHandler}/>
        <TaskList tasksList={tasks} onClick={this.handleTaskStatus}/>
      </>
    )    
  }
}

export default App;