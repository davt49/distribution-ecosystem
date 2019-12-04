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
          <div className='startpage-subtitle'>circa 2017</div>
          <div className='startpage-intro'>An Analysis of the Marketplace for Film and Television within the World of Video on Demand.</div>
          <div className='startpage-author'>Written by David Tsui at Royal Holloway, MA Producing Film and TV</div>
          <div>
            <span className='startpage-start'><a href='#'>Start</a></span>
          </div>
        </header>
      </div>
    )
  }
}

export default Startpage
