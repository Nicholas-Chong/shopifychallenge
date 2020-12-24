import React from 'react' 
import SearchField from 'react-search-field'
import axios from 'axios'
import '../css/modal.css'
import {selected} from '../views/home'

class Option extends React.Component {
  nominate() {
    selected.push(this.props.imdb)
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

  async search(query, card) {
    query = query.replace(/ /g, "+")
    const results = await axios(`http://www.omdbapi.com/?s=${query}&type=movie&apikey=c96ee350`)

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
        />
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