import React from 'react';

function Item(props) {
    return(
      <div className="item-card">
        <div className="item-photo">
          <img src={props.image} />
        </div>
        <div className="item-content">
          <h5>{props.name}</h5>
        </div>
      </div>
    
    )
  }
export default Item;