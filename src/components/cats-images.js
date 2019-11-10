import React from "react";
import Images from './Images';
import RightGrid from "./RightGrid";

class Cats extends React.Component{
  constructor(props){
    super(props);
    this.state={
      rightGrid :[]
    }
  }
  handleClick = (image)=>{
    // if( this.state.rightGrid.indexOf(image.img)=== -1){
      var newArr = this.state.rightGrid.concat(image.img);
      this.setState((prevState)=>({
      rightGrid:[...prevState.rightGrid,image.img]
      }));
  }
  
  render(){
    console.log("state",this.state)

    return (
      <div className="wrapper">
        <div className="images-left-grid">
          <ul className="left-grid">
            {Images.map((image)=>(
              <li className="cat-image" key={image.id}>
                <img src={image.img} onClick={()=>this.handleClick(image)} alt="cat" />
              </li>
            ))}
          </ul>
        </div>
        <RightGrid gridArray={this.state.rightGrid} />
      </div>
    )
  }
}

export default Cats;