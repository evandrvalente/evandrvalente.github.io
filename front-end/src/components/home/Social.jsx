import React from 'react'

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://github.com/evandrvalente" 
        className="home__social-icon" 
        target="_blank" rel="noreferrer">
        <i className="uil uil-github-alt"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/evandrovalente/" 
        className="home__social-icon" 
        target="_blank" rel="noreferrer">
        <i className="uil uil-linkedin"></i>
      </a>
      <a
        href="https://www.instagram.com/evandrvalente.dev/" 
        className="home__social-icon" 
        target="_blank" rel="noreferrer">
        <i className="uil uil-instagram"></i>
      </a>
      <a
        href="https://twitter.com/evandrvalente"
        className="home__social-icon" 
        target="_blank" rel="noreferrer">
        <i className="uil uil-twitter"></i>
      </a>
      
    </div>
  )
}

export default Social
