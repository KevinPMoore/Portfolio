import React from 'react';
import Profile from './Profile.jpg';
import './contact.css';

export default class Contact extends React.Component {
    
    render() {
        return(
            <section className='contact' id='contact'>
                <h2
                    className='title'
                >
                    Contact
                </h2>
                <div className='contact-info'>
                    <img className='profile' src={Profile} alt='me in front of a lake on a cloudy day'></img>
                    <p
                        className='info'
                    >
                        Check out the rest of my work on my <a className='contact-link' href='https://github.com/KevinPMoore' target='_blank' rel='noopener noreferrer'>Github</a> page.
                        <br/>
                        You are also welcome to connect with me on <a className='contact-link' href='https://www.linkedin.com/in/kevin-moore-8b972933/' target='_blank' rel='noopener noreferrer'>LinkedIn</a>.
                        <br/>
                        Or you can always shoot me an email at <a className='contact-link' href='mailto: moore.kevin.p@gmail.com'>moore.kevin.p@gmail.com</a>.
                    </p>
                </div>
            </section>
        );
    };
};