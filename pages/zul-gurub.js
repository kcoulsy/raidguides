import React from 'react'

import Head from '../components/head'
import Nav from '../components/nav'
import BossNav from '../components/BossNav'

const Home = () => (
  <div>
    <Head title="Home" />
    <Nav selected="home" />
    <div className="page">
      <BossNav type="zg"/>
      <div class="content">
        <h2>Strategy</h2>
      </div>
    </div>
  </div>
)

export default Home
