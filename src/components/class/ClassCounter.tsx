import { Component } from "react";

type CounterProps = {
    message: string
}

type CounterState = {
    count: number
}

export class ClassCounter extends Component<CounterProps, CounterState> {
    state = {
        count: 0,
    }

    handleIncrement = () => {
        this.setState((prevState) => ({count: prevState.count + 1}))
    }

    handleDecrement = () => {
        this.setState((prevState) => ({count: prevState.count - 1}))
    }
    
    render() {
        return (
            <div>
                <p>Demo For Class: </p>
                {this.props.message} {this.state.count}
                <br />
                <button onClick={this.handleIncrement}>Increment</button>&nbsp;
                <button onClick={this.handleDecrement}>Decrement</button>
            </div>
        )
    }
}
