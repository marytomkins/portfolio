import React, { Component } from 'react';
import './App.css';
import { isMobile } from 'react-device-detect';
import About from './components/About'
import Academics from './components/Academics'
import Work from './components/Work'
import Projects from './components/Projects'
import Skills from './components/Skills'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "React",
      showHideAbout: true,
      showHideAcademics: false,
      showHideWork: false,
      showHideProjects: false,
      showHideSkills: false,
    };
  }

  hideComponent(name) {
    switch (name) {
      case "showHideAbout":
        this.setState({ showHideAbout: true });
        this.setState({ showHideAcademics: false });
        this.setState({ showHideWork: false });
        this.setState({ showHideProjects: false });
        this.setState({ showHideSkills: false });
        break;
      case "showHideAcademics":
        this.setState({ showHideAbout: false });
        this.setState({ showHideAcademics: true });
        this.setState({ showHideWork: false });
        this.setState({ showHideProjects: false });
        this.setState({ showHideSkills: false });
        break;
      case "showHideWork":
        this.setState({ showHideAbout: false });
        this.setState({ showHideAcademics: false });
        this.setState({ showHideWork: true });
        this.setState({ showHideProjects: false });
        this.setState({ showHideSkills: false });
        break;
      case "showHideProjects":
        this.setState({ showHideAbout: false });
        this.setState({ showHideAcademics: false });
        this.setState({ showHideWork: false });
        this.setState({ showHideProjects: true });
        this.setState({ showHideSkills: false });
        break;
      case "showHideSkills":
        this.setState({ showHideAbout: false });
        this.setState({ showHideAcademics: false });
        this.setState({ showHideWork: false });
        this.setState({ showHideProjects: false });
        this.setState({ showHideSkills: true });
        break;
    }
  }

  render() {
    const { showHideAbout, showHideAcademics, showHideWork, showHideProjects, showHideSkills } = this.state;
    return (
      <div className='App' id="app">
          <div>
            <div className="Header">
              <button id="home" onClick={() => this.hideComponent("showHideAbout")}>Home</button>
              <button id="academics" onClick={() => this.hideComponent("showHideAcademics")}>Academics</button>
              <button id="experience" onClick={() => this.hideComponent("showHideWork")}>Experience</button>
              <button id="projects" onClick={() => this.hideComponent("showHideProjects")}>Projects</button>
              <button id="skills" onClick={() => this.hideComponent("showHideSkills")}>Skills</button>
            </div>
            {showHideAbout && <About />}
            {showHideAcademics && <Academics />}
            {showHideWork && <Work />}
            {showHideProjects && <Projects />}
            {showHideSkills && <Skills />}
          </div>
      
      </div>
    );
  }
}

export default App;