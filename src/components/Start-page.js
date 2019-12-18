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
          <div className='startpage-subtitle'>circa August 2017</div>
          <div className='startpage-intro'>An Analysis of the Marketplace for Film and Television within the World of Video on Demand. (Distinction)</div>
          <div className='startpage-author'>Written by David Tsui at Royal Holloway, MA Producing Film and TV</div>
          <div className='startpage-start'>
            <span><a href='./Intro'>Start</a></span>
          </div>
          <div className='startpage-intro'>featuring interviews from </div>
          <img src='../../assets/pics/lionsgate.png'/><img src='../../assets/pics/mubi.png'></img>
        </header>
      </div>
    )
  }
}

export default Startpage
