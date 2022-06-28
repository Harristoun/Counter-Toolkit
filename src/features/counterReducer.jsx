import { createReducer, createAction } from "@reduxjs/toolkit";
const initialState = {
    counter: 0,
    text: ''
}

// экспортируем с помощью createAction()

export const  inc = createAction('inc')
export const  dec = createAction('dec')
export const  clear = createAction('clear')


// createReducer() - создает новый редюсер в котором будет создавать команду

const counterReducer = createReducer(initialState,(builder)=>{
builder
.addCase(inc, (state)=> {
    state.counter +=10
 })
 .addCase(dec,(state)=>{
    state.counter -=10
 })
 .addCase(clear, (state)=>{
    state.counter = 0
 })

})
export default counterReducer
