import {PRODUCTS_GET_ID} from '../actions/type';

export default (state={},action) => {
	switch(action.type) {
		case PRODUCTS_GET_ID:
			return action.data;
		default :
			return state;
	}
}