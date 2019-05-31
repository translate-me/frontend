import React from "react";
import { render } from "react-dom";


let breakpoints = [];
let styles;

export class Breakpoints extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia nibh ut arcu dignissim malesuada. Cras fermentum cursus augue vitae. ",
      fragments: []
    };
  }

  onMouseUp = e => {
    const position = e.target.selectionStart;
    const text = e.target.value;

    breakpoints.push(position)

    console.log(position);
    console.log('breakpoints: ', breakpoints)

    let array = Array.from(text)
    array[position - 1] = array[position - 1] + '🔴'
    // console.log('array: ', array)

    let newArray = array.join('')
    // console.log('newArray: ', newArray)

    this.setState({
      value: newArray
    })
  };

  sendFragment = () => {
    const completeText = this.state.value
    const fragments = completeText.split('🔴')
    
    console.log(fragments)

    this.setState({
      fragments: fragments
    })

    console.log('state.frags', this.state.fragments)
  }

  onChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    return (
      <div>
        <textarea
          style={styles.textArea}
          id="my-input"
          onChange={this.onChange}
          value={this.state.value}
          onMouseUp={this.onMouseUp}
        />
        <button id="send-fragment" onClick={this.sendFragment}>
          Enviar Fragmentos
        </button>
      </div>

    );
  }
}

styles = {
  textArea: {
    width: '100%',
  }
};



export default Breakpoints;