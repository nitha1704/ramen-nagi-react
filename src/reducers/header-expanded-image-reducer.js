import { IMAGE_EXPANDED_MENU_ACTION } from '../actions/type';


export default function(state=[],action) {
    switch(action.type) {
        case IMAGE_EXPANDED_MENU_ACTION :
            return action.data;
        default: 
            return state;
    }
}