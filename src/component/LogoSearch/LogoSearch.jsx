import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import Logo from '../../img/Logo.png'
import './LogoSearch.css'
const LogoSearch = () => {
  return (
    <div className='LogoSearch'>
          <img src={Logo}/>     
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