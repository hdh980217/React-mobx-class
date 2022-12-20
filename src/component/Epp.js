import { observer } from 'mobx-react';
import React from 'react';
import ageStore from '../modules/ageStore';
import Fpp from './Fpp';


const Epp = observer(() => {

    const onClickIncreaseAge = () => {
        ageStore.increaseAction(100);
    }

    const onClickDecreaseAge = () => {
        ageStore.decreaseAction(100);
    }

    return (
        <div id='container2'>
            <h1>Epp</h1>
            <p>2번 값 : {ageStore.age}</p>

            <button onClick={onClickIncreaseAge}>증가</button>
            <button id='button1' onClick={onClickDecreaseAge}>감소</button>
            <Fpp/>
        </div>
    )
})

export default Epp;