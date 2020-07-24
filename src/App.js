import React from 'react';
import Header from './components/header/header';
import './App.css';

export default class App extends React.Component {
  state = {
    focus: 'foreground',
    text: 'reveal',
    about: false,
    projects: false,
    contact: false
  };

  updateFocus = () => {
      if(this.state.focus === 'foreground') {
          this.setState({
              focus: 'background'
          });
      } else {
          this.setState({
              focus: 'foreground'
          });
      };
  };

  updateText = () => {
      if(this.state.text ==='reveal'){
          this.setState({
              text: 'conceal'
          });
      } else {
          this.setState({
              text: 'reveal'
          });
      };
  };

  updateAbout = () => {
    this.setState({
      about: !this.state.about,
      projects: false,
      contact: false
    });
  };

  updateprojects = () => {
    this.setState({
      about: false,
      projects: !this.state.projects,
      contact: false
    });
  };

  updateContact = () => {
    this.setState({
      about: false,
      projects: false,
      contact: !this.state.contact
    });
  };

  render() {
    return (
      <div className='App'>
        <Header/>
        <main
          className={this.state.focus}
        >
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
      </div>
    );
  };
};