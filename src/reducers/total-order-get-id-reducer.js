import {TOTAL_ORDER_GET_ID} from '../actions/type';

export default function(state=[],action) {
    switch(action.type) {
        case TOTAL_ORDER_GET_ID:
            return action.data;
        default :
            return state;
    }
}