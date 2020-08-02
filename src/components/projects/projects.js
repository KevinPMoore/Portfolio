import React from 'react';
import BGG from './BoardGameGuideSS.png';
import FS from './FairShareSS.png';
import HL from './HighLowSS.png';
import KQ from './QuizSS.png';
import './projects.css';

export default class Projects extends React.Component {
    setClass() {
        const classes = ['portfolio'];
        if(this.props.projects === true) {
            classes.push('focus');
        };
        return classes.join(' ');
    };

    render() {
        return(
            <section
                className={this.setClass()}
                id='portfolio'
            >
                <h2
                    className='title'
                >
                    Project Portfolio
                </h2>
                <div 
                    className='project-container'
                >
                    <div
                        className='project'
                    >
                        <h3>
                           Fair Share
                        </h3>
                        <img className='screenshot' src={FS} alt='a screenshot of chore distribution'></img>
                        <p>
                            Manage all your household chores in one place with this simple app.  Fair Share lets users set up their own household or join
                            an existing one.  They can then decide what needs to be done and then manually or randomly decide who will do it.
                        </p>
                        <p>
                            This project was built using React, Node.js and Express with PostgreSQL for the database.
                        </p>
                        <div
                            className='link-container'
                        >
                            <a className='code-link' href='https://fair-share-sigma.vercel.app/' target='_blank' rel='noopener noreferrer'>Try it out</a>
                            <a className='code-link' href='https://github.com/KevinPMoore/Fair-Share-Client' target='_blank' rel='noopener noreferrer'>See the code</a>
                        </div>
                    </div>
                    <div
                        className='project'
                    >
                        <h3>
                           High-Low 
                        </h3>
                        <img className='screenshot' src={HL} alt='a screenshot of a wagering game'></img>
                        <p>
                            This lightweight game lets users push their luck as they wager points against the outcome of a random number generator.  An account 
                            registration and login system allows users to save their progress between sessions to set a high score!
                        </p>
                        <p>
                            This project was built using React, Node.js and Express with PostgreSQL for the database.
                        </p>
                        <div
                            className='link-container'
                        >
                            <a className='code-link' href='https://high-low.now.sh/' target='_blank' rel='noopener noreferrer'>Try it out</a>
                            <a className='code-link' href='https://github.com/KevinPMoore/High-Low-Client' target='_blank' rel='noopener noreferrer'>See the code</a>
                        </div>
                    </div>
                    <div
                        className='project'
                    >
                        <h3>
                           Board Game Guide 
                        </h3>
                        <img className='screenshot' src={BGG} alt='a screenshot of a board game search result'></img>
                        <p>
                            There's a lot more to board games than Risk or Monopoly these days, and Board Game Guide helps you sort through them all! This 
                            app lets users explore the internet's most comprehensive board game database and find the centerpiece of their next game night.
                        </p>
                        <p>
                            This project was built using HTML, JavaScript and jQuery while integrating the Board Game Atlas API.
                        </p>
                        <div
                            className='link-container'
                        >
                            <a className='code-link' href='https://kevinpmoore.github.io/Board-Game-Guide/' target='_blank' rel='noopener noreferrer'>Try it out</a>
                            <a className='code-link' href='https://github.com/KevinPMoore/Board-Game-Guide' target='_blank' rel='noopener noreferrer'>See the code</a>
                        </div>
                    </div>
                    <div
                        className='project'
                    >
                        <h3>
                            Kitchen Metrics Quiz
                        </h3>
                        <img className='screenshot' src={KQ} alt='a screenshot of a quiz with cooking ingredients in the background'></img>
                        <p>
                            Get handy in the kitchen using this quick quiz app to learn metric conversions! This app allows users to test their knowledge of 
                            metric conversions commonly used in cooking. Score and progress are displayed across the top of the screen.
                        </p>
                        <p>
                            This project was built using HTML, JavaScript and jQuery.
                        </p>
                        <div
                            className='link-container'
                        >
                            <a className='code-link' href='https://thinkful-ei-iguana.github.io/Caleb-Kevin-Quiz/' target='_blank' rel='noopener noreferrer'>Try it out</a>
                            <a className='code-link' href='https://github.com/thinkful-ei-iguana/Caleb-Kevin-Quiz' target='_blank' rel='noopener noreferrer'>See the code</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    };
};