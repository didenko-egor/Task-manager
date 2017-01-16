import {GET_PHOTOS_REQUEST,
		GET_PHOTOS_SUCCESS
} from '../constants/Page';

export function getPhotos(year) {
	return (dispatch) => {
		dispatch(
			getPhotosRequst(year) )
		setTimeout(() => {
			dispatch(
				getPhotosSuccess() )
		}, 1000)
	}
}

function getPhotosRequst(year) {
	return{
		type: GET_PHOTOS_REQUEST,
		payload: year
	}
}
function getPhotosSuccess() {
	return {
		type:GET_PHOTOS_SUCCESS,
		payload: [1,2,3,4,5]
	}
}