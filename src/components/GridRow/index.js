import React from "react";
import GridItem from '../GridItem';

class GridRow extends React.Component{
    constructor(props)
    {
        super(props);
        console.log("My Index is ",this.props.rowIndex);
    }
    render(){
        // let gridRow = [<GridItem />,<GridItem />,<GridItem />];

        return(
            <div className = "grid-row">
            {this.props.row.map((cols,colIndex)=>{
                console.log("cols are ",{cols});
               return <GridItem rowIndex = {this.props.rowIndex} col = {cols} colIndex = {colIndex} handlePlayerClick = {this.props.handlePlayerClick} />
            } )}
            </div>
       
            
        )
    }
} 

export default GridRow;