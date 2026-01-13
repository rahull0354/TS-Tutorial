type GreetProps = {
    name: string,
    messageCount: number,
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
    return (
        <div>
            <p>Demo for using props:</p>
            {
                props.isLoggedIn ?
                <h2>Welcome {props.name}! You have {props.messageCount} new messages.</h2> :
                <h2>Welcome Guest!</h2>
            }
        </div>
    )
}