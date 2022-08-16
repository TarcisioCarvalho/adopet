import alteraEstiloBody from '../../utils/altera-estilo-body';
import alteraHeader from '../../utils/altera-header';
import alteraIconeUsuario from '../../utils/altera-icone-usuario';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import TextArea from '../../Components/TextArea';
import './Mensagens.css';
import { retornaTamanhosBotao } from '../../utils/retorna-objeto-tamanhos-botao';

const Mensagens = () =>{

    const tamanhosBotao = retornaTamanhosBotao('41%','41%','41%','40px','40px','40px');

    alteraEstiloBody('body-home','body-messagens-perfil');
    alteraHeader(true);
    alteraIconeUsuario(false);
    return (
        <>
       
        <section className='mensagens'>
        <p className='mensagens__paragrafo'>Envie uma mensagem para a pessoa ou instituição que está cuidado do animal:</p>
            <form className='mensagens__form'>
                <Input  label ='Nome' placeHolder = 'Insira seu nome completo' type = ''/>
                <Input label ='Telefone' placeHolder = 'Insira seu telefone e/ou whatsapp' type = 'tel'/>
                <Input label ='Nome do Animal' placeHolder = 'Por qual animal você se interessou?' type = ''/>
                <TextArea label ='Mensagem' placeHolder = 'Escreva sua mensagem.'/>
                <Button tamanhos={tamanhosBotao}>Enviar</Button>
            </form>
        </section>
        </>
    )
}

export default Mensagens;