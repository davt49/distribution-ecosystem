import React from 'react'
import axios from 'axios'

class Glossary extends React.Component{
  constructor(){
    super()

    this.state = { data: null}

  }

  getData(){
    axios.get('api/glossaries')
      .then(res => this.setState({data: res.data}))
      .catch(err => console.log(err))
  }

  componentDidMount(){
    this.getData()
  }


  render(){
    return(
      <div className='glossary'>
        {this.state.data && this.state.data.map(glossary => {
          return <div className='glossary-item' key={glossary._id} >
            <div className='glossary-title'>{glossary.name}</div>
            <div className='glossary-info'>{glossary.info}</div>
          </div>
        })}
      </div>
    )
  }
}
export default Glossary
