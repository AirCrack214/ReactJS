export const ADD_TASK = 'ADD_TASK' 
export const CHANGE_TASK_STATUS = 'CHANGE_TASK_STATUS' 

export const handleTaskAdd = (projectId, taskId, taskName, taskDescription) => ({
    type: ADD_TASK,
    projectId: projectId,
    taskId: taskId,
    taskName: taskName,
    taskDescription: taskDescription
})

export const handleTaskStatusChange = (id, status) => ({
    type: CHANGE_TASK_STATUS,
    id: id,
    status: status
})