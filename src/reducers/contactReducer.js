import {CONTACT_SUBMIT, CONTACT_INITIAL} from '../actions/type';

export default function(state={},action) {
	switch(action.type) {
		case CONTACT_SUBMIT :
			return {};
		case CONTACT_INITIAL:
			return {name:'puck',email:'puck@hotmail.com',country:'Thailand',message: '555'};
		default:
			return state;
	}
}