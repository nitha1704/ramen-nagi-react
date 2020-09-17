import axios from 'axios';
import {CONTACT_SUBMIT, CONTACT_INITIAL} from './type';

export const contactSubmit = (contactFormValues) => {
	return dispatch => {
		axios.post('http://localhost:3001/comment', contactFormValues).then(res=>{
			dispatch({type: CONTACT_SUBMIT});
		})
	}
}

export const initialFormTest555 = () => {
	return dispatch => {
		dispatch({type: CONTACT_INITIAL});
	}
}