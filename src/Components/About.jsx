import React from 'react';
import logo from '../assets/logo.png';
import memberOne from '../assets/team/member-one.png';
import memberTwo from '../assets/team/member-two.png';

function About() {
  return (
    <section className="card">
      {/* Teammate-friendly: update bios and swap images here. */}
      <div className="about-header">
        <img className="logo" src={logo} alt="GENIUS team logo" />
        <div>
          <h2>Team Placeholder</h2>
          <p className="subtitle">Two students collaborating for GENIUS.</p>
        </div>
      </div>
      <div className="team-grid">
        <article className="team-card">
          <img src={memberOne} alt="Team member one" />
          <h3>Member One</h3>
          <p>Role placeholder and quick bio.</p>
        </article>
        <article className="team-card">
          <img src={memberTwo} alt="Team member two" />
          <h3>Member Two</h3>
          <p>Role placeholder and quick bio.</p>
        </article>
      </div>
    </section>
  );
}

export default About;
