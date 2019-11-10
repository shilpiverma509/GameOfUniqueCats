import React from "react";


class RightGrid extends React.Component{

  render(){
    let CatRightGrid = [];
    for(let i=0;i<this.props.gridLength;i++){
      CatRightGrid.push(
        <div className="right-grid-box"
         style={{backgroundImage:this.props.gridArray[i]?`url(${this.props.gridArray[i]})`:null}}
         />
      )
    }
    return (
      <div className="right-grid-wrapper">
        {CatRightGrid}
      </div>
    )
  }
}

export default RightGrid;

  