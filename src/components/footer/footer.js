import React from 'react';
import './footer.css';

export default class Footer extends React.Component {
    render() {
        return(
            <footer>
                Email me at: <a className='contact-link' href='mailto: moore.kevin.p@gmail.com'>moore.kevin.p@gmail.com</a>
            </footer>
        );
    };
};