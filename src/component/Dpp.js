import { observer } from 'mobx-react';
import React from 'react';
import ageStore from '../modules/ageStore';

const Dpp = observer(() => {
    return (
        <div id='container4'>
            <h1>Dpp</h1>
            <p>2번 값 : {ageStore.age}</p>
            
        </div>
    )
})

export default Dpp;