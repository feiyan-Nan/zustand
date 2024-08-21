import { useMemo, useState } from 'react';
import { useMemoizedFn } from 'ahooks';
import { CommonActivityContext } from './CommonActivityContext';
import Age from './Age';
import Name from './Name';

function ContextExample() {
  const [name, setName] = useState('张三');
  const [age, setAge] = useState(12);

  const addAge = useMemoizedFn((num: number) => {
    setAge((prev) => prev + num);
  });
  const value = useMemo(() => ({ name, age, addAge }), [name, age, addAge]);

  return (
    <CommonActivityContext.Provider value={value}>
      <div>
        <Name />
        <Age />
      </div>
    </CommonActivityContext.Provider>
  );
}

export default ContextExample;
