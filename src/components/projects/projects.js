import React from 'react';
import './projects.css';

export default class Projects extends React.Component {
    render() {
        return(
            <section
                className='portfolio' 
                id='portfolio'
            >
                <h2>
                    Project Portfolio
                </h2>
                <div 
                    className='project-container'
                >
                    <div
                        className='project'
                    >
                        <h3>
                            Kitchen Metrics Quiz
                        </h3>
                        <img className='quiz' src='./images/quiz.png' alt='the start screen of a quiz with cooking ingredients in the background'></img>
                        <p>
                            Get handy in the kitchen using this quick quiz app to learn metric conversions! This app allows users to test their knowledge of 
                            metric conversions commonly used in cooking. Score and progress are displayed across the top of the screen.
                        </p>
                        <p>
                            This project was built using HTML, Javascript and jQuery.
                        </p>
                        <a className='code-link' href='https://thinkful-ei-iguana.github.io/Caleb-Kevin-Quiz/' target='_blank'>Try it out</a>
                        <a className='code-link' href='https://github.com/thinkful-ei-iguana/Caleb-Kevin-Quiz' target='_blank'>See the code</a>
                    </div>
                    <div 
                        className='project'>
                        <h3>Bookmark Manager</h3>
                        <img className='bookmarks' src='./images/bookmarks.png' alt='a bookmark app showing expanded and collapsed bookmarks'></img>
                        <p>
                            A simple, intuitive application for gathering and sorting bookmarks to your favorite websites. Users can add and delete bookmakrs 
                            to different websites, while creating rankings and short descriptions. Bookmarks can also be filtered by rating.
                        </p>
                        <p>
                            This project was built using HTML, Javascript, Jquery and API interfacing.
                        </p>
                        <a className='code-link' href='https://thinkful-ei-iguana.github.io/Kevin-bookmarks-app/' target='_blank'>Try it out</a>
                        <a className='code-link' href='https://github.com/thinkful-ei-iguana/Kevin-bookmarks-app' target='_blank'>See the code</a>
                    </div>
                </div>
            </section>
        );
    };
};