const httpPokemon = {
    get:async(url)=>{
        const response = await fetch(url);
        const data = await response.json();
        return data;
    },
    post: (url,body)=>{},
    put:(url,body)=>{},
    delete:(url,body)=>{},
}

module.exports = {httpPokemon}