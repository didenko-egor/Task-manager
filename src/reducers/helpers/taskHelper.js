import * as uid from 'uuid';

const randomId = () => uid.v4();

/**
 * Заполение полей задачи
 */
export function editFieldTask(state, payload) { debugger;
    const {name, value, typeActionTask} = payload;
    return{...state,[typeActionTask]:{ ...state [typeActionTask],[name]:value} }
}


export function createTask(state) {debugger;
    const createTask = {
        titleTask: '',
        descriptionTask: '',
        id: randomId()
    }
    return {...state, createTask : createTask, openDialog: true}
}

export function saveNewTask(state) {//debugger;
    const {createTask, tasks }=state;
    tasks.push(createTask);
    return {...state,
            tasks : tasks,
            createTask: {},
            openDialog: false
 }
}