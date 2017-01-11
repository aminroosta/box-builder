import {observable, action} from 'mobx'

class BorderStore {
    @observable color = '#fff';
    
    @action changeColor = value => this.color = value;
}

const store = new BorderStore
export default store