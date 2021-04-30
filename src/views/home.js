import React from 'react'
import Card from '../components/card'
import Modal from '../components/custom-modal'
import '../css/home.css'
import cogoToast from 'cogo-toast';

// Global var selected to hold selected movie IDs
export var selected = localStorage.getItem('selected') ? JSON.parse(localStorage.getItem('selected')) : []

if (localStorage.getItem("selected")) {
  if (JSON.parse(localStorage.getItem("selected")).length > 0) { cogoToast.info("Movies loaded from storage") }
}

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: [
        <Card num="1" home={this}/>,
        <Card num="2" home={this}/>,
        <Card num="3" home={this}/>,
        <Card num="4" home={this}/>,
        <Card num="5" home={this}/>,
      ],
      showBanner: selected.length === 5 ? true : false,
    }
    this.submitModal = React.createRef()
  }

  render() {
    if (this.state.showBanner === false) {
      if (this.banner) { this.banner.hide() }
    } else {
      this.banner = cogoToast.info("You have selected 5 movies!", {hideAfter: 0})
    }

    return (
      <div>
        <h1 class="title">The Shoppies</h1>
        <h3>Nominate your top 5 movies for a Shoppie award!</h3>
          {this.state.cards}
        <div class="submitButtonContainer">
          <button 
            onClick={() => {this.submitModal.current.openModal()}}
            class="submitButton">Submit</button>
        </div>
        <Modal id="submitModal" name="Thanks!" ref={this.submitModal}>
          <div class="about">
            <p>Currently, ths submit button does not actually do anything, but in a real application, this would be the point where a PUT request with the JSON stringified data would be sent to a server. The data would then be parsed and added to a database of some sort.</p>
            <p><strong>About</strong></p>
            <p>This simple web app is built with React. All components were made from scratch, and make use of numerous React states and props.</p>
            <a href="https://github.com/Nicholas-Chong/shopifychallenge">Check out the source code on GitHub</a>
            <p><strong>To Recruiters</strong></p>
            <p>I have a few other projects that showcase my skills as a developer. My favourite project thus far is my COVID-19 dashboard, built with a headless Python Django backend and a React front end. The project has seen 7500+ unique users over it's lifetime! I've also built a corresponding Python Twitter bot that tweets out daily COVID-19 updates.</p>
            <p><a href="https://nicholas-chong.github.io/" target="_blank" rel="noreferrer">Personal website</a></p>
            <p><a href='https://twitter.com/OntarioCovid19' target="_blank" rel="noreferrer">@OntarioCovid19 Twitter Bot Account</a></p>
            <p><a href="https://github.com/Nicholas-Chong/covid-data-api" target="_blank" rel="noreferrer">COVID-19 Dashboard Python Django backend and Twitter Bot</a></p>
            <p><a href="https://github.com/Nicholas-Chong/covid-data-api" target="_blank" rel="noreferrer">COVID-19 Dashboard React frontend</a></p>
          </div>
        </Modal>
        <div class="footer">
          <a 
            href="https://github.com/Nicholas-Chong/shopifychallenge" 
            target="_blank" rel="noreferrer" 
            style={{color: "black"}}>
            <i class="bx bxl-github"/>
          </a>
        </div>
      </div>
    )
  }
}

export default Home