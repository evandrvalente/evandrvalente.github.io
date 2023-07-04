import React from 'react';
import "./skills.css";
import Frontend from './Frontend';
import Backend from './Backend';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Competências</h2>
      <span className="section__subtitle">Habilidades técnicas</span>

      <div className="skills skills__container container grid">
        <Frontend/>
        <Backend/>

      </div>

    </section>
  )
}

export default Skills
