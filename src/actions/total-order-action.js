import axios from 'axios';
import { TOTAL_ORDER_FETCH } from './type';

export const totalOrderFetch = () => {
    return (dispatch) => {
        axios.get('http://localhost:3001/totalOrders').then(res => {
            dispatch({ type: TOTAL_ORDER_FETCH, data: res.data });
        })
    }
}

export const deleteTotalOrder = (id) => {
    return (dispatch) => {
        axios.delete('http://localhost:3001/totalOrders/' + id).then(res=>{
            axios.get('http://localhost:3001/totalOrders/').then(res=>{
                dispatch ({type:TOTAL_ORDER_FETCH,data: res.data});
            })
        })
    }
}