import Card from '../Card';
import './Home.css';
import pets from '../../data/pets.js'


const Home = () =>{
    return (
        <>
            <section className='home'>
            <p className='home__paragrafo'>Olá! Veja os amigos disponíveis para adoção!</p>
                {pets.map(pet => <Card nome={pet.nome} img = {pet.img} idade={pet.tamanho}
                caracteristicas = {pet.caracteristicas} tamanho = {pet.tamanho}
                 localidade = {pet.localidade}/>)}
            </section>
            <div className='home__espacamento'>
            </div>
        </>
    )
}

export default Home;