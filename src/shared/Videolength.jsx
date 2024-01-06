import moment from 'moment/moment'
import React from 'react'

const Videolength = ( {time}) => {
    const videolengthInSecs = moment().startOf("day").seconds(time).format("H:mm:ss");
  return (
   <div className="absolute bottom-2 right-2 bg-black py-1 px-2 text-white text-xs rounded-md">
           {videolengthInSecs}
   </div>
  )
}

export default Videolength
