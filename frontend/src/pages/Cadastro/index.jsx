import alteraEstiloBody from '../../utils/altera-estilo-body';
import alteraHeader from '../../utils/altera-header';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import Logo from '../../Components/Logo';
import './Cadastro.css';

const Cadastro = () =>{
    alteraEstiloBody('body--cadastro--login');
    alteraHeader(false);
    return(
        <>
        <section className='cadastro'>
            <Logo paragrafo ='Ainda não tem cadastro?
Então, antes de buscar seu melhor amigo, precisamos de alguns dados:'/>
            <form className='cadastra__form'>
                <Input placeHolder = 'Digite seu melhor email' label='Email'/>
                <Input placeHolder = 'Digite seu nome completo' label='Nome'/>
                <Input placeHolder = 'Crie uma senha' label='Senha' type = 'password'/>
                <Input placeHolder = 'Repita a senha criada acima' label='Confirma sua senha' type = 'password'/>
                <Button>Cadastrar</Button>
            </form>
        </section>
        
        </>
    )
}

export default Cadastro;