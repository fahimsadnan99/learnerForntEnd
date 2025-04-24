import React,{useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import VideoPlayer from "../UniversalComponent"
import axios from 'axios';


const ComponentWrapper = ({title,url,children}) => {
  let [active , setActive] = useState(null)
  const navigate  = useNavigate()


    


      useEffect(() => {


         const token = localStorage.getItem('token');

         axios.get('https://learn-trading-backend.vercel.app/api/token/check', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(response => {
          console.log('Response:', response.data);
          setActive(response?.data?.isValid) 

        })
        .catch(error => {
          navigate("/SignupForm")
          
        });
       }, []);


       return (
        active ? (
          <div className="bgDark py-2">
            <button className="btn btn-success m-3" onClick={() => navigate(-1)}>
              GO BACK
            </button>
            <div className="container pb-5">
              <h2 className="text-white border p-2 text-center bg-success">
                {title}
              </h2>
              <div>
                {children}
              </div>
      
              {/* <div>
                <VideoPlayer title={`${title} video`} url={url}></VideoPlayer>
              </div> */}
            </div>
          </div>
        ) : (
          <div>LOADING.....</div>
        )
      );

    }
export default ComponentWrapper