import {observable, action, computed} from 'mobx'
import {colors, sizes} from '../constants/theme'

class ShadowSore {
    @observable color = colors.red;
    @observable x = 0;
    @observable y = 0;
    @observable blur = 10;
    
    @computed get asCss() {
        return `${this.x}px ${this.y}px ${this.blur}px ${this.color}`;
    }
}

class DesignStore {
    @observable backgroundColor = '#FF5252';
    @observable radius = 0;
    @observable width = 120;
    @observable height = 60;
    @observable shadow = new ShadowSore;
}

export default DesignStore