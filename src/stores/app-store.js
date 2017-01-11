import {observable, action} from 'mobx'
import DesignStore from './design-store'
import GalleryStore from './gallery-store'
import {DESIGN_ROUTE} from '../constants/routes'

class AppStore {
    constructor(store) {
        this.route = (store && store.route) || this.route
        this.design = new DesignStore(store && store.design)
        this.gallery = new GalleryStore(store && store.gallery)
    }

    @observable design = new DesignStore
    @observable gallery = new GalleryStore
    
    @observable route = DESIGN_ROUTE
    
    @action setRoute = route => {
        this.route = route
    }
}
export default AppStore;