import { useRef } from "react"
import { Input } from "../Input/Input"
import { registerUser } from "../../api/register";
import { useSignIn } from "react-auth-kit"

const Registration = () => {
    const signIn = useSignIn();

    const emailRef = useRef()
    const passwordRef = useRef()

    const handleRegister = async (event) => {
        event.preventDefault()
        try {
            const userData = {
                email: emailRef.current.value,
                password: passwordRef.current.value,
                role: 'REGULAR'
            }

            const response = await registerUser(userData)
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
        <form onSubmit={handleRegister}>
            <Input label={'Email'} input={{ type: 'email', id: 'email' }} ref={emailRef}></Input>
            <Input label={'Senha'} input={{ type: 'password', id: 'password' }} ref={passwordRef}></Input>
            <button type="submit">Registrar</button>
        </form>
    )
}

export { Registration }