import React from 'react';
import styled from 'styled-components';

type AreaPropsType = {
    value: number
}

export const Area = (props: AreaPropsType) => {
   let maxValLocal = localStorage.getItem('valueMaxLocal')
   let newLocalFiltredValue = 0;
   if(maxValLocal) {
    newLocalFiltredValue = JSON.parse(maxValLocal)

   }
        return (
            <StyledArea className={props.value === newLocalFiltredValue ? 'colorInput' : ''}>
                <h1>{props.value}</h1>
            </StyledArea>
        )
    }


    const StyledArea = styled.div`
    height: 100px;
    max-width: 400px;
    border: 1px solid black;
    background-color: lightgreen;
    text-align: center;
`