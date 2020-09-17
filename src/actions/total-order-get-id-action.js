import {TOTAL_ORDER_GET_ID } from './type';


export const totalOrderGetId = (id) => {
    return (dispatch) => {
        dispatch({type:TOTAL_ORDER_GET_ID, data: id});
    }
}