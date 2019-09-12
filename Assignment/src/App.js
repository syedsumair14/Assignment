import React from "react";
import Data from "./Json/index.json";
import Loadable from "react-loadable";
import { getFormData } from "./actions";
import { connect } from "react-redux";
import Header from './components/Header';
import Footer from './components/Footer'
import './App.css'


const Input = Loadable({
  loader: () => import("./components/TextField"),
  loading: () => <div>Loading...</div>
});

class DynamicForm extends React.Component {
  state = {}

  _handleChange = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  componentDidMount() {
    this.props.getFormData(Data);
  }

  componentDidUpdate() {
    if(!this.state.questions){
      this.setState({questions: this.props.questions})
    }
  }
  // runValidations = () => {
  //   let state = this.state
  //   for(let keys in state){
  //     if(this.state[keys].length <1 ){
  //       alert('Fill form properly')
  //     }
  //   }
  // }

  submitForm = () => {
    // this.runValidations()
    alert('Form Submitted')
    this.cancelSubmission()
  }

  cancelSubmission = () => {
    const keys = Object.keys(this.state)
    const keysReset = keys.reduce((acc, v) => ({ ...acc, [v]: undefined }), {})
    this.setState({...keysReset})
  }

  renderForm = () => {
    return (
      this.state.questions &&
      this.state.questions.map(input => {
          return (
            <span key={input.key}>
            <Input
              type={input.type}
              stateName={input.key}
              title={input.title}
              options={input.options}
              placeholder={input.placeholder}
              value={this.state[input.key]}
              _handleChange={this._handleChange}
            />
            </span>
          );
      })
    );
  };

  render() {
    const actions = Data.form.actions
    return <>
    <Header />
    <div className="container box">
    {this.renderForm(Data)}
    </div>
    <Footer cancelForm={this.cancelSubmission} submitForm={this.submitForm} buttons={actions} />
    </>
  }
}

const mapStateToProps = (state, ownProps) => {
  let formFields = state.dataReducer;
  let questions = formFields.form.questions;
  let actions = formFields.form.actions;
  return {
    questions,
    actions
  };
};

export default connect(
  mapStateToProps,
  { getFormData }
)(DynamicForm);
