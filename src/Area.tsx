import React from 'react';
import styled from 'styled-components';

type AreaPropsType = {
    value: number
    error: string
}

export const Area = (props: AreaPropsType) => {
  
        return (
            <StyledArea className={props.error ? 'colorInput' : ''}>
                <h1>{props.error ? props.error : props.value}</h1> 
            </StyledArea>
        )
    }
    // || props.value === 0

    const StyledArea = styled.div`
    height: 100px;
    max-width: 400px;
    border: 1px solid black;
    background-color: lightgreen;
    text-align: center;
`