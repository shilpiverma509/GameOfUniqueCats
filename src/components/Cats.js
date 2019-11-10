import React from "react";
import RightGrid from "./RightGrid";
import LeftGrid from './LeftGrid';
import Result from "./Result";


class Cats extends React.Component{
  constructor(props){
    super(props);
    this.state={
      rightGrid :[],
      numOfCats:12
    } 
  }

  handleClick = (e,image)=>{
    e.preventDefault();
      this.state.rightGrid.length <12 &&
      this.setState((prevState)=>({
      rightGrid:[...prevState.rightGrid,image.img]
      }));
  }
  
  render(){
    const rightGridFilled =  this.state.rightGrid.length === this.state.numOfCats
    return (
      <div className="wrapper">
        <LeftGrid onClick={this.handleClick} />
        <RightGrid gridArray={this.state.rightGrid} gridLength={this.state.numOfCats} />
        {rightGridFilled && <Result gridArray={this.state.rightGrid} length={this.state.rightGrid.length} rightGrid={this.state.rightGrid}/>}
      </div>
    )
  }
}

export default Cats;