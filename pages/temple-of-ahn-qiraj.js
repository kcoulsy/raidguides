import React from 'react'

import Head from '../components/head'
import Nav from '../components/nav'
import BossNav from '../components/BossNav'

const Home = () => (
  <div>
    <Head title="Home" />
    <Nav selected="home" />
    <div className="page">
      <BossNav type="aq40"/>
      <div className="content">
        <h2>Strategy</h2>
      </div>
    </div>
  </div>
)

export default Home
