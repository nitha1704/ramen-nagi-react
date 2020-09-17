import axios from 'axios';
import {MENU_FETCH} from './type';

export const menuFetch = ()=>{
    return (dispatch)=>{
        axios.get('http://localhost:3001/menu').then(res=>{
            dispatch({type:MENU_FETCH, data: res.data});
        })
    }
}