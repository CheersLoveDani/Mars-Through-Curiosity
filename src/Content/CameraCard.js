import React from 'react'
import { useParams } from 'react-router'


function CameraCard({ imgArray }) {
  const [index, setIndex] = React.useState(0)
  const { day } = useParams()

  // * Reset each card back to index 0 when url changes
  React.useEffect(() => {
    setIndex(0)
  }, [day])

  // * 
  const handleClick = (e) => {
    if (e.target.id === 'left' && index > 0) {
      setIndex(index - 1)
    } else if (e.target.id === 'right' && index < imgArray.length - 1) {
      setIndex(index + 1)
    }
  }

  return (
    <div className='card is-flex-direction-column column'>
      <div className='is-flex is-justify-content-center'>
        <img
          className='image card-image'
          src={
            imgArray.length > 0 ?
              imgArray[index].img_src :
              'https://img.discogs.com/jiSrOapM-LZE478Om7z8tuj74cA=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-10167912-1492788723-6558.jpeg.jpg'
          }
        />
      </div>
      <div className="columns is-gapless">
        <button
          id='left'
          className='button is-pulled-left'
          onClick={handleClick}
        >
          {'<'}
        </button>
        <p className='column has-text-centered'>
          {imgArray.length > 0 ? `${index + 1} / ${imgArray.length}` : 'No Signal'}
        </p>
        <button
          id='right'
          className='button is-pulled-right'
          onClick={handleClick}
        >
          {'>'}
        </button>
      </div>
    </div >
  )
}

export default CameraCard