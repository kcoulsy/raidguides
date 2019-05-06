import React, { Component } from 'react'

import Link from 'next/link'
import data from '../data';

export default class componentName extends Component {
  state = {
    show: false
  }
  toggle = () => {
    this.setState({show: !this.state.show})
  }
  render() {
    return (
      <div>
          <div class="boss-nav-toggle" onClick={this.toggle}>Choose Boss</div>
          <div class={`boss-nav ${this.state.show && 'show'}`}>
            {data[this.props.type].map((boss) => {
              return <Link href={boss.url}><a class="item">{boss.name}</a></Link>
            })}

          </div>
      </div>
    )
  }
}
