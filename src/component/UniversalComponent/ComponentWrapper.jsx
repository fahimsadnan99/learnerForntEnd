import React from 'react'
import { useNavigate } from "react-router-dom";
import VideoPlayer from "../UniversalComponent"

const ComponentWrapper = ({title,url,children}) => {
     const navigate = useNavigate()
  return (
    <div className="bgDark py-2">
      <button className="btn btn-success m-3" onClick={()=> navigate(-1)}>GO BACK</button>
      <div className="container pb-5">
        <h1 className="text-white border border-bottom  text-center bg-danger">
          {title}
        </h1>
        <div>
            {children}
        </div>

        <div>
          <VideoPlayer title={`${title} video`} url={url}></VideoPlayer>
        </div>
    </div>
    </div>
  )
}


export default ComponentWrapper