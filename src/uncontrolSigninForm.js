import React, { Component, createRef } from "react";
import {Form, FormGroup, Input, Label} from "reactstrap"

export class UncontrolSigninForm extends Component {
  constructor(props) {
    super(props);
    this.username = createRef();
    this.password = createRef();
    this.check = createRef();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const username = this.username.current.value;
    const password = this.password.current.value;
    const check = this.check.current.Input
    const value = { username, password, check };
    console.log(value);

  }
  render() {
    return (
      <div className="Container">
        <Form className="form" onSubmit={this.handleSubmit}>
          <input
            name="Username"
            placeholder="Username"
            ref={this.username}
            required
          ></input>
          <input
            name="Password"
            placeholder="Password"
            ref={this.password}
            required
          ></input>
          <FormGroup check className="check">
            <Input type="checkbox" className="check" ref={this.check} />
            <Label check>Remember me</Label>
            <a href="/" className="forgotPassword">
              Forgot password?
            </a>
          </FormGroup>
          <button className="button">Sign In</button>
        </Form>
      </div>
    );
  }
}

export default UncontrolSigninForm