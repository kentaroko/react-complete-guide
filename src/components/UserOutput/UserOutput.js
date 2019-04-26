import React from 'react';
import './UserOutput.css'

const UserOutput = (props) => {
  return (
    <div className="UserOutput">
      <p onClick={props.click}>{props.name}</p>
      <p>very awesome</p>
    </div>
  );
};

export default UserOutput;
