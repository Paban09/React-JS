import React from 'react';

import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <div>
            <Link to="/"> Home Page</Link><br />
            <Link to="/about"> About Page</Link><br /><hr />
        </div>
    )
}

export default Navbar;