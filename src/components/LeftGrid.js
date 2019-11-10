import React from "react";
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import Images from './Images';


class LeftGrid extends React.Component{

  render(){
    return (
      <div className="images-left-grid">
      <Row>
        {Images.map((image)=>(
          <Col key={image.id} gutter={10} span={3}>
            <img src={image.img} onClick={(e)=>this.props.onClick(e,image)} alt="cat" />
          </Col>
        ))}
      </Row>
    </div>
    )
  }
}

export default LeftGrid;