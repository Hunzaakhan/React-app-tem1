import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className='navbar'>
                <a href='#home' className='logo'><b style={{padding:"7px"}}>BR</b><span>Architects</span></a>
                <div className='navbar-R'>
                    <a href='#projects'>Projects</a>
                    <a href='#About'>About</a>
                    <a href='#Contact'>Contact</a>
                </div>

            </div>


        </>
    )
}

export default Navbar

