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
                        className='jumper-container'
                    >
                        <a className="jumper" href="#about-me">About Me</a>
                        <a className="jumper" href="#portfolio">Portfolio</a>
                        <a href="https://github.com/KevinPMoore" target="_blank">Github</a>
                        <a href="https://www.linkedin.com/in/kevin-p-moore/" target="_blank">LinkedIn</a>
                        <a className="jumper" href="#contact">Contact Me</a>
                    </div>
                </nav>
            </header>
        );
    };
}