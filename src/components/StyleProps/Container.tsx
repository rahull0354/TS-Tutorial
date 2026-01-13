import React from "react"

type ContainerProps = {
    styles: React.CSSProperties
}

export const Container = (props: ContainerProps) => {
    return (
        <div style={props.styles}>
            <p>This is the demo for style props</p>
        </div>
    )
}