import React, { ChangeEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './Button';
import { Area } from './Area';
import styled from 'styled-components';
import { Input } from './Input';

function App() {

  const [inputMinLocal, setInputMinLocal] = useState<number>(0);
  const [inputMaxLocal, setInputMaxLocal] = useState<number>(0);

  let minValue = 0;
  let maxValue = 5;
  const [value, setValue] = useState<number>(0);
  // const [btnValue, setBtnValue] = useState<boolean>(false)


  const incre = () => {
    if (value < inputMaxLocal) {
      setValue(value + 1);
    }
  }

  const reset = () => {
    let minValueCounterArea = localStorage.getItem('valueMinLocal')
    if(minValueCounterArea) {
      setValue(JSON.parse(minValueCounterArea));
    }
  }

  const setLocalSt = () => {
    // let localV = JSON.stringify(value)
    // // console.log({localV});
    // localStorage.setItem('localV', localV)
    // console.log();
    localStorage.setItem('valueMaxLocal', JSON.stringify(inputMaxLocal))
    localStorage.setItem('valueMinLocal', JSON.stringify(inputMinLocal))
    setValue(inputMinLocal)
    
  }

  const testSetValueMax = (value:number) => {
    setInputMaxLocal(value)
  }

  const testSetValueMin = (value:number) => {
    setInputMinLocal(value)
  }
 

  return (
    <div className="App">
      <div>
        <Area value={value} />
        <Wrapper>
          <Button title="incre" clbk={incre} dis={value === maxValue} />
          <Button title="reset" clbk={reset} dis={value === minValue} />
        </Wrapper>
        settings
        <WrapperInput>
          <Input title={"Max Value"}  value={inputMaxLocal} change={testSetValueMax}/>  
          <Input title={"Start Value"} value={inputMinLocal}  change={testSetValueMin}/>
          <Button title='set' set={setLocalSt}/>
        </WrapperInput>
      </div>
    </div>
  );
}

export default App;


const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    border: 1px solid black;
    max-width: 400px;
    height: 50px;
    align-items: center;
`
const WrapperInput = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    max-width: 400px;
    align-items: center;
   
`