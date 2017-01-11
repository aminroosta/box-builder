import {observable, action} from 'mobx'

class ShadowSore {
    @observable color = '#474A4F';
    @observable x = 0;
    @observable y = 0;
    @observable blur = 0;
}

class DesignStore {
    @observable backgroundColor = '#FF5252';
    @observable radius = 0;
    @observable width = 80;
    @observable height = 40;
    @observable shadow = new ShadowSore;
}

export default DesignStore