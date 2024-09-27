type ButtonPropsType = {
    name: string
    callBack: ()=>void
}

export const Button = (props: ButtonPropsType) => {
    const onClickHandler = () => {
        return props.callBack()
    }

    return <button onClick={onClickHandler}>{props.name}</button>
}