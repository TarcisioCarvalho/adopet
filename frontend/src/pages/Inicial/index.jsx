import './Inicial.css';
import Button from '../../Components/Button';
import Logo from '../../Components/Logo';
import alteraEstiloBody from '../../utils/altera-estilo-body';
import alteraHeader from '../../utils/altera-header';
import { retornaTamanhosBotao } from '../../utils/retorna-objeto-tamanhos-botao';

const Inicial = () =>{

    const tamanhosBotao = retornaTamanhosBotao('50%','344px','362px','40px','48px','48px');

    alteraEstiloBody('body-inicial');
    alteraHeader(false);
    return (
        <>
        <section className='inicial'>
            {/*  <img src={logo} alt=''/>
            <h2>Boas Vindas!</h2>
            <p>Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!</p> */}
            <Logo logoBranca = {true} titulo = 'Boas Vindas!' paragrafo = 'Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!'/>
            <Button tamanhos={tamanhosBotao} pagina = 'login'>Já tenho conta</Button>
            <Button tamanhos={tamanhosBotao} pagina= 'cadastro'>Quero me cadastrar</Button> 
        </section>
        
        </>
    )
}

export default Inicial;