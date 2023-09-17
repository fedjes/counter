import React, { ChangeEvent, useEffect, useState } from 'react';
import styled from 'styled-components';

type InputropsType = {
    title: string
    value?: number
    // setMin: ()=>void
    // setMax: ()=>void
    change?: (value: number) => void
    // changeM?: (value: number) => void
}

// useEffect(() => {

// },[])


// useEffect(() => {
//     console.log({ value })
//     localStorage.setItem('counter', JSON.stringify(value))
//   }, [value])


export const Input = (props: InputropsType) => {
    const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        
        let newValueInput = e.currentTarget.value;
        if(props.change && newValueInput) {
            props.change(JSON.parse(newValueInput));
        }

        // const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        //     props.changeTaskStatus(t.id, e.currentTarget.checked, props.id);
        // }

        // let newValueInput = e.currentTarget.value;
        // console.log(newValueInput);
        // localStorage.setItem('valu1', JSON.stringify(newValueInput))
    }


    return (
        <div>
            <h2>{props.title}</h2>
            <input type='number' onChange={changeInputHandler} value={props.value}/>
        </div>
    )
}
