import { useContext } from "react"
import { UserContext } from "./UserContext"

export const UserLogin = () => {

    const userContext = useContext(UserContext)
    const handleLogin = () => {
        if (userContext) {
            userContext.setUser({
                name: 'John Doe',
                email: 'john1@gmail.com'
            })
        }
    }
    const handleLogout = () => {
        if(userContext) {
            userContext.setUser(null)
        }
    }

    return (
        <div>
            <p>Demo for UseContext Future value</p>
            <button onClick={handleLogin}>Login</button>&nbsp;
            <button onClick={handleLogout}>Logout</button>
            <h5>User Name is: {userContext?.user?.name}</h5>
            <h5>user Email is: {userContext?.user?.email}</h5>
        </div>
    )
}