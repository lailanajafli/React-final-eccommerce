import {createSlice} from '@reduxjs/toolkit'


export const filteredValue = createSlice({
    name: "filteredValue",
    initialState: {
        value: ""
    },
    reducers: {
        changeValue: (state,action) => {
            state.value = action.payload
        },
    }
})

export const {changeValue} = filteredValue.actions

export default filteredValue.reducer