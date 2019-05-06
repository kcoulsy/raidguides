import React from 'react'

import Head from '../../components/head'
import Nav from '../../components/nav'
import BossNav from '../../components/BossNav'
import Abilities from './../../components/Abilities';
const Home = () => (
  <div>
    <Head title="Home" />
    <Nav selected="home" />
    <div className="page">
      <BossNav type="bwl"/>
      <div className="content">
        firemaw
      </div>
    </div>
  </div>
)

export default Home
