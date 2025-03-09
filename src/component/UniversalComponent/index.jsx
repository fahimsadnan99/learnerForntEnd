import React from "react";
import ReactPlayer from "react-player";

const index = ({title,url}) => {
  return (
   
    <div className="my-5">
         <h3 className="py-4">{title}</h3>
      <ReactPlayer
        url={url}
        controls={true}
        width="100%"
        loop={true}
      />

      <h3 className="py-3">THANK YOU...</h3>
    </div>
  );
};

export default index;
