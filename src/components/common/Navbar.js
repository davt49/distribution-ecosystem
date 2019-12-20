import React from 'react'

class Navbar extends React.Component{
  constructor(){
    super()

    this.state = {}

    this.openNav = this.openNav.bind(this)
    this.closeNav = this.closeNav.bind(this)
  }

  openNav(e){
    e.preventDefault()
    document.getElementById('Navbar').style.width = '18vw'

  }

  closeNav(e){
    e.preventDefault()
    document.getElementById('Navbar').style.width = '0'
  }

  render(){
    return(
      <div>
        <div id='Navbar-openbtn'>
          <span onClick={this.openNav}>&#9776; Navigate</span>
        </div>
        <div id='Navbar'>
          <div className='Navbar-closebtn'>
            <span onClick={this.closeNav}>&times;</span>
          </div>
        <div className='Navbar-links'>
          <a href='/'>Startpage</a>
          <a href='./Glossary'>Glossary</a>
          <a href='./Intro'>Intro</a>
          <a href='./Prepping'>Prepping for the Multi-Platform Release</a>
          <a href='./Social'>Social Media Mania</a>
          <a href='./Ultra-Violet'>Ultra-Violet, Piracy and the (Potential Death of) Cinematic Experience</a>
          <a href='./Virtual'>A Virtual Future</a>
          <a href='./Conclusion'>Conclusion: The Next Stage of the Film and Television Experience</a>
          <a href='./References'>Bibliography</a>
        </div>
          
        </div>
      </div>
    )
  }
}

export default Navbar
