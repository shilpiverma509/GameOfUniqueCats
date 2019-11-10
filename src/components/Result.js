import React from "react";

class Result extends React.Component{

  constructor(props){
    super(props);
    this.state={
      isOpen:true
    }
  }

  closeResult = (e)=>{
    e.preventDefault();
    this.setState({
      isOpen:false
    })
  }

  render(){
    let alert;
    for(var i=0;i<this.props.rightGrid.length;i+=3){ 
      var uniqueArr=[];
        uniqueArr.push(this.props.rightGrid[i],this.props.rightGrid[i+1],this.props.rightGrid[i+2])
        if(uniqueArr.length !== new Set(uniqueArr).size){
          alert = "You Lose";
          break;
        }
    }
  if(!alert){
    alert = "You Win";
  }
    if( !this.state.isOpen){
      return null
    }
    return (
      <>
      <div className="result-text-wrapper">
        <div className="result-text">
        <h1 className="alert-text">{alert}</h1>
        <button className="close " onClick={(e)=>this.closeResult(e)}>X</button>
        </div>
      </div>
    </>
    )
  }
}

export  default Result;