import React from 'react' 
import SearchField from 'react-search-field'
import axios from 'axios'
import '../css/modal.css'
import {selected} from '../views/home'

class Option extends React.Component {
  /**
   * Nominate
   * 
   * Adds an IMDB ID to the list of selected movies. Hides the popup. Resets
   * the search results area. Sets state of corresponding card to 
   * hasNomination = true. Checks number of nominated movies and displays 
   * banner if greater than 5.
   */
  nominate() {
    selected.push(this.props.imdb)
    localStorage.setItem('selected', JSON.stringify(selected))
    
    localStorage.setItem(
      `nomi${this.props.card.props.num}`, 
      JSON.stringify({nominatedMovie: this.props.title,
      imdbID: this.props.imdb,
      release: this.props.release,
    }))

    this.props.card.modal.current.hide()

    this.props.nomi.setState({results: []})
    this.props.card.setState({
      hasNomination: true,
      nominatedMovie: this.props.title,
      imdbID: this.props.imdb,
      release: this.props.release,
    })

    if (selected.length === 5) {
      this.props.card.props.home.setState({showBanner: true})
    }
  }

  render() {
    if (this.props.noresult === true) {
      return (
        <div class="optionCard">
          <div class="optionTitle">
            <h3>No Results.</h3>
          </div>
        </div>
      )
    }

    const disable = selected.includes(this.props.imdb)
    return (
      <div class="optionCard">
        <div class="optionTitle">
          <h3>{this.props.title}</h3>
          <p>{this.props.release}</p>
        </div>
        <button disabled={disable} class="nominateButton" onClick={this.nominate.bind(this)}>nominate</button>
      </div>
    )
  }
}


class NominationModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      results: []
    }
  }

  /**
   * Search
   * 
   * Sends a request to OMBD API to search for the user's input query. Parses 
   * respose and generates Option components. Re-renders nomination modal via
   * this.setState().
   * 
   * @param {*} query 
   * @param {*} card 
   */
  async search(query, card) {
    query = query.replace(/ /g, "+")
    const results = await axios(`https://www.omdbapi.com/?s=${query}&type=movie&apikey=c96ee350`)

    if (results.data.Response === "False") {
      this.setState({results: [<Option noresult={true}/>]})
    } else {
      var tableRows = []
      results.data.Search.forEach(element => {
        tableRows.push(<Option nomi={this} card={card} title={element.Title} imdb={element.imdbID} release={element.Year}/>)
      });
      this.setState({results: tableRows})
    }
  }

  render() {
    return (
      <div>
        <SearchField
          placeholder='Search for a movie'
          onEnter={(input) => this.search(input, this.props.card)}
          onChange={(input) => this.search(input, this.props.card)}
          onSearchClick={(input) => this.search(input, this.props.card)}/>
        <div id="results">
          <div id="resultschild">
            {this.state.results}
          </div>
        </div>
      </div>
    )
  }
}

export default NominationModal