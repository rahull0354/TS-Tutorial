type ListProps = {
    items: string[] | number[],
    onClick: (value: string | number) => void
}

export const List = ({items, onClick}: ListProps) => {
    return (
        <div>
            <p>Demo for Generics</p>
            <h2>List Of Events</h2>
            {items.map((item, index) => {
                return (
                    <div key={index} onClick={() => onClick(item)}>
                        {item}
                    </div>
                )
            })}
        </div>
    )
}