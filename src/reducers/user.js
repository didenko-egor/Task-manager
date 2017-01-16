import {GET_USER_ID, GET_USER_DATA } from '../constants/User';
import {allUser} from '../init/initUser'

const initialState = {
	allUser: allUser
}

export default function user(state = initialState, action) {
	switch(action.type) {
		case GET_USER_ID:
			return{...state, id: action.payload}
		case GET_USER_DATA:
			return{...state, selectedUser: action.payload}
	default:
		return state;
	}
}
