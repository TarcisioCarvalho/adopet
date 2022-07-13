
import './Header.css';
import casa from '../../assets/ico/casa.svg';
import mensagens from '../../assets/ico/mensagens.svg';
import iconeUsuario from '../../assets/ico/usuario.png';
import joana from '../../assets/img/joana.png';
import {Link} from 'react-router-dom';
import logoTabletDesktop from '../../assets/img/logo-tablet-desktop.svg'

const Header = () =>{

    const {pathname} = window.location;
    let classeUsuario = '';
    let classePerfil = 'none';
    let classeHeader = '';
    let classeNone = 'none';

    if(pathname === '/home' || pathname === '/mensagens' || pathname === '/perfil'){
         classeHeader = 'header';
         classeNone = 'icone-header-usuario'
    };

    if(pathname === '/perfil') {
        classePerfil = ''
        classeUsuario = 'none';
    };

    return (
        <header className={classeHeader} data-header>
            <nav  className='nav-header' style={{minWidth:'9rem'}} >
                <Link to='/'><img src={logoTabletDesktop} alt='Logo do adopet' className='logo-header' /></Link>
                <Link to='home' ><img src={casa} alt=''  className='icone-header'/></Link>
                <Link to='mensagens'><img src={mensagens} alt ='' className='icone-header'/></Link>
            </nav>
            <Link to='perfil'  className={classeNone + ' icone-usuario'}  data-usuario >
                <img src={iconeUsuario} alt =''  className={classeUsuario } data-usuario-icone/> <img src={joana} alt =''  className={classePerfil} data-usuario-foto/>
            </Link>
        </header>
    )
}

export default Header;