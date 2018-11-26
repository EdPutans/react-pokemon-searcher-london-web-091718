import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state={
    front: true
  }

  handleClick = () => {
    this.setState({ front: !this.state.front})
  }

  render() {
    const { pokemon } = this.props
    return (
      <Card>
        <div onClick = {this.handleClick}>
          <div className="image">
            <img src={this.state.front ? pokemon.sprites.front : pokemon.sprites.back} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{ pokemon.name }</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              { pokemon.stats.find(stat=> stat.name==='hp').value }
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
