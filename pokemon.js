const {httpPokemon} = require ("./pluggins")

//https://pokeapi.co/api/v2/pokemon/100

const getPokemon = async (idPokemon)=>{
    const url = `https://pokeapi.co/api/v2/pokemon/${idPokemon}`
    const pokemon = await httpPokemon.get(url)
    return pokemon.name;
}

module.exports = {getPokemon}