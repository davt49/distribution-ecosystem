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
          <div className='startpage-intro'>Written by David Tsui, August 2017 (Who is now a developer)</div>
          <div className='startpage-author'>This is a small React.js project to turn an old essay of mine into a website!</div>
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
