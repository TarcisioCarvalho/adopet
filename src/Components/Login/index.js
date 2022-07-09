import Button from '../Button';
import Input from '../Input';
import Logo from '../Logo';
import './Login.css';

const Login = () =>{
    return (
        <>
            <section className='login'>
            <Logo paragrafo ='Ainda não tem cadastro?
Então, antes de buscar seu melhor amigo, precisamos de alguns dados:'/>
            <form className='login__form'>
                <Input placeHolder = 'Insira seu email' label='Email'/>
                <Input placeHolder = 'Insira sua senha' label='Senha' type='password'/>
                <a href='./' className='login__link'>Esqueci minha senha.</a>
                <Button>Entrar</Button>
                
            </form>
        </section>
        <div className='cadastro__espacamento'></div>
        </>
    )
}

export default Login;