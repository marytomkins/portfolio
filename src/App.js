import React, { useRef } from 'react';
import './App.css';
import Navbar from './components/NavBar';
import logo from "./images/2.png";
import aminteriors from "./images/aminteriors.png";
import goodreads from "./images/goodreads.png";
import wordle from "./images/wordle.png";
import rutgers from "./images/rutgers.png";
import syf from "./images/syf.png";
import vz from "./images/vz.png";
import fpa from "./images/fpa.png";
import software from "./images/software.png"
import lib from "./images/lib.png"
import code from "./images/code.png"
import email from "./images/email.png"
import resume from "./images/resume.png"
import linkedin from "./images/linkedin.png"
import github from "./images/github.png"
import study from "./images/study.jpg"
import activity from "./images/activity.png"
import AboutSquare from './components/AboutSquare';
import Square from './components/Square'

import Footer from './components/Footer'

function App() {
  const homeRef = useRef(null);
  const workRef = useRef(null);
  const projectRef = useRef(null);
  const academicRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <div className="App">
      <Navbar homeRef={homeRef} workRef={workRef} projectRef={projectRef} academicRef={academicRef} skillsRef={skillsRef} contactRef={contactRef} />
      <AboutSquare
        id="about"
        ref={homeRef}
        logoSrc={logo}
        title="Hello, I'm Mary."
        showLessText="✕"
      />
      <Square
        id="work"
        ref={workRef}
        title="Work."
        colors={{ background: "#D8E267", text: "#00584B", shadow: "RGBA(0,88,75,0.5)", border: "1px solid #00584b" }}
        hoverImg={false}
        sections={
          [
            {
              title: 'Synchrony Financial',
              heading: 'Frontend Engineer',
              subheading: 'May 2022 - Present',
              imgSrc: syf,
              description: ['· Working as a developer and designer to provide frontend improvements for applications built on the Digital Acceleration Platform known as SyPI.', '· Participating in a scrum agile environment with daily sync-ups consisting of progress updates, user story delegation, backlog refinement, sprint planning and retrospectives.']
            },
            {
              title: 'Verizon',
              heading: 'Frontend Engineer',
              subheading: 'January 2021 - April 2022',
              imgSrc: vz,
              description: ['· Worked as a frontend developer on the Verizon ecommerce website and application in an effort to improve the user experience.', '· UI lead on over 10 development projects that introduced new and enhanced old features to increase traffic and customer engagement.']
            },
            {
              title: 'French and Parello Associates',
              heading: 'Technology Intern',
              subheading: 'June 2019 - August 2019',
              imgSrc: fpa,
              description: ['· Provided technical support and maintenance of any hardware/software related issues, while researching, analyzing, and documenting results.', '· Reorganized and managed data center equipment including servers, switches, routers, and cables']
            }
          ]
        }
      />
      <Square
        id="academics"
        ref={academicRef}
        title="Academics."
        hoverImg={false}
        colors={{ background: "#FC9D59", text: "#FFF", shadow: "RGBA(86, 37, 2, 0.5)", border: "1px solid #562502" }}
        sections={
          [
            {
              title: 'Rutgers University',
              subheading: 'Sept 2016 - May 2020',
              heading: 'B.S. Computer Science',
              imgSrc: rutgers,
            },
            {
              title: 'Relevant Coursework:',
              heading: ['· Data Structures · Computer Architecture · Software Engineering · Internet Technologies · Computer Algorithms · Database Management  · Operating Systems'],
            },
            {
              title: 'Activities:',
              heading: [`· Zeta Tau Alpha Women's Fraternity - VP of Philanthropy\n· RU Seeing Eye Puppy Club - Puppy Sitter\n· Women in Computer Science Club - Assistant Secretary\n· Scarlet Day of Service - Site Leader`],
            }
          ]
        }
      />
      <Square
        id="project"
        ref={projectRef}
        title="Projects."
        colors={{ background: "#D6FCCF", text: "#00584B", shadow: "RGBA(0, 88, 75, 0.5)", border: "1px solid #00584B" }}
        sections={
          [
            {
              title: 'AM Interiors Website',
              heading: 'React.js, Procreate',
              imgSrc: aminteriors,
              link: 'https://aminteriorsnj.com/'
            },
            {
              title: 'Goodreads App Redesign',
              heading: 'InVision/Adalo',
              imgSrc: goodreads,
              link: 'https://drive.google.com/file/d/1uBsRmtoagQBqiOYcJb6nVrosYi5DQ4e3/view?usp=sharing'
            },
            {
              title: 'New Jersey Wordle ',
              heading: 'React.js, Typescript',
              imgSrc: wordle,
              link: 'https://github.com/marytomkins/react-wordle'
            }
          ]
        }
      />
      <Square
        id="skills"
        ref={skillsRef}
        title="Skills."
        hoverImg={false}
        colors={{ background: "#F6D8F7", text: "#356B89", shadow: "RGBA(53, 107, 137, 0.5)", border: "1px solid #356B89" }}
        sections={
          [
            {
              title: 'Languages',
              description: ['HTML\nCSS\nJavaScript\nJava\nPython\nC/C++\nSQL'],
              imgSrc: code
            },
            {
              title: 'Libraries/Frameworks',
              description: ['React.js\nRedux\njQuery\nNext.js\nNode.js\nTailwind CSS'],
              imgSrc: lib
            },
            {
              title: 'Software',
              description: ['Gitlab/Github/Bitbucket\nVisual Studio Code\nEclipse\nAWS\nInVision\nFigma\nJira\nKibana'],
              imgSrc: software
            }
          ]
        }
      />
      <Square
        id="contact"
        ref={contactRef}
        title="Contact."
        hoverImg={false}
        colors={{ background: "#00584b", text: "#d8e267", shadow: "RGBA(0, 88, 75, 0.5)", border: "1px solid #d8e267" }}
        sections={
          [
            {
              imgSrc: resume,
              link: "https://drive.google.com/file/d/1-phgFu4wbS-7diJym8jFidKd7IP8nTTw/view?usp=sharing"
            },
            {
              imgSrc: linkedin,
              link: "https://www.linkedin.com/in/mary-tomkins-90b37a174/"
            },
            {
              imgSrc: github,
              link: "https://github.com/marytomkins"
            },
            {
              imgSrc: email,
              link: "mailto:maryctomkins@gmail.com"
            }
          ]
        }
      />
      <Footer
        text="Developed by MT © 2023" />
    </div>
  );
}

export default App;