import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {darkMode: false}

  LightDarkMode = () => {
    this.setState(prevState => ({darkMode: !prevState.darkMode}))
  }

  render() {
    const {darkMode} = this.state
    const cardClass = darkMode ? 'dark-card' : 'light-card'
    const hdngClass = darkMode ? 'light-heading' : 'dark-heading'
    return (
      <div className="container">
        <div className={`card ${cardClass}`}>
          <h1 className={`${hdngClass}`}>Click to change mode</h1>
          {darkMode && (
            <button
              type="button"
              className="light-button"
              onClick={this.LightDarkMode}
            >
              Light Mode
            </button>
          )}
          {!darkMode && (
            <button
              type="button"
              className="dark-button"
              onClick={this.LightDarkMode}
            >
              Dark Mode
            </button>
          )}
        </div>
      </div>
    )
  }
}

export default LightDarkMode
