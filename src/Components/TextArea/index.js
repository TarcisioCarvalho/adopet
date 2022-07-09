import './TextArea.css';

const TextArea = (props) =>{
    return (
        <>
        <label className='label'>{props.label}</label>
        <textarea value={props.value} className='text-area' placeholder={props.placeHolder}>{props.texto}</textarea>
        </>
    )
}

export default TextArea;