import hero from '../assets/hero.jpeg'

function Home() {
  return (
    <>
      <h1 className='title has-text-centered'>Curiosity Rover</h1>
      <img src={hero} />
      <p className="has-text-centered">Have a look around Mars with NASAs onboard cameras on the Curiosity Rover. Pick a Sol day (days on mars) and hit ENTER to get a view of Mars on that day.</p>
    </>
  )
}

export default Home