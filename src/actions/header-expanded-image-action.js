import axios from 'axios'
import { IMAGE_EXPANDED_MENU_ACTION } from './type';

export const imageFetch = () => {
    return (dispatch) => {
        axios.get('http://localhost:3001/image_header_expanded_menu').then(res => {
            dispatch({ type: IMAGE_EXPANDED_MENU_ACTION, data: res.data })
        })
    }
}

