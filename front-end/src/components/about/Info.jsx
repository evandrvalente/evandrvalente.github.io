import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
      
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Experiencia programando</h3>
        <span className="about__subtitle">2 anos</span>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Projetos completados</h3>
        <span className="about__subtitle">38</span>
      </div>

      <div className="about__box">
        <i className="bx bx-support about__icon"></i>
        <h3 className="about__title">Disponivel pra suporte</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>

    </div>
  )
}

export default Info
