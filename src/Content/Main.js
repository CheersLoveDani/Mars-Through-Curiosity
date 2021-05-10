import React from 'react'

import Rover from '../assets/curiosity-rover.jpeg'
import CameraCard from './CameraCard'
import { getAllPhotos } from '../lib/api'


function Main() {
  const [allPhotos, setAllPhotos] = React.useState(null)


  React.useEffect(() => {
    // Get photos
    const getData = async () => {
      try {
        const res = await getAllPhotos()
        setAllPhotos(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  const getImages = (camera) => {
    if (allPhotos) {
      let num = 0
      return (
        allPhotos.photos.filter((photo) => {
          if (photo.camera.name === camera && num < 100) {
            num += 1
            return photo.camera.name === camera
          }
        })
      )
    }
  }

  return (
    <>
      <h2>This is the main page</h2>
      <img className="rover image is-1x1" src={Rover} />
      <div className='columns '>
        <CameraCard
          imgArray={allPhotos ? getImages('FHAZ') : []}
        />
        <CameraCard
          imgArray={allPhotos ? getImages('RHAZ') : []}
        />
        <CameraCard
          imgArray={allPhotos ? getImages('MAST') : []}
        />
        <CameraCard
          imgArray={allPhotos ? getImages('CHEMCAM') : []}
        />
        <CameraCard
          imgArray={allPhotos ? getImages('NAVCAM') : []}
        />
        <CameraCard
          imgArray={allPhotos ? getImages('MAHLI') : []}
        />
      </div>
    </>
  )
}

export default Main