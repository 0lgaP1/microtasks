import React from 'react';
import './App.css';
import { MouseEvent } from 'react';

function App() {
    const onClickHandler = (name: string) => {
        console.log(name)
    }
  return (
      <>
          <button
              onClick={(event:MouseEvent<HTMLButtonElement>)=>{onClickHandler('Jacob')}}>The name of the 1st subscriber</button>
      </>
  );
}

export default App;
