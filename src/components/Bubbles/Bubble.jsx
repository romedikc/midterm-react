import React from 'react';
import './Bubble.scss'

const Bubbles = ({text}) => {
  return (
    <div className="wrapper">
        {
            text.split('').map(letter => {
                return <div><span className="letter">{letter}</span><span className="dot"></span></div>
            })
        }
    </div>
  );
};

export default Bubbles;