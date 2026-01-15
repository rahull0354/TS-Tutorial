import { useReducer } from "react"

type CounterState = {
    count: number
}

type CounterAction = {
    type: String,
    payload: number
}

const initialState = {count : 0}

function reducer(state: CounterState, action: CounterAction) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + action.payload}
        case 'decrement':
            return {count: state.count - action.payload}
        default:
            return state
    }
}

export const Counter = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <p>Demo for useReducer Hook:</p>
            Count: {state.count}
            <br />
            <button onClick={() => dispatch({type: 'increment', payload: 10})}>
                Increment 10
            </button>&nbsp;
            <button onClick={() => dispatch({type: 'decrement', payload: 10})}>
                Decrement 10
            </button>
        </>
    )
}