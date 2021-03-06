import React, { Component } from 'react'
import {toJS} from 'mobx'
import {observer} from 'mobx-react'

import notification from '../notification'
import {colors, sizes} from '../constants/theme'

import DivComponent from '../components/div-component'
import DesignerComponent from '../components/designer-component'
import BottomComponent from '../components/bottom-component'

@observer
export default class DesignContainer extends Component {
    render() {
        const {store} = this.props;
        return (
            <div style={styles.design}>
                <div style={styles.inner}>
                    <DesignerComponent store={store.design} />
                </div>
                <div style={styles.inner}>
                    <div style={styles.div_container}>
                        <DivComponent {...store.design} />
                    </div>
                    <input
                        value={store.design.name}
                        style={styles.input}
                        onChange={e => store.design.name = e.target.value}
                        placeholder="Name" />
                    <BottomComponent onClick={() => this.save()}/>
                </div>
            </div>
        )
    }
    save() {
        const {store} = this.props;
        if(!store.design.name) {
            notification.warning('Name should not be empty!')
            return;
        }

        const item = toJS(store.design);
        item.shadow.asCss = store.design.shadow.asCss;
        item.asCss = store.design.asCss;
        item.key = (new Date)*1; 

        store.gallery.items.push(item)
        notification.success('Successfully saved to gallery.')
        store.design.name = ''
    }
}

const styles = {
  div_container: {
    display: 'flex',
    width: '100%',
    height: sizes.max_div_height,
    maxWidth: sizes.destop_width/2,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottom: `1px solid ${colors.dark}`,
    boxSizing: 'border-box'
  },
  design: {
    margin: '0 auto',
    width: '100%',
    maxWidth: sizes.destop_width,
    boxSizing: 'border-box',
    textAlign: 'center'
  },
  inner: {
    display: 'inline-block',
    margin: '0 auto',
    width: '100%',
    maxWidth: sizes.destop_width/2,
    verticalAlign: 'top',
  },
  input: {
    width: '80%',
    marginTop: sizes.padding,
    padding: 3,
    borderRadius: 3,
    border: 'none',
    outline: 0,
    boxShadow: '0 0 10px rgba(0,0,0,.25)',
    boxSizing: 'border-box',
    fontSize: sizes.medium
  }
}