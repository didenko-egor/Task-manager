import * as types from '../constants/taskActionType';


export function editFieldTask(payload){
    return{
        type: types.EDIT_TASK_FIELD,
        payload: payload
    }
}

export function createTask() {
    return {
        type: types.CREATE_TASK
    }
}

export function openDialog() {
    return {
        type: types.OPEN_DIALOG
    }
}

export function closeDialog() {
    return {
        type: types.CLOSE_DIALOG
    }
}

export function saveNewTask() {
    return {
        type: types.SAVE_NEW_TASK
    }
}