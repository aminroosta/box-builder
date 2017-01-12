import React, { Component } from 'react'
import Modal from 'react-modal'

import {observer} from 'mobx-react'
import {colors, sizes} from '../constants/theme'

import RemoveIcon from './assets/remove-icon'
import {DESIGN_ROUTE, GALLERY_ROUTE, SEARCH_ROUTE} from '../constants/routes'

import SliderComponent from './slider-component'
import BottomComponent from './bottom-component'



@observer
export default class SearchComponent extends Component {
    render() {
        const {store} = this.props;
        const filter = store.gallery.filter;
        return (
            <Modal
                isOpen={store.route === SEARCH_ROUTE}
                onRequestClose={() => store.route = GALLERY_ROUTE}
                style={modalStyle}
                contentLabel="Search Gallery:"
                >
                <h1 style={{fontSize: sizes.big, paddingBottom: sizes.padding}}>Search Gallery:</h1>
                <SliderComponent
                    min={0}
                    title="Width:"
                    max={sizes.max_div_width}
                    defaultValue={[filter.min_width, filter.max_width]} 
                    range={true}
                    onChange={([a,b]) => {
                        filter.min_width = a;
                        filter.max_width = b;
                    }} />
                <SliderComponent
                    min={0}
                    title="Height:"
                    max={sizes.max_div_height}
                    defaultValue={[filter.min_height, filter.max_height]} 
                    range={true}
                    onChange={([a,b]) => {
                        filter.min_height = a;
                        filter.max_height = b;
                    }} />
                <SliderComponent
                    min={0}
                    title="Radius:"
                    max={Math.min(sizes.max_div_width, sizes.max_div_height)/2 | 0}
                    defaultValue={[filter.min_radius, filter.max_radius]} 
                    range={true}
                    onChange={([a,b]) => {
                        filter.min_radius = a;
                        filter.max_radius = b;
                    }} />
            </Modal>
        )
    }
}

const modalStyle = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0, 0, 0, 0.75)'
  },
  content : {
    position                   : 'absolute',
    top                        : '80px',
    width                      : '300px',
    marginLeft                 : '-150px',
    left                       : '50%',
    bottom                     : '80px',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px',
    boxSizing                  : 'border-box'
  }
}