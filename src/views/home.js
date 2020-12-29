import React from 'react'
import Card from '../components/card'
import Skylight from 'react-skylight'
import '../css/home.css'
import cogoToast from 'cogo-toast';

// Global var selected to hold selected movie IDs
export var selected = []

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
      showBanner: false,
    }
    this.submitModal = React.createRef()
  }

  render() {
    if (this.state.showBanner === false) {
      var message = "Please select 5 movies first!"
      if (this.banner) { this.banner.hide() }
    } else {
      message = "Thank You!"
      this.banner = cogoToast.info("You have selected 5 movies!", {hideAfter: 0})
    }

    return (
      <div>
        <h1 class="title">The Shoppies</h1>
        <h3>Nominate your top 5 movies for a Shoppie award!</h3>
          {this.state.cards}
        <div class="submitButtonContainer">
          <button 
            onClick={() => this.submitModal.current.show()}
            class="submitButton">Submit</button>
        </div>
        <Skylight
          hideOnOverlayClicked 
          ref={this.submitModal} 
          title={message}>
          <div class="about">
            <p>Currently, ths submit button does not actually do anything, but in a real application, this would be the point where a PUT request with the JSON stringified data would be sent to a server. The data would then be parsed and added to a database of some sort.</p>
            <h2>About</h2>
            <p>This simple web app is built with React. Almost all components were made from scratch, and make use of numerous React states and props.</p>
            <a href="https://github.com/Nicholas-Chong/shopifychallenge">Check out the source code on GitHub</a>
            <h2>To Recruiters:</h2>
            <p>I have a few other projects that showcase my skills as a developer. Please checkout my personal website to learn more about them! </p>
            <a href="https://nicholas-chong.github.io/" target="_blank" rel="noreferrer">Personal website</a>
          </div>
        </Skylight>
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