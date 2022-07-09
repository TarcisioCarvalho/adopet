import './Header.css';
import casa from '../../assets/ico/casa.svg';
import mensagens from '../../assets/ico/mensagens.svg';
import usuario from '../../assets/ico/usuario.png'
const Header = () =>{
    return (
        <header className='header'>
            <nav className='nav-header'>
                <img src={casa} alt=''  className='icone-header'/>
                <img src={mensagens} alt ='' className='icone-header'/>
                
            </nav>
            <img src={usuario} alt ='' className='icone-header-usuario'/>
        </header>
    )
}

export default Header;