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

  updateProjects = () => {
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
        <Header
          updateAbout={this.updateAbout}
          updateContact={this.updateContact}
          updateProjects={this.updateProjects}
        />
        <main>
          <h1
            className={this.state.text}
            onClick={this.updateAbout}
          >
            Kevin P. Moore
          </h1>
          <h2
            className={this.state.text}
            onClick={this.updateAbout}
          >
            Full Stack Web Developer
          </h2>
          <About about={this.state.about}/>
          <Projects projects={this.state.projects}/>
          <Contact contact={this.state.contact}/>
        </main>
        <Footer/>
      </div>
    );
  };
};