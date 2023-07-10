import { Link } from "react-router-dom"

const Error = () => {
    return (
        <div>
            <Link to={'/'} >
                <span className='btn btn-info'>
                    Voltar
                </span>
            </Link>
            <h1>Somente administradores podem acessar essa página</h1>
        </div>
    )
}

export { Error }