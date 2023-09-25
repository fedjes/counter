import React, { ChangeEvent, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './Button';
import { Area } from './Area';
import styled from 'styled-components';
import { Input } from './Input';


//исправить увеличение счётчика до сетания локалСторэдж
//при значении 0 должна быть разблокированна кнопка Увеличения счетчика ? 
//при вводе стартовом значения меньше 0 в поле отображения счётчика должна быть ошибка "не корректное значение"
//при совпадении стартового и максимального значения в поле отображения счётчика должна быть ошибка "не корректное значение"


function App() {

  // let maxFalse = null;
  // let minFalse = null;
  const [lessZero, setLessZero] = useState(0)
  const [equal, setEqual] = useState(0)
  console.log(lessZero);

  const [inputMinLocal, setInputMinLocal] = useState<number>(0);
  const [inputMaxLocal, setInputMaxLocal] = useState<number>(0);

  let minValue = inputMinLocal;
  let maxValue = inputMaxLocal;
  const [value, setValue] = useState<number>(0);



  const incre = () => {

    if (value < inputMaxLocal) {
      setValue(value + 1);
    }
  }

  const reset = () => {
    let minValueCounterArea = localStorage.getItem('valueMinLocal')
    if (minValueCounterArea) {
      setValue(JSON.parse(minValueCounterArea));
    }
  }

  const setLocalSt = () => {
    localStorage.setItem('valueMaxLocal', JSON.stringify(inputMaxLocal))
    localStorage.setItem('valueMinLocal', JSON.stringify(inputMinLocal))
    setValue(inputMinLocal)

  }

  const testSetValueMax = (value: number) => {

    // if (value < 0) {
    //   console.log('less 0 max');
    //    minFalse = false
    // } else {
    // }
    setInputMaxLocal(value)
  }

  const testSetValueMin = (value: number) => {
    // if (value < 0) {
    //   console.log('less 0 max');
    //    maxFalse = false
    // } else {
    // }
    setInputMinLocal(value)
  }

  useEffect(() => {
    let localMinValue = localStorage.getItem('valueMinLocal')
    let localMaxValue = localStorage.getItem('valueMaxLocal')
    if (localMinValue && localMaxValue) {
      let newMinVal = JSON.parse(localMinValue)
      let newMaxVal = JSON.parse(localMaxValue)
      setInputMinLocal(newMinVal)
      setInputMaxLocal(newMaxVal)
      setValue(newMinVal)
    }
  }, [])
  
  console.log({maxValue});
  
  console.log({ minValue });
  console.log({ value });

  return (
    <div className="App">
      <div>
        <Area value={value} lessZero={lessZero} />
        <Wrapper>
          <Button title="incre" clbk={incre} dis={value === maxValue || lessZero > value} />
          <Button title="reset" clbk={reset} dis={value === minValue || lessZero > value} />
        </Wrapper>
        settings
        <WrapperInput>
          <Input title={"Max Value"} value={inputMaxLocal} change={testSetValueMax} erLesZero={setLessZero} />
          <Input title={"Start Value"} value={inputMinLocal} change={testSetValueMin} erLesZero={setLessZero} />
          <Button title='set' set={setLocalSt}  />
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