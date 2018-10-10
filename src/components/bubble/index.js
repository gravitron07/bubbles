import React from 'react'

import './index.css';

export default (props) => (
  <div className="bubbleContainer" id={props.bubbleId}>
    <div onClick={props.clickHandler.bind(this, props.bubbleId)} className="bubble" style={{
      background: props.color,
      width: props.name.length * 11 + 'px',
      height: props.name.length * 11 + 'px'
     }}>
      <span>{props.name}</span>
    </div>
  </div>
)
