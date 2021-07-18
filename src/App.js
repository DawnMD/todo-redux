import React, { Component } from "react";
import { addCard,removeCard} from './actions'
import { connect } from "react-redux";
import { Field, reduxForm } from 'redux-form'
import { compose} from 'redux'

class App extends Component {
  addCardHandler = (formProps) => {
    this.props.reset()
    this.props.addCard(formProps.card)
  }
  render() {
    console.log(this.props)
    return (
      <div >
        <form onSubmit={ this.props.handleSubmit(this.addCardHandler) }>
          <label htmlFor='card'>Enter Todo List Name</label>
          <Field name="card" component="input" type="text" placeholder='Name'/>
          <button>Add</button>
        </form>
        <div>
          <h2>Todo Cards</h2>
          {this.props.cardWithItems.card && this.props.cardWithItems.card.map(cardName => <div key={ cardName}>{ cardName}</div>)}
        </div>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { cardWithItems:state}
}

export default compose(
  connect(mapStateToProps, { addCard,removeCard }),
  reduxForm({
    form: "card",
  })
)(App);