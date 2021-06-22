import './App.css';
import React from 'react';

const Task = ({id, name,  desc, status}) => {
  const handleClick = () => {
    console.log(`Task ${id} status ${status}`)
  }

  return (
    <div className='task'>
      <h2>{name}</h2>
      <div>{desc}</div>
      <div>{status}</div>
      <button onClick={handleClick} className='button'>
        <h3>State</h3>
      </button>
    </div>
  )
}

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

  render () {
    return(
      <div>
        <header><h1>Список дел</h1></header>
        <div>
          {this.state.tasks.map(task =>
            <Task id={task.id} name={task.name} desc={task.desc} status={task.status}/>
          )}
        </div>
      </div>
      )
  }
}

export default App;