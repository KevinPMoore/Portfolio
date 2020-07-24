import React from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import './App.css';

export default class App extends React.Component {
  state = {
    text: 'reveal',
    about: false,
    projects: false,
    contact: false
  };

  updateAbout = () => {
    this.setState({
      about: true,
      projects: false,
      contact: false,
      text: 'conceal',
    });
  };

  updateprojects = () => {
    this.setState({
      about: false,
      projects: true,
      contact: false,
      text: 'conceal',
    });
  };

  updateContact = () => {
    this.setState({
      about: false,
      projects: false,
      contact: true,
      text: 'conceal',
    });
  };

  render() {
    return (
      <div className='App'>
        <Header/>
        <main>
          {this.state.about === true ? <About/> : null}
          {this.state.projects === true ? <Projects/> : null}
          {this.state.contact === true ? <Contact/> : null}
          <h1
            className={this.state.text}
          >
            Kevin P. Moore
          </h1>
          <h2
            className={this.state.text}
          >
            Full Stack Web Developer
          </h2>
          <div
            className='main-buttons'
          >
            <button
              onClick={this.updateAbout}
            >
              About
            </button>
            <button
              onClick={this.updateprojects}
            >
              Projects
            </button>
            <button
              onClick={this.updateContact}
            >
              Contact
            </button>
          </div>
        </main>
        <Footer/>
      </div>
    );
  };
};