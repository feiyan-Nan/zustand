import React, { useContext } from 'react';

interface CommonActivityContextValue {
  name: string;
  age: number;
  addAge: (value: number) => void;
}

export const CommonActivityContext =
  React.createContext<CommonActivityContextValue>(
    {} as CommonActivityContextValue
  );

export const useCommonActivityContext = () => useContext(CommonActivityContext);

export default CommonActivityContextValue;
