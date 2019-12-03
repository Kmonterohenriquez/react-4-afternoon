import React from 'react'
import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <div className='subnav'>
          <Link to='/about' className='subnav_links'><h3>About</h3></Link>
          <Link to='/about/history' className='subnav_links'><h3>History</h3></Link>
          <Link to='/about/contact' className='subnav_links'><h3>Contact</h3></Link>
        </div>
    )
}
export default Navbar