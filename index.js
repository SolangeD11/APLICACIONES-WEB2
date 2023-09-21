const {getPokemon} = require ("./pokemon")

getPokemon(1).then((pokemon)=>{
  console.log(pokemon)
}
)