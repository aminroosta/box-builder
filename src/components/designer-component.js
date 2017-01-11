import React, { Component } from 'react'

import {observer} from 'mobx-react'
import {colors, sizes} from '../constants/theme'

import ColorPickerComponent from './colorpicker-component'
import SliderComponent from './slider-component'
import BottomComponent from './bottom-component'

@observer
export default class DivComponent extends Component {
    render() {
        const {store} = this.props;
        return (
            <div style={styles.container}>
                <SliderComponent
                    min={10}
                    title="Width:"
                    max={sizes.max_div_width}
                    defaultValue={store.width} 
                    onChange={v => store.width = v} />
                <SliderComponent
                    min={10}
                    title="Height:"
                    max={sizes.max_div_height - 20}
                    defaultValue={store.height} 
                    onChange={v => store.height = v} />
                <ColorPickerComponent
                    title="Background:"
                    onChange={v => store.backgroundColor = v} />
                <SliderComponent
                    min={0}
                    title="Border Radius:"
                    max={Math.min(store.width, store.height)/2 | 0}
                    defaultValue={store.radius} 
                    onChange={v => store.radius = v} />
                <ColorPickerComponent
                    title="Shadow:"
                    onChange={v => store.shadow.color = v} />
                <SliderComponent
                    min={0}
                    title="Blur:"
                    max={25}
                    defaultValue={store.shadow.blur} 
                    onChange={v => store.shadow.blur = v} />
                <SliderComponent
                    min={0}
                    title="X:"
                    max={25}
                    defaultValue={store.shadow.x} 
                    onChange={v => store.shadow.x = v} />
                <SliderComponent
                    min={0}
                    title="Y:"
                    max={25}
                    defaultValue={store.shadow.y} 
                    onChange={v => store.shadow.y = v} />
            </div>
        )
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: sizes.destop_width/2,
        minHeight: 400,
        boxSizing: 'border-box',
        //boxShadow: '0 30px 80px 0 rgba(0,0,0,0.50)'
    }
}