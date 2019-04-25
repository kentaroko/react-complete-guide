import React from 'react';
import './UserInput.css'

const UserInput = (props) => {
  const style = {
    backgroundColor: '#32c8ff'
  }

  return (
    <input style={style} className="UserInput" type="txt" onChange={props.changed} value={props.userName} />
  )
};

export default UserInput;
