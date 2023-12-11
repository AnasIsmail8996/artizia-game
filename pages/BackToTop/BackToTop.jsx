import { useEffect, useState } from 'react';
import './BackToTop.css';
import { FaArrowUp } from "react-icons/fa";
const BackToTop = () => {

    const [isvisible, setIsVisible]=useState(false)

    const GoToTop =()=>{
        window.scroll({top:0, left:0, behavior:'smooth'})
    }


const listenToScroll=()=>{

    const heightToHiden=250;
    const userScroll =document.body.scrollTop || document.documentElement.scrollTop;
  
    if(userScroll > heightToHiden){
        setIsVisible(true)
    }else{
        setIsVisible(false)
    }


}

useEffect(()=>{
    window.addEventListener('scroll', listenToScroll)

},[])


  return (
        <>
        {isvisible &&
      <div className='top-btn' onClick={GoToTop}>
      <FaArrowUp  className='top-btn-icon'/>
    </div>
    }
        </>
  )
}

export default BackToTop;