/* import { useSignIn } from "react-auth-kit"; */
/* import { loginUser } from "../../api/login"; */
import { Input } from "../Input/Input"

const Login = () => {

/*     const signIn = useSignIn(); */

    const handleLogin = async (event) => {
        try{
/*             const response = await loginUser({}) */
            console.log(event)
/*             signIn({
                token: response.data.token,
                expiresIn: 360000,
                tokenType: 'Bearer',
                authState: { email: event.email}
            }) */
            return console.log("try")
        }catch(error) {
            return console.log(error)
        }
    }

    return(
        <form onSubmit={handleLogin}>
            <Input label={'Email'} input={{ type: 'email', id: 'email' }}></Input>
            <Input label={'Senha'} input={{ type: 'password', id: 'password' }}></Input>
            <button type="submit"></button>
        </form>
    )
}