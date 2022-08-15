import './Button.css'
import {useNavigate} from 'react-router-dom';
import { ButtonContainer } from './Button.styles';



const Button = (props) =>{
    const navigate = useNavigate();
    const handleClick = () =>{
    navigate(props.pagina);
  }

 
    return(
        <ButtonContainer tamanhos={props.tamanhos} onClick={handleClick} >{props.children}</ButtonContainer>
    )
}

export default Button;