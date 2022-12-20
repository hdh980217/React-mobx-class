import { makeAutoObservable } from "mobx"

class AgeStore {
    // state
    age = 100;
    
    constructor() {
        makeAutoObservable(this)
    }

    // action
    increaseAction(age) {
        this.age = this.age + age;
    }
    
    decreaseAction(age) {
        this.age = this.age - age;
    }
}

export default new AgeStore();