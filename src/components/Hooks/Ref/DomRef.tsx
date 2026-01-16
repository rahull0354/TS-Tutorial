import { useEffect, useRef } from "react"

export const DomRef = () => {

    const inputRef = useRef<HTMLInputElement>(null!)

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <div>
            <p>UseReference demo for DomRef: </p>
            <input type="text" ref={inputRef} />
        </div>
    )
}