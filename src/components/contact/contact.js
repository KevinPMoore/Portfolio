import React from 'react';
import './contact.css';

export default class Contact extends React.Component {
    
    render() {
        return(
            <section className='contact' id='contact'>
                <h2>Contact</h2>
                <div className='contact-container'>
                    <div className='profile-pic'>
                        <img className='profile' src='./images/profile.png' alt='me in front of a lake on a cloudy day'></img>
                    </div>
                    <div className='info'>
                        <p>Check out all my work on my <a className='contact-link' href='https://github.com/KevinPMoore' target='_blank' rel='noopener noreferrer'>Github</a> page.</p>
                        <p>Feel free to connect with me on <a className='contact-link' href='https://www.linkedin.com/in/kevin-moore-8b972933/' target='_blank' rel='noopener noreferrer'>LinkedIn</a>.</p>
                        <p>You can also shoot me an email at <a className='contact-link' href='mailto: moore.kevin.p@gmail.com'>moore.kevin.p@gmail.com</a>.</p>
                    </div>
                </div>
            </section>
        );
    };
};