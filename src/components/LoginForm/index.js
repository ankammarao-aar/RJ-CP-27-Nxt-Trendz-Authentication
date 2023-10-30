// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', errorMsg: ''}

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess()
      this.setState({username: '', password: ''})
    } else {
      const error = data.error_msg
      this.setState({errorMsg: error})
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, errorMsg} = this.state

    return (
      <div className="login-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="website-login-img"
        />

        <form className="form" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-logo"
          />
          <div className="input-container">
            <label htmlFor="username" className="label-username">
              USERNAME
            </label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              className="input-username"
              onChange={this.onChangeUsername}
            />
            <label htmlFor="password" className="label-username">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              className="input-username"
              onChange={this.onChangePassword}
            />
            <button type="submit" className="login-button">
              Login
            </button>
            <p className="error-msg">*{errorMsg}</p>
          </div>
        </form>
      </div>
    )
  }
}

export default LoginForm
