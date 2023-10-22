import React, { useState } from 'react';
import styled from 'styled-components';

type BTNPropsType = {
    title: string
    clbk?: () => void
    dis?: boolean
    set?: () => void
    max?: number
    min?: number
}

export const Button = (props: BTNPropsType) => {
    // console.log(props.dis);
    
    if(props.clbk) {
        return <ButtonWrapper>
        <button disabled={props.dis} onClick={ props.clbk }>
            {props.title}
        </button>
    </ButtonWrapper>
    } else {
        return (
            <ButtonWrapper>
                <button disabled={props.dis} onClick={ props.set }>
                    {props.title}
                </button>
            </ButtonWrapper>
        )
    }
    }
   

const ButtonWrapper = styled.div`
    padding: 30px;
`