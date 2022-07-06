import './Header.css';
import casa from '../../assets/ico/casa.svg';
import mensagens from '../../assets/ico/mensagens.svg';
const Header = () =>{
    return (
        <header>
            <div className='div-header'>
                <img src={casa} alt=''  className='icone-header'/>
                <img src={mensagens} alt ='' className='icone-header'/>
            </div>
        </header>
    )
}

export default Header;