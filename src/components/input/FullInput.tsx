import {ChangeEvent, useState} from "react";

type FullInputPropsType = {
    addMessage: ()=>void
}

const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    console.log((event.currentTarget.value))
}

export const FullInput = (props: FullInputPropsType) => {
    let [title, setTitle] = useState<string>('')
    return (
            <div>
                <input onChange={onChangeInputHandler}/>
                <button onClick={()=>{}}>+</button>
            </div>
    );
};