type OscarProps = {
    children: React.ReactNode
}

export const Oscar = (props: OscarProps) => {
    return (
        <div>
            <p>Mounting children into parent demo:</p>
            <h5>{props.children}</h5>
        </div>
    )
}