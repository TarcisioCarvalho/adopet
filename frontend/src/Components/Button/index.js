import './Button.css'
import {useNavigate} from 'react-router-dom';



const Button = (props) =>{
    const navigate = useNavigate();
    const handleClick = () =>{
    navigate(props.pagina);
  }
    return(
        <button onClick={handleClick}  className='button'>{props.children}</button>
    )
}

export default Button;