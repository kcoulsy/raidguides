import React from 'react'
import Link from 'next/link'


const Nav = (props) => (
<div className="nav">
    <Link href="/molten-core"><a className="nav-item">MC</a></Link>
    <Link href="/onyxias-lair"><a className="nav-item">ONY</a></Link>
    <Link href="/blackwing-lair"><a className="nav-item">BWL</a></Link>
    <Link href="/zul-gurub"><a className="nav-item">ZG</a></Link>
    <Link href="/ruins-of-ahn-qiraj"><a className="nav-item">AQ20</a></Link>
    <Link href="/temple-of-ahn-qiraj"><a className="nav-item">AQ40</a></Link>
    <Link href="/naxxramas"><a className="nav-item">NAXX</a></Link>
</div>
)

export default Nav
