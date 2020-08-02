import React from 'react';
import Profile from './Profile.jpg';
import './contact.css';

export default class Contact extends React.Component {
    setClass() {
        const classes = ['about-me'];
        if(this.props.contact === true) {
            classes.push('focus');
        };
        return classes.join(' ');
    };
    
    render() {
        return(
            <section
                className={this.setClass()}
                id='contact'
            >
                <h2
                    className='title'
                >
                    Contact
                </h2>
                <div className='contact-info'>
                    <img className='profile' src={Profile} alt='me in front of a lake on a cloudy day'></img>
                    <ul
                        className='info'
                        aria-label='How to reach me'
                    >
                        <li>
                            Check out the rest of my work on my <a className='contact-link' href='https://github.com/KevinPMoore' target='_blank' rel='noopener noreferrer'>GitHub</a> page.
                        </li>
                        <li>
                            You are also welcome to connect with me on <a className='contact-link' href='https://www.linkedin.com/in/kevin-moore-8b972933/' target='_blank' rel='noopener noreferrer'>LinkedIn</a>.
                        </li>
                        <li>
                            Or you can always shoot me an email at <a className='contact-link' href='mailto: moore.kevin.p@gmail.com'>moore.kevin.p@gmail.com</a>.
                        </li>
                    </ul>
                </div>
            </section>
        );
    };
};