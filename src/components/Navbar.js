import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <=960) {
            setButton(false)
        } else {
            setButton(true);
        }
    };
//add event listener to get the appropriate elements to resize to invoke function
    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        TRVL <i className="fab fa-typo3"></i>
                    </Link>
                    {/* note: link replaces the a tag */}
                    <div className='menu-icon' onClick={handleClick}>
                        {/* hamburger menu conditional statement */}
                        {/* by default with the click and set click array as a variable
                        the state in the conditional statement is set as false
                        but if they click the hamburger menu then it will call handleclick which is the opposite of
                        click which is why it is showing !click(not click) and show the bars */}
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        {/* if they click it then make it active to go to the appropriate route
                         so it shows otherwise if they aren't clicking it then show the nav menu */}
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                {/* when the user does click on it then call closeMobileMenu
                                a function that will close the mobile menu by setting the setclick to false
                                thereby showing the default menu again*/}
                                Home
                            </Link>
                        </li>
                        {/* these are the different menu options listed with their links to go to the right routes
                        to get to the right webpages */}
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {/* note: && is a shortcut to return whatever comes after */}
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar