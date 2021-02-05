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
      ["","",""],
      ["","",""],
      ["","",""],
      ],
      playerTurn : "X",  
      gameActive: true,
      winner:"",
      winningConditions :[
        [[0,0],[0,1],[0,2]],
        [[1,0],[1,1],[1,2]],
        [[2,0],[2,1],[2,2]],
        [[0,0],[1,0],[2,0]],
        [[0,0],[1,1],[2,2]],
        [[0,1],[1,1],[2,1]],
        [[0,2],[1,2],[2,2]],
        [[0,2],[1,1],[2,0]],
      ]
    }
  }
  
  display = (winner) => {
    if (winner === 1)
    {
      alert("Congratulations! Player1 wins");
    }
    else if (winner === 2)
    {
      alert("Congratulations! Player2 wins");    
    }
    else{
      alert("Draw!");
    }
  }
  check = ()=>{
    // console.log(this);
    let roundWon = false;
    this.setState({
      gameActive : false,
    });
    this.state.winningConditions.map((row,i) =>{
      let a = this.state.gameState[this.state.winningConditions[i][0][0]][this.state.winningConditions[i][0][1]];
      let b = this.state.gameState[this.state.winningConditions[i][1][0]][this.state.winningConditions[i][1][1]];
      let c = this.state.gameState[this.state.winningConditions[i][2][0]][this.state.winningConditions[i][2][1]];
      
      // console.log(this.state.winningConditions[i][0][0],this.state.winningConditions[i][0][1]);
      // console.log(this.state.winningConditions[i][1][0],this.state.winningConditions[i][1][1]);
      // console.log(this.state.winningConditions[i][2][0],this.state.winningConditions[i][2][1]);
      // console.log("here we are");
      // console.log("here we are" ,a,b,c);
      if (a === "" || b === "" || c === "")
      {
        this.setState({
          gameActive : true,
        });
      }
      else if (a === b && b === c){
          let playerWon = this.state.playerTurn;
          this.display((playerWon === "X") ? 1:2);
           this.setState({
             winner:this.state.playerTurn,
           })
      }
    });

  }
 
  handlePlayerClick = (rowIndex,colIndex)=>{

    if (this.state.gameActive === true && this.state.gameState[rowIndex][colIndex] === "")
    {
      console.log(this.state.gameActive); 
      const copiedGameState = [...this.state.gameState];
      copiedGameState[rowIndex][colIndex]= this.state.playerTurn;
      this.setState({
        gameState:copiedGameState,
        playerTurn : this.state.playerTurn === "X"?0:"X",
      });
      this.check();
    }
    
    
    // console.log(this.state.gameActive);
    // here gameActive is not changing after it is changed in check function 
    // but next time when the function is called at that time changes are reflected in
    // it;
   
  }



  
  // handlePlayerClick = (rowIndex,cellIndex) => {
  //   alert("hello");
  // };

  render(){
    return (
      <div id="container">
       <Header/>
        <div id = "board">
          {this.state.gameState.map((row,rowIndex) =>( 
            // console.log(row);
            <GridRow row={row} rowIndex = {rowIndex} gameActive = {this.state.gameActive} handlePlayerClick = {this.handlePlayerClick} display = {this.display} />
          ))}
          
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
