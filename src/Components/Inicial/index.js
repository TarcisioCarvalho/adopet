import './Inicial.css';
import logo from '../../assets/img/logo.svg'
import Button from '../Button';
import Logo from '../Logo';
import alteraEstiloBody from '../../utils/altera-estilo-body';
import alteraHeader from '../../utils/altera-header';

const Inicial = () =>{
    alteraEstiloBody('body-inicial');
    alteraHeader(false);
    return (
        <>
        <section className='inicial'>
            {/*  <img src={logo} alt=''/>
            <h2>Boas Vindas!</h2>
            <p>Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!</p> */}
            <Logo titulo = 'Boas Vindas!' paragrafo = 'Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!'/>
            <Button pagina = 'login'>Já tenho conta</Button>
            <Button pagina= 'cadastro'>Quero me cadastrar</Button> 
        </section>
        <div className='inicial__espacamento'></div>
        </>
    )
}

export default Inicial;