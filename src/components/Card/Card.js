import { CardDetails, CardImage, CardName, CardPokemon } from "./card.styled"

export default function  Card({pokemon}) {
    return (
        <CardPokemon className={pokemon.types[0].type.name}>
            <CardImage href="#">
                <img src={pokemon.sprites.other['official-artwork'].front_default} alt=""/>
            </CardImage>
            <CardName>
                {pokemon.name}    <span className={`color-${pokemon.types[0].type.name}`}>[{pokemon.id}]</span>
            </CardName>
            <span className="title">
                <strong>Types:</strong>
            </span>
            <CardDetails className="Card__types">
                {pokemon.types.map(type => {
                    return (
                        <p className={`Card__type color-${type.type.name}`}>
                            {type.type.name}
                        </p>
                    )
                })}
            </CardDetails>
            <div className="Card__info">
                <div className="Card__data Card__data--weight">
                    <p className="title">Weight: {pokemon.weight}</p>
                </div>
                <div className="Card__data Card__data--height">
                    <p className="title">Height: {pokemon.height}</p>
                </div>
                <p className="title"><strong>Abilities:</strong></p>
                <CardDetails className="Card__data Card__data--abilities">
                    {pokemon.abilities.map(ability => {
                        return (
                            <div className="Card__ability">
                            {ability.ability.name}
                            </div>
                        )
                    })}
                </CardDetails>
            </div>
        </CardPokemon>
    )
}