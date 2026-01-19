type HorizontalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'center' | 'bottom'

type ToastProps = {
    // using exclude here for demo to remove a specific type
    position: Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'>
}

export const Toast = ({position}: ToastProps) => {
    return (
        <div>
            <p>Template Literal Demo: </p>
            <h4>Toast Notification Position - {position}</h4>
        </div>
    )
}