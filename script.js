let poke = document.querySelector('#pokemon-name');
let submit = document.querySelector('.button');
let res = document.querySelector('#pokemon-type');

submit.addEventListener("click", async (e) => {
    e.preventDefault();
    let pokeName = poke.value.trim();
     if (!pokeName) {
        console.error("Enter a Pokémon name first!");
        return;
    }
    res.value = "";
    await fetchPoke(pokeName)
})


async function fetchPoke(pokeName) {
    try {
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        if(!data.ok) {
            throw new Error("pokemon not found.");
        }
        const newData = await data.json();
        newData.types.forEach(element => {
            res.value += element.type.name;
            res.value += " ";
        });
    }
    catch(err) {
        console.warn(`Error found: ${err}`);
        alert(`${err}`);
    }
}

