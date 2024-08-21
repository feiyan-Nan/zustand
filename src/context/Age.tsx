import { useState } from 'react';

import { useCommonActivityContext } from './CommonActivityContext';

function Age() {
  const { age, addAge } = useCommonActivityContext();
  console.log('age');
  const onClick = () => {
    addAge(5);
  };
  return (
    <>
      <div>{age}</div>
      <button onClick={onClick}>调用addAge</button>
    </>
  );
}

export default Age;
