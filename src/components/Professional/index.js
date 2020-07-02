import React, { useEffect } from 'react';
import Overview from './overview.js';
import Contact from '../Common/Contact.js';
const Professional = () => {
    useEffect(() => {
        let target = document.getElementById('professional');
        if (target) {
            target.scrollIntoView();
        }
    })
    return (
        <>
        <Overview id="professional"/>
        <Contact/>
        </>
    )
}

export default Professional;