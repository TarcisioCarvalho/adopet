import './Inicial.css';
import logo from '../../assets/img/logo.svg'
import Button from '../Button';
const Inicial = () =>{
    return (
        <section className='inicial'>
             <img src={logo} alt=''/>
            <h2>Boas Vindas!</h2>
            <p>Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!</p>
            <Button>Já tenho conta</Button>
            <Button>Quero me cadastrar</Button> 
        </section>
    )
}

export default Inicial;