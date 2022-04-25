import { createStore } from 'redux';
import cartReducer from './Store/Reducer/cartReducer';


export const store = createStore(cartReducer);