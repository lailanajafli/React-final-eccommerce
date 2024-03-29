//store.js

import {configureStore} from "@reduxjs/toolkit"
import counterReducer from './features/counter/counterSlice.js'
import productReducer from './features/products/productSlice.js'
import filteredValue from "./features/filteredValue/index.js"
export default configureStore({
    reducer: {
        counter: counterReducer,
        product: productReducer,
        filteredValue:filteredValue
    }
})