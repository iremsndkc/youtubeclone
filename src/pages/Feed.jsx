import React, { useContext } from 'react'
import Sidebar from '../components/Sidebar'
import { VideoContext } from '../context/videoContext'
import Loader from '../components/Loader'
import ErrorDiplay from '../components/ErrorDiplay'

const Feed = () => {
  const {error , isLoading , videos} = useContext(VideoContext)
  console.log(videos)
  return (
    <div className='flex'>
      <Sidebar/>
      <div className='videos'>
        {isLoading ? (<Loader/>) : error ? (<ErrorDiplay/>) : (
          <div>veri</div>
        )}
      </div>
    </div>
  )
}

export default Feed
