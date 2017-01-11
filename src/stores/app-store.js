import {observable, action} from 'mobx'
import DesignStore from './design-store'
import {DESIGN_ROUTE} from '../constants/routes'

class AppStore {
    constructor(store) {
        this.design = store && store.design || this.design
        this.route = store && store.route || this.route
    }
    @observable design = new DesignStore
    @observable route = DESIGN_ROUTE
    
    @action setRoute = route => {
        console.warn(route);
        this.route = route
    }
}
export default AppStore;