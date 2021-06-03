import React from 'react';


class Item extends React.Component {
  render() {
    return(
      <div className="item-card">
        <div className="item-photo">
          <img src={`${process.env.PUBLIC_URL}/logo1.jpeg`}  alt="アイコン" />
        </div>
        <div className="item-content">
          <h4>{this.props.name}</h4>
        </div>
      </div>
    
    )
  }
}
export default Item;