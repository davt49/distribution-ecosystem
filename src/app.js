import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './styles/style.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

import Startpage from './components/Start-page'
import Intro from './components/essayparts/Intro'
import Prepping from './components/essayparts/Prepping'
import Social from './components/essayparts/Social'
import Ultraviolet from './components/essayparts/Ultra-Violet'
import Virtual from './components/essayparts/Virtual'
import Conclusion from './components/essayparts/Conclusion'
import Glossary from './components/essayparts/Glossary'
import References from './components/essayparts/References'
import Navbar from './components/common/Navbar'

class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <main>
          <Navbar/>
          <Switch>
            <Route path='/Intro' component={Intro} />
            <Route path='/Prepping' component={Prepping} />
            <Route path='/Social' component={Social} />
            <Route path='/Ultra-Violet' component={Ultraviolet} />
            <Route path='/Virtual' component={Virtual} />
            <Route path='/Conclusion' component={Conclusion} />
            <Route path='/Glossary' component={Glossary} />
            <Route path='/References' component={References} />
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
