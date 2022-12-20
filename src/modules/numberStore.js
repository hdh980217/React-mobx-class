import { makeAutoObservable } from 'mobx';

class NumberStore {
    // state
    num = 1000

    constructor() {
        makeAutoObservable(this)
    }

    // action
    increaseAction(num) {
        this.num = this.num + num;
    }
    
    decreaseAction(num) {
        this.num = this.num - num;
    }
}

export default new NumberStore();