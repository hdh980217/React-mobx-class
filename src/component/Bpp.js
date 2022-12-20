import { observer } from 'mobx-react';
import React, { useState } from 'react';
import indexStore from '../modules/indexStore';
import Cpp from './Cpp';

const Bpp = observer(() => {
    const [ text, setText ] = useState("");

    const onClickIncrease = () => {
        indexStore.numberStore.increaseAction(5);
    }

    const onClickDecrease = () => {
        indexStore.numberStore.decreaseAction(5);
    }

    return (
        <div id='container2'>
            <h1>Bpp</h1>
            <p>1번 값 : {indexStore.numberStore.num}</p>

            <button onClick={onClickIncrease}>증가</button>
            <button id='button1' onClick={onClickDecrease}>감소</button>

            <p>문자열 : {indexStore.testStore.test.code}</p>

            <input type='text' onChange={(e) => {setText(e.target.value)}}/>
            <button id='button2' onClick={() => {indexStore.testStore.writeCode(text)}}>전송</button>
            
            <Cpp/>
        </div>
    )
})

export default Bpp;