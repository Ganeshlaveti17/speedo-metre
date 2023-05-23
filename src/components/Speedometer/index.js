// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {
    count: 0,
  }

  onIncrementCount = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  onBreak = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">Speedometer</h1>
        <div>
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
            alt="Speedometer"
          />
        </div>
        <h1 className="head2">Speed is {count}mph </h1>
        <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            type="button"
            className="accelerate"
            onClick={this.onIncrementCount}
          >
            Accelerate
          </button>
          <button type="button" className="break" onClick={this.onBreak}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
