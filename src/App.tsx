import React, { ChangeEvent, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './Button';
import { Area } from './Area';
import styled from 'styled-components';
import { Input } from './Input';


//исправить увеличение счётчика до сетания локалСторэдж?
//при значении 0 должна быть разблокированна кнопка Увеличения счетчика ? 

//при совпадении стартового и максимального значения в поле отображения счётчика должна быть ошибка "не корректное значение"


function App() {

  // let maxFalse = null;
  // let minFalse = null;
  const [lessZero, setLessZero] = useState(false)
  const [error, setError] = useState('')
  // console.log(lessZero);

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

  // const testSetValueMax = (value: number) => {

  //   // if (value < 0) {
  //   //   console.log('less 0 max');
  //   //    minFalse = false
  //   // } else {
  //   // }
  //   setInputMaxLocal(value)
  // }

  // const testSetValueMin = (value: number) => {
  //   // if (value < 0) {
  //   //   console.log('less 0 max');
  //   //    maxFalse = false
  //   // } else {
  //   // }
  //   setInputMinLocal(value)
  // }

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



  const changeInputMaxHandler = (value: string, e: ChangeEvent<HTMLInputElement>) => {
    let newValueInput = value;
    if (Number(e.currentTarget.value) === minValue) {
      setError('change value')
    }
    else if (+newValueInput < 0) {
      setLessZero(true)
      setError('Max valu is not correct')
    } else {
      setLessZero(false)
    }
    setInputMaxLocal(JSON.parse(newValueInput)); //fix
  }

  const changeInputMinHandler = (value: string, e: ChangeEvent<HTMLInputElement>) => {
    let newValueInput = value;
    if (Number(e.currentTarget.value) === maxValue) {
      setError('change value')
    }

    else if (+newValueInput < 0) {
      setLessZero(true)
      setError('Min valu is not correct')
    } else {
      setLessZero(false)
    }
    setInputMinLocal(JSON.parse(newValueInput))
  }

  //area Error
  // let maxValLocal = localStorage.getItem('valueMaxLocal')
  // let newLocalFiltredValue = 0;
  // if (maxValLocal) {
  //   newLocalFiltredValue = JSON.parse(maxValLocal)
  // }

  // button Error

  // let trueValue = null;
  // let falseValue = null;
  // if(lessZero) {
  //   trueValue = true;
  // }
  // console.log(inputMinLocal);

  // disabled errors
  const falseButton = minValue === maxValue;
  const errButtonSet = minValue !== 0 || maxValue !== 0;
  return (
    <div className="App">
      <div>
        <Area value={value} error={error} />
        <Wrapper>
          {/* || !localStorage.getItem('valueMaxLocal') */}
          <Button title="incre" clbk={incre} dis={falseButton || lessZero} />
          {/* || !localStorage.getItem('valueMinLocal') */}
          <Button title="reset" clbk={reset} dis={falseButton || lessZero} />
        </Wrapper>
        settings
        <WrapperInput>
          <Input title={"Max Value"} value={inputMaxLocal} onChange={changeInputMaxHandler} />
          <Input title={"Start Value"} value={inputMinLocal} onChange={changeInputMinHandler} />
          <Button title={'set'} set={setLocalSt} dis={falseButton || lessZero || errButtonSet} />
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