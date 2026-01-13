type PersonListProps = {
    name: {
        first: string,
        last: string
    }[]
}

export const PersonList = (props: PersonListProps) => {
    return (
        <div>
            <p>This demo is for printing an array using props:</p>
            {
                props.name.map(names => {
                    return (
                        <h1 key={names.first}>{names.first} {names.last}</h1>
                    )
                })
            }
        </div>
    )
}