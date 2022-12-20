import { makeAutoObservable } from 'mobx';

class testStore {
    // state
    test = {
        code : '문자열입니다.'
    }

    constructor() {
        makeAutoObservable(this)
    }

    // action
    writeCode(code) {
        console.log('action call');
        this.test.code = code;
    }
}

export default new testStore();