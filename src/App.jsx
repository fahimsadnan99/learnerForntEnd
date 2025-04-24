import React,{useEffect,useState} from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";


const App = () => {
  const navigate = useNavigate()


  useEffect(() => {
    const token = localStorage.getItem('token');
     if(token){
      navigate("/");
     }else{
      navigate("/SignupForm");
     }
  }, []);


  

  return (
    <div>
      <Outlet></Outlet>
      <ToastContainer position="top-center"></ToastContainer>
    </div>
  )
}

export default App