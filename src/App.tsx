import { useState } from 'react';
import './App.css';
import ContextExample from './context/ContextExample';
import ZustandExample from './store/ZustandExample';
import Eg1 from './eg1/Eg1';
import Callback from "./Callback.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/* <ContextExample /> */}
        {/* <ZustandExample />*/}
        <Eg1 />
        <Callback></Callback>
      </div>
    </>
  );
}

export default App;
