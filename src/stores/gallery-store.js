import {observable, action, computed} from 'mobx'
import {colors, sizes} from '../constants/theme'

function between(value, min, max) {
    return value >= min && value <= max
}

class GalleryFilter {
    @observable min_width = 0
    @observable max_width = sizes.max_div_width
    @observable min_height = 0
    @observable max_height = sizes.max_div_height
    @observable min_radius = 0
    @observable max_radius = Math.min(sizes.max_div_width, sizes.max_div_height)/2 | 0
}

class GalleryStore {
    @observable items = []
    @observable filter_on = false
    @observable filter = new GalleryFilter;
    
    @computed get items_filtered() {
        if(!this.filter_on) {
            return this.items
        }
        return this.items.filter(item => {
            return between(item.width, this.filter.min_width, this.filter.max_width) &&
                   between(item.height, this.filter.min_height, this.filter.max_height) &&
                   between(item.radius, this.filter.min_radius, this.filter.max_radius)
        })
    }
}
export default GalleryStore;