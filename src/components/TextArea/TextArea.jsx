import React from 'react';
import './TextAreaInput.scss'

const TextAreaInput = ({setValue}) => {

  const onChangeInputValue = (text) => {
    setValue(text)
  }

  return (
    <div>
      <textarea className='textarea' onChange={(e) => onChangeInputValue(e.target.value)} name="textarea" cols="10" rows="2"/>
    </div>
  );
};

export default TextAreaInput;