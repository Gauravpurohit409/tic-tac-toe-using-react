import React from "react";
// import logo from './logo.svg';
import './App.css';
import GridRow  from '../GridRow';
import Footer from '../Footer';
import Header from '../Header';
// import Gridrow from "./Gridrow";
class App extends React.Component{
  constructor(){
    super();

    this.state={
      gameState : [
      ["X","",""],
      ["","",""],
      ["","",""],
      ],
      playerTurn : "X",  
    }
  }
   
  handlePlayerClick = (rowIndex,colIndex)=>{
    const copiedGameState = [...this.state.gameState];
    copiedGameState[rowIndex][colIndex]= this.state.playerTurn;
    console.log(copiedGameState);
    this.setState({
      gameState:copiedGameState,
    })
    // playerTurn : this.state.playerTurn === "X"?0:"X";
  }

  render(){
    return (
      <div id="container">
       <Header/>
        <div id = "board">
          {this.state.gameState.map((row,rowIndex) =>{ 
            console.log(row);
            return <GridRow row={row} rowIndex = {rowIndex} onClick = {this.handlePlayerClick}  />;
          })}
          
          {/* <GridRow />
          <GridRow /> 
          <GridRow /> */}
        </div>  
       <Footer currentPlayer = {this.state.playerTurn}/>
      </div>
    )

  }
}
export default App;
