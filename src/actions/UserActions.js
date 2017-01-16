import {
	GET_USER_ID,
	// GET_USER_DATA

} from '../constants/User';
// import {allUser} from '../init/initUser'

export function getUserId(id) {
		return{
		type: GET_USER_ID,
		payload: id
	}
}
// 	function getUserData() {
// 		return {
// 			type: GET_USER_DATA,
// 			payload: userSelected()
// 		}
// 	}

// export function selectedUser(ids){
// 	return (dispatch) => {
// 		dispatch(
// 			getUserId(ids) )
// 		dispatch (
// 			getUserData(userSelected) )
// 	}
// }

// function userSelected(ids) {
// 	const user = allUser.filter(el => {
// 		el.id == ids;
// 	})
// 	return user;
// }
