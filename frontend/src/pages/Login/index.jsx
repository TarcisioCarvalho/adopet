

import { useState } from 'react';
import alteraEstiloBody from '../../utils/altera-estilo-body';
import alteraHeader from '../../utils/altera-header';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import Logo from '../../Components/Logo';
import './Login.css';


const Login = (props) =>{

    

    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');
    const [error,setError] = useState('');
    
    if(props.location) {
        window.location.href = 'http://localhost:3000/login';
        props.location = false;
    }

    alteraEstiloBody('body--cadastro--login');
    alteraHeader(false);
    return (
        <>
            <section className='login'>
            <Logo paragrafo ='Ainda não tem cadastro?
Então, antes de buscar seu melhor amigo, precisamos de alguns dados:'/>
            <form className='login__form'>
                <Input placeHolder = 'Insira seu email' label='Email' value={email} onChange = {e => [setEmail(e.target.value),setError('')]}/>
                <Input placeHolder = 'Insira sua senha' label='Senha' type='password' value={senha} onChange = {e => [setSenha(e.target.value),setError('')]}/>
                <a href='./' className='login__link'>Esqueci minha senha.</a>
                <Button>Entrar</Button>
                
            </form>
        </section>
        
        </>
    )
}

export default Login;