
// Libreries
import axios from 'axios'
import swal from '@sweetalert/with-react'
import { Navigate, useNavigate } from "react-router";
// Styles
import '../css/bootstrap.min.css'
import '../css/login.css'


function Login() {

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

        if(email === '' || password === ''){
            swal(<h2>Los campos no pueden estar vacios</h2>)
            return;
        }

        if(email !== '' && !emailRegex.test(email)){
            swal(<h2>correo electronico invalido</h2>);
        }

        if(email !== 'challenge@alkemy.org' || password !== 'react'){
            swal(<h2>Credenciales invalidas</h2>);
            return;
        }
        console.log('Ok estamos listos para enviar la información')
        axios
            .post('http://challenge-react.alkemy.org', {email, password})
            .then(res=> {
                swal(<h2>Perfecto, ingresaste correctamente</h2>)
                sessionStorage.setItem("token",res.data.token)
                navigate('/List')
            })
    }   

    let token = sessionStorage.getItem('token')

    return (
        <>
        {!token? 
            <div className='container container-login'>
            <h2>Formulario de Login</h2>
            <form onSubmit={submitHandler}>
                <label className='label-login'>
                    <span>Correo electrónico:</span> <br />
                    <input className="input-group-text" type="text" name="email" />
                </label>
                <br />
                <label className='label-login'>
                    <span>Contraseña:</span> <br />
                    <input className="input-group-text" type="password" name="password" />
                </label>
                <br />
                <button type="submit" className="btn btn-success btn-login">Ingresar</button>
            </form>
        </div>
        :
        <Navigate to="/List"/>
        }
        </>
    )
       
}

export default Login;