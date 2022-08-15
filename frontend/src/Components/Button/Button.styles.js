import styled,{css} from "styled-components";


export const ButtonContainer = styled.button`
    background-color: var(--coral);
    display: flex;
    justify-content: center;
    align-items: center;
    width:${props=> props.tamanhos.larguraMobile};
    height:${props=> props.tamanhos.alturaMobile};
    border-radius: 0.375rem;
    filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.25));
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    color: var(--branco);
    cursor: pointer;
    border: 1px solid var(--azul);
    :hover{
        background-color: #FF9D9E;
    }
    @media (min-width: 768px) {
        width:${props=> props.tamanhos.larguraTablet};
        height:${props=> props.tamanhos.alturaTablet};
    }
    @media (min-width: 1440px) {
        width:${props=> props.tamanhos.larguraDesktop};
        height:${props=> props.tamanhos.alturaDesktop};
    }
`