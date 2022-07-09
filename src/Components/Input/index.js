import './Input.css';

const Input = (props) =>{
    return (
        <>
            <label className='label'>{props.label}</label>
            <input className='input' placeholder={props.placeHolder} type={props.type}/>
        </>
    )
}

export default Input;