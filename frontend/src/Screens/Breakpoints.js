import React from "react";
import { render } from "react-dom";


let breakpoints = [];

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export default class Breakpoints extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "hello"
    };
  }

  onMouseUp = e => {
    const position = e.target.selectionStart;
    const text = e.target.value;
    
    breakpoints.push(position)

    console.log(position);
    console.log('breakpoints: ', breakpoints)

    let array = Array.from(text)
    array[position - 1] = array[position - 1] + '*'
    console.log('array: ', array)

    let newArray = array.join('')
    console.log('newArray: ', newArray)

    this.setState({
      value: newArray
    })
  };

  

  onChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    return (
      <textarea
        id="my-input"
        onChange={this.onChange}
        value={this.state.value}
        onMouseUp={this.onMouseUp}
      />
    );
  }
}