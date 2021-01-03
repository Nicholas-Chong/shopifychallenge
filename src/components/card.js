import React from 'react'
import Skylight from 'react-skylight'
import NominationModal from './nominationModal'
import '../css/card.css'
import {selected} from '../views/home'

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasNomination: localStorage.getItem(`nomi${props.num}`) ? true : false,
      nominatedMovie: localStorage.getItem(`nomi${props.num}`) ? JSON.parse(localStorage.getItem(`nomi${props.num}`)).nominatedMovie : "",
      rank: props.num,
      imdbID: localStorage.getItem(`nomi${props.num}`) ? JSON.parse(localStorage.getItem(`nomi${props.num}`)).imdbID : -1,
      release: localStorage.getItem(`nomi${props.num}`) ? JSON.parse(localStorage.getItem(`nomi${props.num}`)).release : -1,
    }
    this.modal = React.createRef()
  }

  /**
   * Reset
   * 
   * Resets the card to its default state. Removes the nomination IMDB ID from 
   * the list of nominated IDs. Checks to see if the num of nominations is 
   * greater/less than 5 and displays the banner accordingly.
   */
  reset() {
    const position = selected.indexOf(this.state.imdbID)
    selected.splice(position, 1)

    localStorage.setItem("selected", JSON.stringify(selected))
    localStorage.removeItem(`nomi${this.props.num}`)
    
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