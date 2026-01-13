type HeadingProps = {
    children: String
}

export const Heading = (props: HeadingProps) => {
    return (
        <div>
            <h5>{props.children}</h5>
        </div>
    )
}