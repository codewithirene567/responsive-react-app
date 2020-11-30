import React from 'react';
import './Button.css'
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];
//outline is a clear button and primary is a filled button
//these are built in CSS classes

const SIZES = ['btn--medium', 'btn--large'];

// passed in properties here in argument
export const Button = ({children,
    type, onClick, buttonStyle, buttonSize}) => {
        const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
        //a variable that checks the button style which says that if the component
        //includes the button style then make it the button style created otherwise style it in the first
        //style in the styles array
        const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

        return (
            <Link to='/sign-up' className='btn-mobile'>
                <button>
                    {children}
            {/* whatever you put inside the button that "children" is rendered in the button */}
                </button>
            </Link>
        )
    };