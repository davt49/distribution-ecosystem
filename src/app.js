import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './styles/style.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

import Startpage from './components/Start-page'
import Navbar from './components/common/Navbar'

class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <main>
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Startpage} />
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
