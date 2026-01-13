type ButtonProps = {
    handleClick: () => void
}

export const Button = (props:ButtonProps) => {
    return (
        <div>
            <p>Button Click Event Demo:</p>
            <button onClick={props.handleClick}>Click</button>
        </div>
    )
}