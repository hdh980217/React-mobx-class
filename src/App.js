import { observer } from 'mobx-react';
import React from 'react';
import './App.css'
import Bpp from './component/Bpp';
import Epp from './component/Epp';
import indexStore from './modules/indexStore';

const App = observer(() => {
    return (
      <div id='container'>
        <h1>App</h1>
        <div id='container5'>
          <p>[state 값]</p>
          <p>1번 값 : {indexStore.numberStore.num}</p>
          <p>2번 값 : {indexStore.ageStore.age}</p>
          <p>3번 값 : {indexStore.emailStore.num}</p>
          <p>문자열 : {indexStore.testStore.test.code}</p>
        </div>
        <div id='grid'>
          <Bpp/>
          <Epp />
        </div>
      </div>);
})

export default App;