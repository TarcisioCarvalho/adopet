import Button from '../Button';
import Input from '../Input';
import TextArea from '../TextArea';
import './Perfil.css';
import joana from '../../assets/img/joana.png'
import alteraEstiloBody from '../../utils/altera-estilo-body';
import alteraIconeUsuario from '../../utils/altera-icone-usuario';

const Perfil = () =>{

    alteraEstiloBody('body-home');
    
    alteraIconeUsuario(true);
    return (
       <>
            <section className='perfil'>
        <p className='perfil__paragrafo'>Esse é o perfil que aparece para responsáveis ou ONGs que recebem sua mensagem.</p>
            <form className='perfil__form'>
                <h2 className='perfil__form--titulo'>Perfil</h2>
                <div className='perfil__form--div-foto'>
                    <label className='label'>Foto</label>
                    <img src={joana} alt='Foto do perfil' className='perfil__form--img' />
                    <p className='perfil__form--div-paragrafo'>Clique na foto para editar</p>
                </div>
                <Input value='Joana' label ='Nome' placeHolder = 'Insira seu nome completo' type = ''/>
                <Input value='55 11 XXXXXXXXX' label ='Telefone' placeHolder = 'Insira seu telefone e/ou whatsapp' type = 'tel'/>
                <Input value='São Paulo' label ='Cidade' placeHolder = '' type = ''/>
                <TextArea value='At vero eos et accusamus et iusto odio dignissimos ducimus 
                qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et 
                quas molestias excepturi sint occaecati.' label ='Sobre' placeHolder = 'Escreva sua mensagem.'/>
                <Button>Salvar</Button>
            </form>
        </section>
       </> 
    )
}

    export default Perfil;
