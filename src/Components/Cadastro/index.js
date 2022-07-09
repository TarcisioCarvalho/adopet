import Button from '../Button';
import Input from '../Input';
import Logo from '../Logo';
import './Cadastro.css';

const Cadastro = () =>{
    return(

        <section className='cadastro'>
            <Logo paragrafo ='Ainda não tem cadastro?
Então, antes de buscar seu melhor amigo, precisamos de alguns dados:'/>
            <form className='cadastra__form'>
                <Input placeHolder = 'Digite seu melhor email' label='email'/>
                <Input placeHolder = 'Digite seu melhor email' label='email'/>
                <Input placeHolder = 'Digite seu melhor email' label='email'/>
                <Input placeHolder = 'password' label='Password' type = 'password'/>
                <Button>Cadastrar</Button>
            </form>
        </section>
    )
}

export default Cadastro;