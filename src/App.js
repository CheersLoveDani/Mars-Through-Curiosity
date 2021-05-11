import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Footer from './Common/Footer'
import Home from './Content/Home'
import Main from './Content/Main'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/:day' component={Main} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App
