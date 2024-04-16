// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoCount: 0,
    bananaCount: 0,
  }

mangoCounts=() => {
  this.setState(prevState =>  ({mangoCount:prevState.mangoCount+1}))
}

bananaCounts=() => {
  this.setState(prevState => 
    ( {bananaCount:prevState.bananaCount+1}))
}

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="main-container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span className="span">{mangoCount}</span> mangoes 
            <span className="span"> {bananaCount}</span> bananas
          </h1>
          <div className="button-container">
            <div className="container1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image1"
              />
              <br />
              <button className="button" onClick={this.mangoCounts}>Eat Mango</button>
            </div>
            <div className="container1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image1"
              />
              <br />
              <button className="button" onClick={this.bananaCounts}>Eat Banana</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
