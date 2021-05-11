import React from 'react'
import { useParams } from 'react-router-dom'

import Rover from '../assets/curiosity-rover.jpeg'
import CameraCard from './CameraCard'
import { getAllPhotos } from '../lib/api'


function Main() {
  const [allPhotos, setAllPhotos] = React.useState(null)
  const { day } = useParams()

  React.useEffect(() => {
    // Get photos
    const getData = async () => {
      try {
        const res = await getAllPhotos(day)
        setAllPhotos(res.data)
        console.log('useEffect running')
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [day])

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


  console.log('params', useParams(), day)

  return (
    <>
      <h2>This is the main page</h2>
      <img className="rover image is-1x1" src={Rover} />
      <div className='columns '>
        <h4>FHAZ</h4>
        <CameraCard
          imgArray={allPhotos ? getImages('FHAZ') : []}
        />
        <h4>RHAZ</h4>
        <CameraCard
          imgArray={allPhotos ? getImages('RHAZ') : []}
        />
        <h4>MAST</h4>
        <CameraCard
          imgArray={allPhotos ? getImages('MAST') : []}
        />
        <h4>CHEMCAM</h4>
        <CameraCard
          imgArray={allPhotos ? getImages('CHEMCAM') : []}
        />
        <h4>NAVCAM</h4>
        <CameraCard
          imgArray={allPhotos ? getImages('NAVCAM') : []}
        />
        <h4>MAHLI</h4>
        <CameraCard
          imgArray={allPhotos ? getImages('MAHLI') : []}
        />
      </div>
    </>
  )
}

export default Main