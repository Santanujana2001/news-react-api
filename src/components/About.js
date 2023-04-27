import React, { Component } from 'react'
import cut from './cut.JPG'
import './About.css'
export class About extends Component {
  render() {
    return (
      <div>
        <section className="about-us">
        <div className="about">
          <img src={cut} className="pic" alt="my pic" />
          <div className="text">
            <h2>About Me</h2>
            <h5>Full stack Developer &amp; <span>Designer</span></h5>
            <p>Hello , My Name Is Santanu Jana , I Am Mern Stack Develpoer and I Am Pursuing B.Tech In Computer Science And Engneering</p>
            <div className="data">
              <a href="mailto:sanujana7551@gmail.com" className="hire">Hire Me</a>
              <a style={{ marginLeft: 25 }} href="https://www.linkedin.com/in/santanu-jana-241119201/"
              className="hire">Linkedin</a>
            </div>
          </div>
        </div>
      </section>
      </div>
    )
  }
}

export default About
