import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as waitingActions from "../store/modules/waiting";
import WaitingList from "../components/WaitingList";

class WaitingListContainer extends Component {
  handleChange = e => {
    const { WaitingActions } = this.props;
    const length = e.target.value.length;

    if (length > 1) {
      WaitingActions.disableButton(false);
    } else {
      WaitingActions.disableButton(true);
    }
    WaitingActions.changeInput(e.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();
    const { WaitingActions, input, disable } = this.props;
    WaitingActions.disableButton(!disable);
    WaitingActions.create(input);
    WaitingActions.changeInput("");
  };

  handleEnter = id => {
    const { WaitingActions } = this.props;
    WaitingActions.enter(id);
  };

  handleLeave = id => {
    const { WaitingActions } = this.props;
    WaitingActions.leave(id);
  };

  render() {
    const { input, list, disable } = this.props;
    return (
      <WaitingList
        input={input}
        waitingList={list}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        onEnter={this.handleEnter}
        onLeave={this.handleLeave}
        disable={disable}
      />
    );
  }
}

const mapStateToProps = ({ waiting }) => ({
  input: waiting.input,
  list: waiting.list,
  disable: waiting.disable
});

const mapDispatchProps = dispatch => ({
  WaitingActions: bindActionCreators(waitingActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchProps
)(WaitingListContainer);
