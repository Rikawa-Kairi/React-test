import React from 'react';
import Item from '../Item'

function Main(pros) {
    return(
      <div className="main">
        <Item 
        name = "レモンサワー"
        image = "/logo1.jpeg"
        ></Item>
        <Item name="生"
        image = "/logo2.jpeg"
        ></Item>
        <Item name="グレープ"
        image = "/logo3.jpeg"
        ></Item>
        <Item name="氷"
        image = "/logo4.jpeg"
        ></Item>
      </div>
    )
  }
export default Main;
