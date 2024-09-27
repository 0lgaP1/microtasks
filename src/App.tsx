import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/button/Button";

// import { MouseEvent } from 'react';

function App() {
    const onClickHandler = (name: string) => {console.log(name)
    }
    const foo1 = () => {
        console.log(100200)
    }
    const foo2 = (num: number) => {
        console.log(num)
    }
    const componentButton1Handler = (subscriber: string, age: number, address: string) => {
        console.log(subscriber, age, address)
    }
    const componentButton2Handler = (subscriber: string) => {
        console.log(subscriber)
    }

    const componentButton3Handler = () => {
        console.log("Stupid button")
    }

    let [a, setA] = useState<number>(0)
    const onClickHandlerForUseState = () => {
        setA(++a);
        console.log(a)
    }

    return (
        <>
            {/*<button onClick={(event:MouseEvent<HTMLButtonElement>)=>{onClickHandler('Jacob')}}>The name of the 1st subscriber</button>*/}
            <button onClick={() => {
                onClickHandler('Jacob')
            }}>The name of the 1st subscriber </button>
            <button onClick={() => {onClickHandler('Jack')}}>The name of the 2nd subscriber</button>
            <button onClick={foo1}>1</button>
            <button onClick={() => {foo2(100200)}}>2
            </button>
            <Button name={"I'm a stupid button"} callBack={componentButton3Handler}/>
            <Button name={"ComponentButton1"} callBack={() => componentButton1Handler('Subscriber Ivan', 22, 'Minsk')}/>
            <Button name={"ComponentButton2"} callBack={() => componentButton2Handler('Subscriber Vasylij')}/>

            <h1>{a}</h1>
            <Button name={"useState Button"} callBack={onClickHandlerForUseState} />
            </>
    );
}

export default App;
