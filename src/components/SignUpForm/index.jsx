import React, { Component } from "react";
import classNames from "classnames";
import styles from "./SingUpForm.module.scss";

class SingUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nameValue: "",
      emailValue: "",
      passValue: "",
      isNamevalid: false,
    };
  }

  handleNameChange = ({ target: { value } }) => {
    this.setState({
      nameValue: value,
      isNameValid: /[A-Z][a-z]{0,19}(-[A-Z][a-z]{0,19})?/.test(value),
    });
  };

  handlePasswordChange = ({ target: { value } }) => {
    this.setState({ passValue: value });
  };

  submitHandler = e => {
    e.preventDefault();
  };

  render() {
    const { nameValue, emailValue, passValue, isNamevalid } = this.state;
    const nameClassName = classNames(styles.input, {
      [isNameValid ? styles.valid : styles.invalid]: nameValue,
    });
    return (
      <form className={styles.container} onSubmit={this.submitHandler}>
        <label className={styles.inputLabel}>
          Name
          <input
            className={nameClassName}
            type="text"
            placeholder="name"
            name="nameValue"
            value={nameValue}
            onChange={this.handleNameChange}
          />
        </label>
        <label className={styles.inputLabel}>
          Email
          <input
            className={styles.input}
            type="email"
            name="emailValue"
            placeholder="email"
            value={emailValue}
            onChange={this.handleEmailChange}
          />
        </label>
        <label className={styles.inputLabel}>
          Password
          <input
            className={styles.input}
            type="password"
            name="passValue"
            placeholder="password"
            value={passValue}
            onChange={this.handlePasswordChange}
          />
        </label>
        <button type="submit">Sing Up</button>
      </form>
    );
  }
}

export default SingUpForm;
