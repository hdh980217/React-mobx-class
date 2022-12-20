import React from 'react';
import Gpp from './Gpp';
import emailStore from '../modules/emailStore';
import testStore from '../modules/testStore';
import { observer } from 'mobx-react';

const Fpp = observer(() => {

    const onClickIncrease = () => {
        emailStore.increaseAction(5000);
    }

    const onClickDecrease = () => {
        emailStore.decreaseAction(5000);
    }
    console.log('Fpp render');
    return (
        <div id ='container3'>
            <h1>Fpp</h1>
            <p>3번 값 : {emailStore.num}</p>

            <button onClick={onClickIncrease}>증가</button>
            <button id='button1' onClick={onClickDecrease}>감소</button>

            <p>문자열 : {testStore.test.code}</p> 
            <Gpp/>
            
        </div>
    )
})

export default Fpp;