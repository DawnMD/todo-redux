import React, { Component } from "react";
// import styles from "./Input.module.css";
import Button from "../Button/Button";
import { connect } from "react-redux";
import { addCard, addItemToCard } from "../../actions";

class Input extends Component {
  render() {
    return (
      <div>
        <form className="ui form margin-t">
          <div className="field">
            <label>{`Add item to list`}</label>
            <input />
            <div style={{ marginTop: "10px" }}>
              <Button buttonLabel="Add Card" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { def: state.def };
};
export default connect(mapStateToProps, { addCard, addItemToCard })(Input);
