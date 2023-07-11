import { useRef } from "react"
import { Input } from "../Input/Input"
import { loginUser } from "../../api/login"
import { useSignIn } from "react-auth-kit"
import { Link } from "react-router-dom"

const Login = () => {
    const signIn = useSignIn();

    const emailRef = useRef()
    const passwordRef = useRef()

    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            const userData = {
                email: emailRef.current.value,
                password: passwordRef.current.value,
            }

            const response = await loginUser(userData)
            await signIn({
                token: response.token,
                expiresIn: 4320,
                tokenType: 'Bearer',
                authState: { email: response.email, role: response.role, id: response.id }
            })

            window.location.assign("http://localhost:3000/")
        } catch (error) {
            return console.log(error)
        }
    }


    return (
        <form onSubmit={handleLogin}>
            <Input label={'Email'} input={{ type: 'email', id: 'email' }} ref={emailRef}></Input>
            <Input label={'Senha'} input={{ type: 'password', id: 'password' }} ref={passwordRef}></Input>
            <Link to={'/register'} >
                <span className='btn btn-info'>
                    Registrar
                </span>
            </Link>
            <button type="submit">Login</button>
        </form>
    )
}

export { Login }