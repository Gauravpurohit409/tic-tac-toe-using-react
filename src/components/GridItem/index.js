import React from "react";

class GridItem  extends React.Component{

    constructor(props){
        super(props); // by calling super we can access the React.components methods
        this.state ={
          counter:0,
        }
        // console.log("here we are in gridItem",this.props.handlePlayerClick);
      }

     
    render(){
        return (
            <div className="grid-item" onClick = {()=> {
                if (this.props.gameActive === true)
                  this.props.handlePlayerClick(this.props.rowIndex,this.props.colIndex)

                else{
                    this.props.display(0);
                }
            }}>
               
               {this.props.col}
            </div> 
        );
    }
}

export default GridItem;