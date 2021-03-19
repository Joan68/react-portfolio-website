import React, { Component } from "react";

class Resume extends Component {
  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className="info">
            <span className="educationTitle">{education.degree}</span>
            <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>
            <p>{education.description.point1}</p>
            <p>{education.description.point2}</p>
            <p className="mb">{education.description.point3}</p>
          </div>
        );
      });
      var work = this.props.data.work.map(function (work) {
        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            <p className="info">
              <span className="workTitle">{work.title}</span>
              <span>&bull;</span> <em className="date">{work.years}</em>
            </p>
            <p>{work.description.point1}</p>
            <p>{work.description.point2}</p>
            <p className="mb">{work.description.point3}</p>
          </div>
        );
      });
      var skills = this.props.data.skills.map(function (skills) {
        var className = "skill-list " + skills.name.toLowerCase();
        return <span key={skills.name}>{skills.name}</span>;
      });
    }

    return (
      <section id="resume">
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>
          <div className="nine columns main-col">{work}</div>
        </div>

        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{skillmessage}</p>

            <div className="skill-list">
              <p>{skills}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
