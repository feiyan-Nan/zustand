import { useState } from 'react';
import { useUserStore } from './ZustandExample';
import {useWhyDidYouUpdate} from "ahooks";

function ZusTandAge() {
  const { age, addAge } = useUserStore((state) => ({
    age: state.age,
    addAge: state.addAge,
  }));
  useWhyDidYouUpdate('ZusTandAge', { age, addAge })
  // const { age, addAge } = useUserStore();
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
