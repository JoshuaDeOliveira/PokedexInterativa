const PokeData = async (SearchKey) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${SearchKey}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(`Esse foi o codigo encontrado na busca ${error.message}`)
  }
}

class Dados{
  Nome;
  Sprite;
  ID;

  constructor(Pokemon){
    this.Nome = Pokemon.name
    this.Sprite = Pokemon.sprites.versions['generation-v']['black-white'].animated.front_default
    this.ID = Pokemon.id
  }
}

export async function InfoVisuais(ID){
  const Data = await PokeData(ID)
  const Pokemon = new Dados(Data)
  return Pokemon
}

