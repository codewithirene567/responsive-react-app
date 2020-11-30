import React, {useState} from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);
    
    const handleClick = () => setClick(!click)

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
                </div>
            </nav>
        </>
    )
}

export default Navbar