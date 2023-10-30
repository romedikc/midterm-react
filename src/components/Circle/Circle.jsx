import React from 'react';
import './Circle.scss'

const Circle = ({text}) => {
  return (
    <div className='container'>
      <div className="platform">
        <div className="plate"></div>
        <div className="plate"></div>
        <div className="panels">

          {
            text.trim() ? text.split('').map(letter => {
              return <div className="panel">{letter}</div>
            }) : 'Text something'.split('').map(letter => {
              return <div className="panel">{letter}</div>
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Circle;