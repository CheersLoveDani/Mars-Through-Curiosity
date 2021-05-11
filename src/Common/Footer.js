import React from 'react'
import { useHistory } from 'react-router'
import { getManifest } from '../lib/api'

function Footer() {
  const [manifest, setManifest] = React.useState(null)
  const history = useHistory()

  const handleChange = (e) => {
    if (e.key === 'Enter' || e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      if (Number(e.target.value) < 0) {
        history.push('/' + 0)
        e.target.value = 0
      } else if (Number(e.target.value) > Number(manifest.photo_manifest.max_sol)) {
        history.push('/' + manifest.photo_manifest.max_sol)
        e.target.value = manifest.photo_manifest.max_sol
      } else {
        history.push('/' + e.target.value)
      }
    }
  }

  const handleRandom = () => {
    const randSol = Math.floor(Math.random() * Number(manifest.photo_manifest.max_sol))
    history.push('/' + randSol)
  }

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getManifest()
        console.log('fetching manifest')
        console.log(res.data)
        setManifest(res.data)

      } catch (err) {
        console.warn(err)
      }
    }
    getData()
  }, [])
  // console.log(manifest)

  return (
    <footer className='footer'>
      <div className='content has-text-centered'>
        <p className='has-text-centered'>{'Earth Date:'}</p>
        {/* <button className='button'>
          -10
        </button>
        <button className='button'>
          -1
        </button> */}
        <input
          type="number"
          className='input is-one-third'
          placeholder='Sol Days: e.g. 1000'
          onKeyDown={handleChange}>
        </input>
        <button
          className='button'
          onClick={handleRandom}
        >
          Random Sol!
        </button>
        {/* <button className='button'>
          +1
        </button>
        <button className='button'>
          +10
        </button> */}
      </div>
      <p className='has-text-centered'>{manifest ? `Latest Sol Date: ${manifest.photo_manifest.max_sol}` : '...loading'}</p>
    </footer >
  )
}

export default Footer