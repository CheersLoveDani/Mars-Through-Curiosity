import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Footer from './Common/Footer'
import Main from './Content/Main'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/:day' component={Main} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App
