import AgeStore from './ageStore';
import emailStore from './emailStore';
import numberStore from './numberStore';
import testStore from './testStore';
 
class IndexStore {
    ageStore
    emailStore
    numberStore
    testStore
    whyTestNum

    constructor() {
        this.ageStore = AgeStore;
        this.emailStore = emailStore
        this.numberStore = numberStore
        this.testStore = testStore
        this.whyTestNum = 100;
    }

}

export default new IndexStore();