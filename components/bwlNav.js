import React from 'react'
import Link from 'next/link'


const BwlNav = (props) => (
  <div className="secondary-menu">
    <div className="pure-menu1">
      <span className="pure-menu-heading">

        </span>

      <ul className="pure-menu-list">
        <li className={`pure-menu-item ${props.selected === 'razorgore' && 'pure-menu-selected'}`}>
          <Link href="/onyxia">
            <a className="pure-menu-link">Razorgore the Untamed</a>
          </Link>
        </li>
        <li className={`pure-menu-item ${props.selected === 'vaelastrasz' && 'pure-menu-selected'}`}>
          <Link href="/onyxia">
            <a className="pure-menu-link">Vaelastrasz the Corrupt</a>
          </Link>
        </li>
        <li className={`pure-menu-item ${props.selected === 'broodlord' && 'pure-menu-selected'}`}>
          <Link href="/onyxia">
            <a className="pure-menu-link">Broodlord Lashlayer</a>
          </Link>
        </li>
        <li className={`pure-menu-item ${props.selected === 'firemaw' && 'pure-menu-selected'}`}>
          <Link href="/onyxia">
            <a className="pure-menu-link">Firemaw</a>
          </Link>
        </li>
        <li className={`pure-menu-item ${props.selected === 'ebonroc' && 'pure-menu-selected'}`}>
          <Link href="/onyxia">
            <a className="pure-menu-link">Ebonroc</a>
          </Link>
        </li>
        <li className={`pure-menu-item ${props.selected === 'flamegor' && 'pure-menu-selected'}`}>
          <Link href="/onyxia">
            <a className="pure-menu-link">Flamegor</a>
          </Link>
        </li>
        <li className={`pure-menu-item ${props.selected === 'chrom' && 'pure-menu-selected'}`}>
          <Link href="/onyxia">
            <a className="pure-menu-link">Chromaggus</a>
          </Link>
        </li>
        <li className={`pure-menu-item ${props.selected === 'nef' && 'pure-menu-selected'}`}>
          <Link href="/onyxia">
            <a className="pure-menu-link">Nefarian</a>
          </Link>
        </li>
      </ul>
    </div>
  </div>
)

export default BwlNav
