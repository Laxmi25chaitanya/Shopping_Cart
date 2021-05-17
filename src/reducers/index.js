import counterReducer from './counter';
import { ipad, croptop, Kettles, trousers, jeans, croptop2cart, ipad2cart, Kettles2cart, trousers2cart, jeans2cart } from './products';
// import {croptop} from './products';
// import {Kettles} from './products';
// import {trousers} from './products';
// import {jeans} from './products';
// import {ipad2cart} from './products';
// import {croptop2cart} from './products';
// import {Kettles2cart} from './products';
// import {trousers2cart} from './products';
// import {jeans2cart} from './products';
import { combineReducers } from 'redux';
const allReducers = combineReducers({
    counter: counterReducer,
    ipad,
    croptop,
    Kettles,
    trousers,
    jeans,
    ipad2cart,
    croptop2cart,
    Kettles2cart,
    trousers2cart,
    jeans2cart
});
export default allReducers;