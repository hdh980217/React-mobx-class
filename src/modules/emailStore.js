import { makeAutoObservable } from 'mobx';

class emailStore{
    // state
    num = 10

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

export default new emailStore();