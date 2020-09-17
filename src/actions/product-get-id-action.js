import {PRODUCTS_GET_ID} from './type';

export const productGetId = (id) => {
	return dispatch => {
		dispatch({type: PRODUCTS_GET_ID, data: id})
	}
}