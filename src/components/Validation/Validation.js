import React from 'react';

const Validation = (props) => {
  let outPutText = '';
  if (props.length <= 5) {
    outPutText = 'Text too short';
  } else {
    outPutText = 'Text long enough';
  }

  return (
    <p>{outPutText}</p>
  );
};

export default Validation
