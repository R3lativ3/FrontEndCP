import { createContext, useEffect, useState } from "react"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [userToken, setUserToken] = useState(null)

    const login = (token, username, user) => {
        setIsLoading(true)
        setUserToken(token)
        window.localStorage.setItem('token', token)
        window.localStorage.setItem('username', username)
        window.localStorage.setItem('user', user)
        setIsLoading(false)
    }

    const logout = () => {
        console.log('loggin out')
        setIsLoading(true)
        window.localStorage.clear()
        setUserToken(null)
        setIsLoading(false)
    }

    const getUserLogged = () => {
        return {
            token: window.localStorage.getItem('token'),
            username: window.localStorage.getItem('username'),
            user: window.localStorage.getItem('user')
        }
    }

    const isLoggedIn = () => {
        try{
            setIsLoading(true)
            const userToken = window.localStorage.getItem('token')
            setUserToken(userToken)
            setIsLoading(false)
        }
        catch(exception){
            console.log(exception)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        isLoggedIn()

        return () => { }
    }, [])

    return <AuthContext.Provider value={{ login, logout, isLoading, userToken, getUserLogged }}>
        {children}
    </AuthContext.Provider>
}

export default AuthContext