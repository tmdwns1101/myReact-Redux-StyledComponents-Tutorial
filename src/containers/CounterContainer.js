import React, { Component } from "react";
import { connect } from "react-redux";
import Counter from "../components/Counter";
import { increment, decrement } from "../store/modules/counter";
import { bindActionCreators } from "redux";

class CounterContainer extends Component {
  handleIncrement = () => {
    this.props.increment();
  };

  handleDecrement = () => {
    this.props.decrement();
  };

  render() {
    const { color, number } = this.props;
    return (
      <Counter
        color={color}
        value={number}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
      />
    );
  }
}

const mapStateToProps = ({ counter }) => ({
  color: counter.color,
  number: counter.number
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ increment, decrement }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer);
