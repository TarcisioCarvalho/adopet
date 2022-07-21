import './Card.css';

const Card = (props) =>{
    return (
        <article className='card'>
            <img src={props.img} alt={props.texto} className='card__img'/>
            <div className='card__dados'>
                <h3 className='card_dados--nome'>{props.nome}</h3>
                <div className='card_dados--dados'>
                    <p>{props.idade}</p>
                    <p>{props.tamanho}</p>
                    <p>{props.caracteristicas}</p>
                </div>
                <p className='card__localidade'>{props.localidade}</p>
                <a href='./'><p className='card__link'>Falar com responsavel</p></a>
            </div>

        </article>
    )
}

export default Card;