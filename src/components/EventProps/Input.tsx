import React from "react"

type InputEvent = {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props:InputEvent) => {
    return (
        <div>
            <p>Input Tag Demo: </p>
            <input type="text" value={props.value} onChange={props.handleChange} />
        </div>
    )
}