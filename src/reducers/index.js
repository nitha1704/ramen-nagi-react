import {combineReducers} from 'redux';

// Form Reducer
import {reducer as formReducer} from 'redux-form';
// Reducers
import header_expanded_image_reducer from './header-expanded-image-reducer';
import header_expanded_list_reducer from './header-expanded-list-reducer';
import menuReducer from './menuReducer';
import total_order_reducer from './total-order-reducer';
import total_order_getId_reducer from './total-order-get-id-reducer';
import productReducer from './productReducer';
import product_get_id_reducer from './product-get-id-reducer.js';
import contactReducer from './contactReducer';

const rootReducer = combineReducers({
    imageExpandedMenu: header_expanded_image_reducer,
    listExpandedMenu: header_expanded_list_reducer,
    menu: menuReducer,
    totalOrder: total_order_reducer,
    totalOrderId: total_order_getId_reducer,
    product: productReducer,
    productId: product_get_id_reducer,
    contactUs: contactReducer,
    form: formReducer,
})

export default rootReducer;

