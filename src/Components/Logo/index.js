import './Logo.css'
import logo from '../../assets/img/logo.svg'
import logoAzul from '../../assets/img/logo-azul.png'

const Logo = (props) =>{
    return(
        <>
            <img src={logoAzul} className = 'logo_img' alt='Logo do Adopet'/>
            <h2 className='logo__titulo'>{props.titulo}</h2>
            <p className='logo__paragrafo'>{props.paragrafo}</p>
        </>
    )
}

export default Logo;