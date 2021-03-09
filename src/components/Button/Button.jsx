import React, { Component } from "react";
// import styles from "./Button.module.css";
import { connect } from "react-redux";
import { addCard, addItemToCard } from "../../actions";

class Button extends Component {
  onButtonClick = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <button className="ui primary button" onClick={this.onButtonClick}>
        {this.props.buttonLabel}
      </button>
    );
  }
}
const mapStateToProps = (state) => {
  return { def: state.def };
};
export default connect(mapStateToProps, { addCard, addItemToCard })(Button);
