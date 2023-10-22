import React, { ChangeEvent, useEffect, useState } from 'react';
import styled from 'styled-components';

type InputropsType = {
    title: string
    value?: number
    onChange: (value:string, event:ChangeEvent<HTMLInputElement>) => void
}




export const Input = (props: InputropsType) => {
 const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        props.onChange(e.currentTarget.value, e)   
    }
    // const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     let newValueInput = e.currentTarget.value;
    //     if(+newValueInput < 0) {
    //         props.erLesZero(+newValueInput)
    //     }
    //     else if (props.change && newValueInput) {
    //         props.change(JSON.parse(newValueInput)); //fix
    //         // props.erLesZero(0)
    //     }

    // }


    return (
        <div>
            <h2>{props.title}</h2>
            <input type='number' onChange={onChangeHandler} value={props.value}/>
        </div>
    )
}
