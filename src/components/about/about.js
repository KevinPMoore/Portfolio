import React from 'react';
import './about.css';

export default class About extends React.Component {
    setClass() {
        const classes = ['about-me'];
        if(this.props.about === true) {
            classes.push('focus');
        };
        return classes.join(' ');
    };

    render() {
        return(
            <section 
                className={this.setClass()}
                id='about-me'
            >
                <h2
                    className='title'
                >
                    About Me
                </h2>
                <p
                    className='about-text'
                >
                    Hi, I'm Kevin.  I’m a fullstack web developer based out of Atlanta, GA.  Trying to understand how things work has always fascinated me.  
                    That fascination has driven me from a kid who spent countless hours playing with LEGOs to graduate studies in 
                    psychology and clinical social work.  I always found myself spending much of my free time at my computer despite 
                    knowing very little about how it worked.
                </p>
                <p
                    className='about-text'
                >
                    In a past life I worked as an individual and family therapist to help people understand 
                    how they function in the context of their own lives.  That line of work taught me two important lessons.  The first was to never 
                    underestimate the value of taking a collaborative approach to solving problems.  Second was the power of perception and how 
                    dramatically that impacts what we (think) we can and can't do.
                </p>  
                <p
                    className='about-text'
                >
                    Now I tackle projects that use technology to help people thrive and engage with the world in ways that empower them to do things they 
                    may not have tried before.  While I enjoy working independantly, I thrive in a team environment.  My belief is that collaborative 
                    work fosters the development of everyone involved and improves the final result.  Seeing a project come together always feels  a 
                    little bit like magic to me.  You can check out some of my work below.
                </p>
            </section>
        );
    };
};