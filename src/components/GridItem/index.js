import React from "react";

class GridItem  extends React.Component{

    constructor(){
        super(); // by calling super we can access the React.components methods
        this.state ={
          counter:0,
        }
      }

     
    render(){
        return (
            <div className="grid-item" onclick = {()=> {
            
                this.props.handlePlayerClick(this.props.rowIndex,this.props.colIndex);
            }}>
               
               {this.props.col}
            </div> 
        );
    }
}

export default GridItem;