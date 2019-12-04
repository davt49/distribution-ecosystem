import React from 'react'

class Navbar extends React.Component{
  constructor(){
    super()

    this.state = {}
    // this.handleChange = this.handleChange.bind(this)
    this.openNav = this.openNav.bind(this)
    this.closeNav = this.closeNav.bind(this)
  }

  // handleChange(e){
  //   e.preventDefault()
  //   this.openNav()
  // }

  openNav(e){
    e.preventDefault()
    document.getElementById('Navbar').style.width = '20vw'
    document.getElementById('Navbar').style.display = 'block'
    document.getElementById('Navbar-openbtn').style.display = 'none'

  }

  closeNav(e){
    e.preventDefault()
    document.getElementById('Navbar').style.width = '0vw'
    document.getElementById('Navbar').style.display = 'none'
    document.getElementById('Navbar-openbtn').style.display = 'block'
  }

  render(){
    return(
      <div>
        <div id='Navbar-openbtn'>
          <span onClick={this.openNav}>Open</span>
        </div>
        <div id='Navbar'>
          <ul>
            <div className='Navbar-closebtn'><span onClick={this.closeNav}> X </span></div>
            <li className='Navbar-link'><a href='#'>Intro</a></li>
            <li className='Navbar-link'><a href='#'>Glossary</a></li>
            <li className='Navbar-link'><a href='#'>Prepping for the Multi-Platform Release</a></li>
            <li className='Navbar-link'><a href='#'>Social Media Mania</a></li>
            <li className='Navbar-link'><a href='#'>Ultra-Violet, Piracy and the (Potential Death of) Cinematic Experience</a></li>
            <li className='Navbar-link'><a href='#'>A Virtual Future</a></li>
            <li className='Navbar-link'><a href='#'>Conclusion: The Next Stage of the Film and Television Experience</a></li>
          </ul>
        </div>
        <div></div>
      </div>
    )
  }
}

export default Navbar
