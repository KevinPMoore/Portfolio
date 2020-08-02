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
                <div
                    className='text-container'
                >
                    <p
                        className='about-text'
                    >
                        Hi, I'm Kevin.  I’m a fullstack web developer based out of Atlanta, GA.  I've always found myself absorbed in a quest to understand how 
                        things work.  That fascination has driven me from a kid who spent countless hours playing with LEGOs to graduate studies in psychology 
                        and clinical social work.  I've also always been a person who enjoyed spending much of my time in front of a computer.  It felt odd to 
                        me though that how computers worked was something I knew very little about despite them being something that I enjoyed tremendously.
                    </p>
                    <p
                        className='about-text'
                    >
                        In a past life I worked as an individual and family therapist.  Every day my mission was to help people understand how they function in 
                        the context of their own lives.  That line of work taught me two important lessons.  The first was to never underestimate the value of 
                        taking a collaborative approach to solving problems.  No matter how good a clinician I became I could never be more of an expert on my 
                        client's life than they were, so the only way to move forward was cooperatively.  Second was the power of perception and how dramatically 
                        that impacts what we &#40;think&#41; we can and can't do.  It was when I started to apply this lesson to myself that it became clear that
                        it was time for a transition.
                    </p>  
                    <p
                        className='about-text'
                    >
                        By this point I had seen a few friends with and without computer science backgrounds find enjoyment in web development.  This was very
                        encouraging for me, as it meant that I could also find a career in something I enjoyed but didn't understand.  I decided to enroll in 
                        Thinkful's Software Engineering program as a way to jump-start my learning.  It was a challenging journey, but it was also one of the
                        most rewarding thing I have ever done.  Now I tackle projects that use technology to help people thrive and engage with the world in 
                        ways that empower them to do things they may not have tried before.  While I enjoy working independently, I thrive in a team 
                        environment.  My belief is that collaborative work fosters the development of everyone involved and improves the final result.  
                        Learning is a lifelong pursuit and the best thing about that is that finding a new tool that expands what I can create always feels a 
                        little bit like magic to me.  If you're interested, you can check out some of my work in the Portfolio section of this site.
                    </p>
                </div>
            </section>
        );
    };
};