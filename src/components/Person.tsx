type PersonProps = {
    name: {
        first: string,
        last: string
    }
}

export const Person = (props: PersonProps) => {
    return (
        <div>
            <p>Demo for using object props:</p>
            <h1>{props.name.first} {props.name.last}</h1>
        </div>
    )
}