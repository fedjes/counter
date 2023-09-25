import React, { ChangeEvent, useEffect, useState } from 'react';
import styled from 'styled-components';

type InputropsType = {
    title: string
    value?: number
    change?: (value: number) => void
    erLesZero: (v:number) =>void
}




export const Input = (props: InputropsType) => {
    const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newValueInput = e.currentTarget.value;
        if(+newValueInput < 0) {
            props.erLesZero(+newValueInput)
        }
        if(props.change && newValueInput) {
            props.change(JSON.parse(newValueInput)); //fix
        }

    }


    return (
        <div>
            <h2>{props.title}</h2>
            <input type='number' onChange={changeInputHandler} value={props.value}/>
        </div>
    )
}
