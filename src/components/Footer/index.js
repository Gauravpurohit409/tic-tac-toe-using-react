import React, { Component } from 'react';

class Footer extends Component {

    constructor(props){
      super(props);
    }
    render() {
        return (
            
        <div className = "turn">{this.props.currentPlayer}'s turn is there </div>
      );
    }
}

export default Footer;