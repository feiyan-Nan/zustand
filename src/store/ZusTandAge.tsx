import { useState } from 'react';
import { useUserStore } from './ZustandExample';

function ZusTandAge() {
  const { age, addAge } = useUserStore((state) => ({
    age: state.age,
    addAge: state.addAge,
  }));
  // const { age, addAge } = useUserStore();
  console.log('ZusTandAge');
  const onClick = () => {
    addAge(5);
  };

  return (
    <>
      <div>{age}</div>
      <button onClick={onClick}>改变年龄</button>
    </>
  );
}

export default ZusTandAge;
