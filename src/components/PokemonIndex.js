import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'

import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
   pokemon: [],
   filtered: ''
  }

  addPokemonToPage = pokemonObject => {
    this.setState({ pokemon: [...this.state.pokemon, pokemonObject]})
  }

  getData = () =>
    fetch('http://localhost:3000/pokemon')
      .then(res => res.json())
      .then(pokemon => this.setState({ pokemon }))


  componentDidMount() {
    this.getData()
  }

  filterPokemons = (value) =>
    this.setState({
      filtered: value
    })

    getFilteredPokemon=()=>
      this.state.pokemon.filter(pokemon => pokemon.name.includes(this.state.filtered))

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onKeyUp={event=> this.filterPokemons(event.target.value)}/>
        <br />
        <PokemonCollection pokemon={this.getFilteredPokemon()} />
        <br />
        <PokemonForm addPokemonToPage={this.addPokemonToPage} />
      </div>
    )
  }
}

export default PokemonPage
