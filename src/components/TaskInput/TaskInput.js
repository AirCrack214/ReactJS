import React from 'react'

import TextInput from './TextInput/TextInput'
import Button from '../Button/Button'

class TaskInput extends React.Component {
    state = {
      taskName: '',
      taskDescription: '',
    }
  
    handleChange = (event) => {
      const { value, name } = event.currentTarget
      this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
      event.preventDefault()
      return this.props.onSubmitHandler(this.state.taskName, this.state.taskDescription)
    }
  
    render() {
  
      return (
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <TextInput 
                name="taskName" 
                placeholder='Введите название задачи'
                size=''
                isRequired='true'
                value={this.state.name} 
                onChange={this.handleChange} 
            />
            <TextInput 
                name='taskDescription'
                placeholder='Введите описание задачи'
                size=''
                isRequired='true'
                value={this.state.desc} 
                onChange={this.handleChange} 
            />
            <Button 
                btnName={'Создать'}
                type={'submit'}
            />
          </fieldset>
        </form>
      )
    }
  }
  
  
  export default TaskInput