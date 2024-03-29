import React, { Component } from "react";
import './Pay.css'
// Import crad images
import Kapital from "./Kapital.png";
import visa from "./visa.svg";
import master from "./mastercard.svg";
import amex from "./amex.svg";
import disc from "./discover.svg";

const divStyle = {
  width: "66%",
  margin: "auto"
};

// init state
const initState = {
  name: "",
  cardno: "",
  month: "",
  year: "",
  csv: "",
  nameError: "",
  cardnoError: "",
  monthError: "",
  yearError: "",
  csvError: "",
  cardType: '',
  months: [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12"
  ],
  years: [
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029",
    "2030"
  ]
};

class Pay extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });

    if (this.state.cardno) {
      this.validateCreditCardNumber(this.state.cardno);
    }
  }

  handleFormSubmitEvent = () => {
    const isValid = this.validate();
    if (isValid) {
      this.setState(initState);
      this.props.history.push("/processing");
    }
  };

  // Validate the input name
  validateName = inputName => {
    // Regex to match name pattern
    const namePattern = /^[a-zA-Z\-'\s]+/;
    return namePattern.test(inputName) === true;
  };

  // Validate the credit card no
  validateCreditCardNumber = ccNum => {
    const kapitalPattern = /^4169\d{12}$/;
    const visaPattern = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    const mastPattern = /^(?:5[1-5][0-9]{14})$/;
    const amexPattern = /^(?:3[47][0-9]{13})$/;
    const discPattern = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;

    const isKapital = kapitalPattern.test(ccNum) === true;
    const isVisa = visaPattern.test(ccNum) === true;
    const isMast = mastPattern.test(ccNum) === true;
    const isAmex = amexPattern.test(ccNum) === true;
    const isDisc = discPattern.test(ccNum) === true;

    if (isKapital || isVisa || isMast || isAmex || isDisc) {
      if (isKapital) {
        this.setState({ cardType: Kapital });
      } else if (isVisa) {
        this.setState({ cardType: visa });
      } else if (isMast) {
        this.setState({ cardType: master });
      } else if (isAmex) {
        this.setState({ cardType: amex });
      } else if (isDisc) {
        this.setState({ cardType: disc });
      }
    } else {
      this.setState({ cardType: Kapital });
      return false;
    }
    return true;
  };

  handleOnFocus = () => {
    console.log("i ma focuesd");
    this.validateCreditCardNumber(this.state.cardno);
  };

  // Validate the form
  validate = () => {
    console.log("I reborn!!!");
    let nameError = "";
    let cardnoError = "";
    let monthError = "";
    let yearError = "";
    let csvError = "";

    if (!this.state.month) {
      monthError = "Month cannt be empty!";
    }

    if (!this.state.year) {
      yearError = "Year cannot be empty!";
    }

    if (!this.state.csv) {
      csvError = "CSV cannot be empty!";
    }

    let validCardNo = this.validateCreditCardNumber(this.state.cardno);

    console.log("valid card no?", validCardNo);
    if (!validCardNo) {
      cardnoError = "Insert a valid card no!";
    }

    let validName = this.validateName(this.state.name);

    console.log("valid name", validName);
    if (!validName) {
      nameError = "Not a valid name!";
    }

    if (nameError || cardnoError || monthError || yearError || csvError) {
      this.setState({
        nameError,
        cardnoError,
        monthError,
        yearError,
        csvError
      });
      return false;
    }

    return true;
  };

  render() {
    return (
        <div className="payment-form">
        <div className="field">
          <label className="field-label">Customer Name</label>
          <input
            name="name"
            value={this.state.name}
            onChange={event => this.handleUserInput(event)}
            className="input"
            type="text"
            placeholder="Customer Name"
          />
          <div className="error-message">{this.state.nameError}</div>
        </div>

        <div className="field">
          <label className="field-label">Card No</label>
          <input
            value={this.state.cardno}
            onChange={event => this.handleUserInput(event)}
            onBlurCapture={this.handleOnFocus}
            name="cardno"
            className="input"
            type="number"
            placeholder="Card No"
          />
          <div className="error-message">{this.state.cardnoError}</div>
          <figure className="image is-32x32">
            <img src={this.state.cardType} alt="Card Type" />
          </figure>
        </div>

        <div className="field">
          <label className="field-label">Exp Date (Month / Year)</label>
          <div className="columns">
            <div className="column">
              <div className="select">
                <select
                  value={this.state.month}
                  name="month"
                  onChange={event => this.handleUserInput(event)}
                >
                  <option />
                  {this.state.months.map(m => (
                    <option key={m}>{m}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="column">
              <div className="select">
                <select
                  value={this.state.year}
                  name="year"
                  onChange={event => this.handleUserInput(event)}
                >
                  <option />
                  {this.state.years.map(y => (
                    <option key={y}>{y}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="error-message">{this.state.monthError} {this.state.yearError}</div>
        </div>

        <div className="field">
          <label className="field-label">CSV</label>
          <input
            value={this.state.csv}
            onChange={event => this.handleUserInput(event)}
            name="csv"
            className="input"
            type="number"
            placeholder="CSV No"
          />
          <div className="error-message">{this.state.csvError}</div>
        </div>

        <div className="field">
          <button
            onClick={event => this.handleFormSubmitEvent(event)}
            className="button is-primary"
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default Pay;
