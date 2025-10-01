import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    total: 0,
    heads: 0,
    tails: 0,
    activeUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        total: prevState.total + 1,
        heads: prevState.heads + 1,
        activeUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      this.setState(prevState => ({
        total: prevState.total + 1,
        tails: prevState.tails + 1,
        activeUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const {total, heads, tails, activeUrl} = this.state

    return (
      <div className="container">
        <div className="toss-card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img className="toss-img" src={activeUrl} alt="toss result" />
          <button
            className="toss-button"
            onClick={this.onTossCoin}
            type="submit"
          >
            Toss Coin
          </button>
          <div className="toss-count">
            <p>Total: {total}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
