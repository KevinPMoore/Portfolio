import React from 'react';
import Burger from './Hamburger_icon.png';
import Xicon from './X_icon.png';
import './header.css';

export default class Header extends React.Component {
    state = {
        burger: 'show',
        buttons: 'hide'
    };

    handleToggleClick = () => {
        if(this.state.burger === 'show') {
            this.setState({
                burger: 'hide',
                buttons: 'show'
            });
        } else {
            this.setState({
                burger: 'show',
                buttons: 'hide'
            });
        };
    };

    render() {
        return(
            <header>
                <div
                    className='header-container'
                >
                    <h3
                        className='signature'
                    >
                        Kevin P. Moore
                    </h3>
                    <img className={[this.state.burger, 'burgericon'].join(' ')} src={Burger} alt='a hamburger icon of three horizontle lines' onClick={this.handleToggleClick}></img>
                </div>
                <nav
                    className={this.state.buttons}
                >
                    <img className ='xicon' src={Xicon} alt='a white X' onClick={this.handleToggleClick}></img>
                    <div
                        className='link-container'
                    >
                        <button
                            className='nav-button'
                            onClick={this.props.updateAbout}
                        >
                            About Me
                        </button>
                        <button
                            className='nav-button'
                            onClick={this.props.updateProjects}
                        >
                            My Portfolio
                        </button>
                        <a href='https://github.com/KevinPMoore' target='_blank' rel='noopener noreferrer'>
                            <button
                                className='nav-button'
                            >
                                Github
                            </button>
                        </a>
                        <a href='https://www.linkedin.com/in/kevin-p-moore/' target='_blank' rel='noopener noreferrer'>
                            <button
                                className='nav-button'
                            >
                                LinkedIn
                            </button>
                        </a>
                        <button
                            className='nav-button'
                            onClick={this.props.updateContact}
                        >
                            Contact Me
                        </button>
                    </div>
                </nav>
            </header>
        );
    };
}