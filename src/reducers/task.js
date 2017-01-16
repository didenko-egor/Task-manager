import * as helpers from './helpers/taskHelper';
import * as actionTypes from '../constants/taskActionType';
import { tasks }              from '../init/tasks';

//import * as uid               from 'uuid';
//
//const  randomId = () => uid.v4();

const initialState = {
    fetching: false,
    tasks: tasks,
    createTask : {},
    //openDialog: false
    //editedTask : false,
    //startEditedTask: false,
    //neededCreateNewTask: false
};

function getInit (initialState) {
    return initialState;
}

export default function task(state = getInit(initialState), action) {
    const {payload, type} = action;
    switch(type) {

        case actionTypes.EDIT_TASK_FIELD:
            return helpers.editFieldTask(state, payload);

        case actionTypes.CREATE_TASK:
            return helpers.createTask(state, payload);

        case actionTypes.OPEN_DIALOG:
            return{...state, openDialog: true};

        case actionTypes.CLOSE_DIALOG:
            return{...state, openDialog: false};

        case actionTypes.SAVE_NEW_TASK:
            return helpers.saveNewTask(state, payload);


        default:
            return state;
    }
}
