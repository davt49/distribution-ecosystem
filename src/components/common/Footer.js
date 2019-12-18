import React from 'react'

class Footer extends React.Component{
  constructor(){
    super()

    this.state ={}
  }

  render(){
    return(
      <div className='footer'>
        <div className='footer-note'>David is now a <a href='https://davidtsui.co.uk'>Software Engineer</a>!!</div>
      </div>
    )
  }
}

export default Footer
