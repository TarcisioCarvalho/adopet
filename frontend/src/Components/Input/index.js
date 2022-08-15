import './Input.css';

const Input = (props) =>{
    return (
        <>
            <label className='label'>{props.label}</label>
            <input className='input' value={props.value} placeholder={props.placeHolder} type={props.type} onChange = {props.onChange}/>
        </>
    )
}

export default Input;