import { useHistory } from 'react-router'

function Footer() {
  const history = useHistory()

  const handleChange = (e) => {
    history.push('/' + e.target.value)
  }

  return (
    <footer className='footer'>
      <div className='content has-text-centered'>
        <button className='button'>
          -10
        </button>
        <button className='button'>
          -1
        </button>
        <input type="number" className='input is-inline' placeholder='Sol Days: e.g. 1000' onChange={handleChange}>

        </input>
        <button className='button'>
          +1
        </button>
        <button className='button'>
          +10
        </button>
      </div>
    </footer >
  )
}

export default Footer