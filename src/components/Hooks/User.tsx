import { useState } from "react"

type AuthUser = {
    name: string,
    email: string
}

export const User = () => {

    const [user, setUser] = useState<AuthUser | null>(null)

    const handleLogin = () => {
        setUser({
            name: 'John Doe',
            email: 'john1@gmail.com'
        })
    }
    const handleLogout = () => {
        setUser(null)
    }

    return (
        <div>
            <p>Demo for useState Future Value: </p>
            <button onClick={handleLogin}>Login</button>&nbsp;
            <button onClick={handleLogout}>Logout</button>
            <div>
                <h5>User name is: {user?.name}</h5>
                <h5>User email is: {user?.email}</h5>
            </div>
        </div>
    )
}