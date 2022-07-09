import Button from '../Button';
import Input from '../Input';
import TextArea from '../TextArea';
import './Mensagens.css';

const Mensagens = () =>{
    return (
        <>
       
        <section className='mensagens'>
        <p className='mensagens__paragrafo'>Envie uma mensagem para a pessoa ou instituição que está cuidado do animal:</p>
            <form className='mensagens__form'>
                <Input label ='Nome' placeHolder = 'Insira seu nome completo' type = ''/>
                <Input label ='Telefone' placeHolder = 'Insira seu telefone e/ou whatsapp' type = 'tel'/>
                <Input label ='Nome do Animal' placeHolder = 'Por qual animal você se interessou?' type = ''/>
                <TextArea label ='Mensagem' placeHolder = 'Escreva sua mensagem.'/>
                <Button>Enviar</Button>
            </form>
        </section>
        <div className='mensagens__espacamento'>
            </div>
        </>
    )
}

export default Mensagens;