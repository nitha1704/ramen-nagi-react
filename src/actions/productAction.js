import axios from 'axios';
import {PRODUCT_FETCH, PRODUCTS_FETCH, PRODUCTS_CREATE, PRODUCTS_EDIT, PRODUCTS_CLEAR, PRODUCTS_GET_ID} from './type';


export const productFetch = (id) => {
	return dispatch => {
		axios.get('http://localhost:3001/product/' + id).then(res=>{
			dispatch({type: PRODUCT_FETCH, data: res.data});
		})
	}
}

export const productsFetch = () => {
	return dispatch => {
		axios.get('http://localhost:3001/product').then(res=>{
			dispatch({type: PRODUCTS_FETCH, data: res.data});
		})
	}
}

export const productDelete = (id) => {
	return dispatch => {
		axios.delete('http://localhost:3001/product/' + id).then(res => {
			axios.get('http://localhost:3001/product/').then(res => {
				dispatch({type: PRODUCTS_FETCH, data: res.data});
			})
		})
	}
}

export const productCreate = (productValues) => {
	return dispatch => {
		axios.post('http://localhost:3001/product', productValues).then(res => {
			dispatch({type: PRODUCTS_CREATE});
		});
	}
}

export const productEdit = (productId, productValues) => {
	return dispatch => {
		axios.put('http://localhost:3001/product/' + productId, productValues).then(res => {
			dispatch({type: PRODUCTS_EDIT});
		});
		// axios.put('http://localhost:3001/product/' + productId, productValues);
	}
}

export const productsClear = () => {
	return dispatch => {
		dispatch({type: PRODUCTS_CLEAR});
	}
}

