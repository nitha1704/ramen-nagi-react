import {TOTAL_ORDER_FETCH} from '../actions/type';

export default function(state=[],action) {
    switch(action.type) {
        case TOTAL_ORDER_FETCH :
            return action.data;
        default :
            return state;
    }
}