import styled from "styled-components";

export const CardPokemon = styled.div`
    margin-top: 1rem;
    box-shadow: 0.2rem 0.2rem 1rem rgb(46 54 80 / 15%);
    padding: 1rem;
    min-height: 12rem;
    min-width: 12rem;
    max-width: 12rem;
    max-height: fit-content;
    margin: 0.5rem;     
    text-decoration: none;
`

export const CardImage = styled.a`
    display: flex;
    justify-content: center;
    height: 8rem;
    margin-bottom: 1rem;
`

export const CardName = styled.div`
    text-transform: capitalize;
    font-weight: 700;
    margin-bottom: 1rem;
`

export const CardDetails = styled.div`
    margin-top: 1rem;
    box-shadow: 0.2rem 0.2rem 1rem rgb(46 54 80 / 15%);
    padding: 0.5rem;
    max-height: fit-content;   
    text-decoration: none;
    text-transform: capitalize;
    border-radius: 0.25rem;
`