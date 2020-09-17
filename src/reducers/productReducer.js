import { PRODUCT_FETCH, PRODUCTS_FETCH, PRODUCTS_CREATE, PRODUCTS_EDIT, PRODUCTS_CLEAR } from '../actions/type';

export default function(state={},action) {
	switch(action.type) {
		case PRODUCT_FETCH:
			return action.data;
		case PRODUCTS_FETCH: 
			return action.data;
		case PRODUCTS_CREATE:
			return {};
		case PRODUCTS_EDIT:
			return {};
		case PRODUCTS_CLEAR:
			return {};
		default:
			return state;
	}
}