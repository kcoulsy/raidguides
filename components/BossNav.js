import React, { Component } from 'react'

import Link from 'next/link'
import data from '../data/bosses';

export default class componentName extends Component {
  state = {
    show: false
  }
  toggle = () => {
    this.setState({show: !this.state.show})
  }
  render() {
    return (
      <div className="boss-nav-container">
          <div className="boss-nav-toggle" onClick={this.toggle}>Choose Boss</div>
          <div className={`boss-nav ${this.state.show && 'show'}`}>
            {data[this.props.type].map((boss) => {
              return <Link href={boss.url} key={boss.name}><a className="item">{boss.name}</a></Link>
            })}

          </div>
      </div>
    )
  }
}
