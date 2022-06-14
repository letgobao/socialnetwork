import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import Logo from '../../img/Logo.png'
import './LogoSearch.css'
import { Link } from "react-router-dom";
const LogoSearch = () => {
  return (
    <div className='LogoSearch'>
        <Link to='/home'>
          <img src={Logo}/>
        </Link>        
        <div className="Search">
            <input type="text" alt="" placeholder='#Explore' />
            <div className="search-icon">
                <SearchIcon fontSize='medium'/>
            </div>            
        </div>
    </div>
  )
}

export default LogoSearch