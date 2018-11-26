import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  clearState = () => {
    this.setState({
       name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    })
    
  }

  pushNewPokemon = (pokemon) => 
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(pokemon)
      })
      .then(res => {
        console.log("Request complete! response:", res);
    })
  

  handleChange = (event) => {
    const value = event.target.value
    if (event.target.name === 'name') { this.setState({ name: value  })}
    if (event.target.name === 'hp') { this.setState({  hp: value })}
    if (event.target.name === 'backUrl') {this.setState({  backUrl: value }) }
    if (event.target.name === 'frontUrl') { this.setState({  frontUrl: value  })}
  }

  handleSubmit = () =>{ 
    const newPokemon = {
      name: this.state.name,
      stats:[
        {
          name: 'hp',
          value: this.state.hp
      }
      ],
      sprites: {
        front: this.state.frontUrl,
        back: this.state.backUrl
      }
    }
    this.pushNewPokemon(newPokemon).then(
      resp=> this.props.addPokemonToPage(newPokemon)
      )
  }


  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid onChange={event=>this.handleChange(event)} label="Name" placeholder="Name" name="name" />
            <Form.Input fluid onChange={event=>this.handleChange(event)} label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid onChange={event=>this.handleChange(event)} label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid onChange={event=>this.handleChange(event)} label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
