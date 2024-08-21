import React, { useState } from 'react';

function Else() {
  console.log('Else');

  return (
    <>
      <div>{'else'}</div>
    </>
  );
}

export default React.memo(Else);
