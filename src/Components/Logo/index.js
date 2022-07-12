import './Logo.css'
import logoBranca from '../../assets/img/logo.svg'
import logoAzul from '../../assets/img/logo-azul.png'


let logo = logoAzul;


const Logo = (props) =>{
   if(props.logoBranca){
    logo = logoBranca;
   }
    
    return(
        <>
            <img src={logo} className = 'logo_img' alt='Logo do Adopet'/>
            <h2 className='logo__titulo'>{props.titulo}</h2>
            <p className='logo__paragrafo'>{props.paragrafo}</p>
        </>
    )
}

export default Logo;