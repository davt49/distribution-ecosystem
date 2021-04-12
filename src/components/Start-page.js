import React from 'react'

class Startpage extends React.Component {
  constructor() {
    super()

    this.state = {}
  }

  render(){
    return (
      <div className='startpage'>
        <header>
          <div className='startpage-title'>Digital Distribution Ecosystem</div>
          <div className='startpage-subtitle'></div>
          <div className='startpage-intro'>Written by David Tsui, August 2017 (Who is now a developer, 2021.)</div>
          <div className='startpage-author'>
            This is a small React.js project to turn an old university essay of mine into a website using the MERN stack. <br/>
            More info on the code can be found on <a href="https://github.com/davt49/distribution-ecosystem" target="_blank">Github</a>.</div>
          <div className='startpage-start'>
           <a href='./Intro'>Start</a>
          </div>
          <div className='startpage-intro'>featuring interviews from </div>
          <img src='../../assets/pics/lionsgate.png'/><img src='../../assets/pics/mubi.png'></img>
        </header>
      </div>
    )
  }
}

export default Startpage
