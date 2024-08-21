import { useState } from 'react';

import { useCommonActivityContext } from './CommonActivityContext';
import Else from './Else';

function Name() {
  const { name, addAge } = useCommonActivityContext();
  console.log('Name');

  return (
    <>
      <Else />
      <div>{name}</div>
    </>
  );
}

export default Name;
