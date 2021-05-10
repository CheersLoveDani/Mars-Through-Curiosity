// require('dotenv').config()
import Rover from './assets/curiosity-rover.jpeg'

import Footer from './Common/Footer'

function App() {
  console.log(process.env.REACT_APP_API_KEY)
  return (
    <>
      <h1>Hello World!</h1>
      <img src={Rover} />

      <Footer />
    </>

  )
}

export default App
