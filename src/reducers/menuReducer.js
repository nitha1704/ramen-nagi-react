import {MENU_FETCH} from '../actions/type';

export default function(state=[],action) {
    switch(action.type) {
        case MENU_FETCH :
            return action.data;
        default :
            return state;
    }
}