import {InfoVisuais} from "../Data/PokeData.js";

export function RunPokedex(){
  Criação(IDAtual)
  Botoes() 
}

let InserirInfo = document.querySelector('.Informações')
let IDAtual = 1

function Botoes(){
  const Botoes = document.querySelectorAll('.btn-poke')

  Botoes.forEach(botão => {
  botão.addEventListener('click',() => {
    const id = botão.dataset.whoButton
    IDAtual = ContadorID(id, IDAtual)
    Criação(IDAtual)
  })
})
}

async function Criação(ID){
  const Pokemon = await InfoVisuais(ID)
  const HTML = `
  <div class="Sprite-Pokemon">
    <img src="${Pokemon.Sprite}" alt="">
  </div>
  <div class="Info-Poke">
    <p class="ID">#${CorrigirID(Pokemon.ID)} - </p>
    <h1 class="PokeName">${TratarONome(Pokemon.Nome)}</h1>
  </div>
      `
  InserirInfo.innerHTML = HTML
}

function TratarONome(Name){
  const reformado = Name.split('-')[0]
  return reformado
}

function ContadorID(Key, ID){
  if (Key == 'Next') {
    ID++
    if (ID > 649) ID = 1
  } else if (Key == 'Previous') {
    ID--
    if (ID < 1) ID = 649
  }
  return ID
}

function CorrigirID(ID){
  return ID.toString().padStart(3, '0')
}