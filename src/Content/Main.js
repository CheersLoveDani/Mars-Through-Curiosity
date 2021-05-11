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
      <img className="rover image is-1x1" src={Rover} />
      <div className="container">
        <div className="items column-1">
          <div className="card-block card-1">
            <h4>FHAZ</h4>
            <CameraCard
              imgArray={allPhotos ? getImages('FHAZ') : []}
            />
          </div>
          <div className="card-block card-2">
            <h4>RHAZ</h4>
            <CameraCard
              imgArray={allPhotos ? getImages('RHAZ') : []}
            />
          </div>
          <div className="card-block card-3">
            <h4>MAST</h4>
            <CameraCard
              imgArray={allPhotos ? getImages('MAST') : []}
            />
          </div >
        </div>
        <div className="items column-2">
          <div className="card-block card-4">
            <h4>CHEMCAM</h4>
            <CameraCard
              imgArray={allPhotos ? getImages('CHEMCAM') : []}
            />
          </div >
          <div className="card-block card-5">
            <h4>MAHLI</h4>
            <CameraCard
              imgArray={allPhotos ? getImages('MAHLI') : []}
            />
          </div >
          <div className="card-block card-6">
            <h4>NAVCAM</h4>
            <CameraCard
              imgArray={allPhotos ? getImages('NAVCAM') : []}
            />
          </div >
        </div >
      </div>
    </>
  )
}

export default Main