import React from "react";
import GridItem from '../GridItem';

class GridRow extends React.Component{
    constructor(props)
    {
        super(props);
        // console.log("hello i am row",this.props.handlePlayerClick);
    }
    render(){
        // let gridRow = [<GridItem />,<GridItem />,<GridItem />];

        return(
            <div className = "grid-row">
               
            {this.props.row.map((cols,colIndex)=>{
                // console.log("cols are ",{cols});
               return <GridItem rowIndex = {this.props.rowIndex} gameActive = {this.props.gameActive} col = {cols} colIndex = {colIndex} handlePlayerClick = {this.props.handlePlayerClick}  display = {this.props.display}/>
            } )}
            </div>
       
            
        )
    }
} 

export default GridRow;