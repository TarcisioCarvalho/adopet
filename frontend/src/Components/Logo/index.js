import './Logo.css'
import logoBranca from '../../assets/img/logo.svg'
import logoAzul from '../../assets/img/logo-azul.svg'
import { Link } from 'react-router-dom';





const Logo = (props) =>{
  
    return(
        <>
            <Link to = '/'><img src={
                props.logoBranca===true?logoBranca:logoAzul
                } className = 'logo_img' alt='Logo do Adopet'/>
            </Link>
            <h2 className='logo__titulo'>{props.titulo}</h2>
            <p className='logo__paragrafo'>{props.paragrafo}</p>
        </>
    )
}

export default Logo;