
import React, { Component } from 'react';
import { Input, Button } from '@material-ui/core';

const divStyle = {
  width: "100%", 
  textAlign: "center", 
  paddingTop: "45px"
}

const buttonStyle = {
  marginTop: "15px"
}

class Login extends Component {
  state = {
    username: '',
    password: ''
  }


  handleTextChange = (event) => {
    const state = { ...this.state };
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    document.cookie = 'loggedIn=true';
    this.props.setUser(this.state.username);
    this.props.history.push('/listings');
  }

  render() {
    return (
      <div style={divStyle}>
        <form action="" onSubmit={this.handleSubmit}>
          <Input
            required
            placeholder="username"
            onChange={this.handleTextChange}
            value={this.state.username}
            name="username"
            >
          </Input>
          <br />
          <Input
            required
            placeholder="password"
            onChange={this.handleTextChange}
            value={this.state.password}
            name="password"
            type="password"
            >
          </Input>
          <br />
          <Button 
            type="submit"
            variant="contained"
            style={buttonStyle}
            >login
          </Button>
        </form>
      </div>
    )
  }
}

export default Login;