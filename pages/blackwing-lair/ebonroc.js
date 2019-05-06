import React from 'react'

import Head from '../../components/head'
import Nav from '../../components/nav'
import BossNav from '../../components/BossNav'
import Abilities from './../../components/Abilities';

const Home = () => (
  <div className="layout">
    <Head title="Home" />
    <Nav selected="home" />
    <div className="page">
      <BossNav type="bwl"/>
      <div className="content">
        <h1>Ebonroc</h1>
        <p>Ebonroc is the fifth boss in Blackwing Lair. He shares a loot table with two other drakes in the instance--while all three can drop tier gloves, they also can drop no gloves at all, making tier 2 gloves the hardest piece of the set to obtain.</p>
        <div className="section">
          <h2>Preperation</h2>
          <p>Tanks must wear their Onyxia Scale Cloaks</p>
        </div>
        <div className="section">
          <Abilities raid="bwl" boss="ebonroc" />
        </div>
        <div className="section">
          <h2>Strategy</h2>
          <p>Get into positions. Tanks need to swap as soon as the previous tank gets Shadow of Ebonroc. You need to 3 tanks to rotate between. A-> B -> C</p>
        </div>
        <div className="section">
          <h2>Positioning</h2>
          <img src="/static/images/positioning/ebonroc.png" alt="Ebonroc Positioning"></img>
        </div>
        <div className="section">
          <h2>Healing</h2>
          <p>Make sure to heal the tanks</p>
        </div>
      </div>
    </div>
  </div>
)

export default Home
