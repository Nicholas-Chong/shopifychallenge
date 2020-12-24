import React from 'react'
import Skylight from 'react-skylight'
import NominationModal from './nominationModal'
import '../css/card.css'
import {selected} from '../views/home'

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasNomination: false,
      nominatedMovie: "",
      rank: props.num,
      imdbID: -1,
      release:-1,
    }
    this.modal = React.createRef()
  }

  newNomination() {
    this.setState({hasNomination: true})
  }

  reset() {
    const position = selected.indexOf(this.state.imdbID)
    selected.splice(position, 1)
    this.setState({hasNomination: false})
    if (selected.length < 5) {this.props.home.setState({showBanner: false})}
  }

  render() {    
    if (this.state.hasNomination === false) {
      return (
        <div class="card">
          <div class="cardnum">
            <h1>{this.props.num}</h1>
          </div>
          <div class="detail" onClick={() => this.modal.current.show()} >
            <h2>Click here to nominate your no.{this.props.num} movie</h2>
            <p></p>
            <p></p>
          </div>
          <div class="trashButton" style={{visibility: 'hidden'}} onClick={this.reset.bind(this)}>
            <i class='bx bxs-trash' ></i>
          </div>
          <div class='modal'>
            <Skylight 
              hideOnOverlayClicked 
              ref={this.modal} 
              title={`Nominate your no.${this.props.num} movie`}>
              <NominationModal card={this}/>
            </Skylight>
          </div>
        </div>
      )
    }

    if (this.state.hasNomination === true) {
      return (
        <div class="card">
          <div class="cardnum">
            <h1>{this.props.num}</h1>
          </div>
          <div class="movieDetail">
            <h2>{this.state.nominatedMovie}</h2>
            <p>{this.state.release}</p>
            <p>{`IMDB ID: ${this.state.imdbID}`}</p>
          </div>
          <div class="trashButton" onClick={this.reset.bind(this)}>
            <i class='bx bxs-trash' ></i>
          </div>
          <div class='modal'>
            <Skylight 
              hideOnOverlayClicked 
              ref={this.modal} 
              title={`Nominate your no.${this.props.num} movie`}>
              <NominationModal card={this}/>
            </Skylight>
          </div>
        </div>
      )
    }
  }
}

export default Card