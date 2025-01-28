import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  let ref1=useRef();
   let ref2=useRef();
   let ref3=useRef();


   const d=new Date();
   const debut1={
    transform:`rotate(${d.getSeconds()*6}deg)`
   }

   const debut2={
    transform:`rotate(${d.getMinutes()*6}deg)`
   }

   const debut3={
    transform:`rotate(${d.getHours()*30+6*Math.round(d.getMinutes()/12)}deg)`
   }
  useEffect(()=>{
    setInterval(() => {
       const d=new Date();    
       ref1.current.style.transform=`rotate(${d.getSeconds()*6}deg)`
       ref2.current.style.transform=`rotate(${d.getMinutes()*6}deg)`
       const heures=d.getHours()*30+6*Math.round(d.getMinutes()/12)

       ref3.current.style.transform=`rotate(${heures}deg)`
    }, 1000);
  },[])
 

  return (
    <div className='w-[100%] h-[100%] flex justify-center items-center'>
      <div className='relative border-[10px] border-gray-300 w-[250px] h-[250px] rounded-full bg-gradient-to-l from-amber-200 to-fuchsia-300 shrink-0 sm:w-[300px] sm:h-[300px] bg-cyan-500 shadow-lg shadow-cyan-500/50'>
        <div className='bg-black w-[10px] h-[10px] rounded-full absolute left-[calc(50%-5px)] top-[calc(50%-5px)] z-30 '></div>
        <div ref={ref1} className='secondes absolute w-[1px] h-[calc(90px)] left-[calc(50%-0.5px)] top-[calc(50%-90px)] bg-black origin-bottom z-[5] ' style={debut1}></div>
        <div ref={ref2} style={debut2}  className='minutes absolute w-[2px] h-[calc(70px)] left-[calc(50%-1px)] top-[calc(50%-70px)] bg-red-500 origin-bottom sm:h-[80px] sm:top-[calc(50%-80px)] z-[2] '></div>
        <div ref={ref3} style={debut3} className='heures absolute w-[2px] h-[calc(50px)] left-[calc(50%-1px)] top-[calc(50%-50px)] bg-gray-500 origin-bottom sm:h-[65px] sm:top-[calc(50%-65px)] z-[1]'></div>
        <div className=' h-[calc(50%-10px)]  w-[20px] absolute left-[calc(50%-10px)] top-[10px]'><div className=' h-[20px] w-[100%] flex justify-center items-center oleo-script-bold relative top-1.5'>12</div></div>
        <div className=' h-[calc(50%-10px)] w-[20px] absolute left-[calc(50%-10px)] top-[10px] rotate-[30deg] origin-bottom'><div className=' h-[20px] w-[100%] flex justify-center items-center rotate-[-30deg] oleo-script-bold relative top-1'>1</div></div>
        <div className=' h-[calc(50%-10px)] w-[20px] absolute left-[calc(50%-10px)] top-[10px] rotate-[60deg] origin-bottom'><div className=' h-[20px] w-[20px] flex justify-center items-center rotate-[-60deg] oleo-script-bold relative top-1'>2</div></div>
        <div className=' h-[calc(50%-10px)] w-[20px] absolute left-[calc(50%-10px)] top-[10px] rotate-[90deg] origin-bottom'><div className=' h-[20px] w-[20px] flex justify-center items-center rotate-[-90deg] oleo-script-bold relative top-1'>3</div></div>
        <div className=' h-[calc(50%-10px)] w-[20px] absolute left-[calc(50%-10px)] top-[10px] rotate-[120deg] origin-bottom'><div className=' h-[20px] w-[20px] flex justify-center items-center rotate-[-120deg] oleo-script-bold relative top-1'>4</div></div>
        <div className=' h-[calc(50%-10px)] w-[20px] absolute left-[calc(50%-10px)] top-[10px] rotate-[150deg] origin-bottom'><div className=' h-[20px] w-[20px] flex justify-center items-center rotate-[-150deg] oleo-script-bold relative top-1'>5</div></div>
        <div className=' h-[calc(50%-10px)] w-[20px] absolute left-[calc(50%-10px)] top-[10px] rotate-[180deg] origin-bottom'><div className=' h-[20px] w-[20px] flex justify-center items-center rotate-[-180deg] oleo-script-bold relative top-1'>6</div></div>
        <div className=' h-[calc(50%-10px)] w-[20px] absolute left-[calc(50%-10px)] top-[10px] rotate-[210deg] origin-bottom'><div className=' h-[20px] w-[20px] flex justify-center items-center rotate-[-210deg] oleo-script-bold relative top-1'>7</div></div>
        <div className=' h-[calc(50%-10px)] w-[20px] absolute left-[calc(50%-10px)] top-[10px] rotate-[240deg] origin-bottom'><div className=' h-[20px] w-[20px] flex justify-center items-center rotate-[-240deg] oleo-script-bold relative top-1'>8</div></div>
        <div className=' h-[calc(50%-10px)] w-[20px] absolute left-[calc(50%-10px)] top-[10px] rotate-[270deg] origin-bottom'><div className=' h-[20px] w-[20px] flex justify-center items-center rotate-[-270deg] oleo-script-bold relative top-1'>9</div></div>
        <div className=' h-[calc(50%-10px)] w-[20px] absolute left-[calc(50%-10px)] top-[10px] rotate-[300deg] origin-bottom'><div className=' h-[20px] w-[19px] flex justify-center items-center rotate-[-300deg] oleo-script-bold relative top-1'>10</div></div>
        <div className=' h-[calc(50%-10px)] w-[20px] absolute left-[calc(50%-10px)] top-[10px] rotate-[330deg] origin-bottom'><div className=' h-[20px] w-[20px] flex justify-center items-center rotate-[-330deg] oleo-script-bold relative top-1'>11</div></div>

      </div>
    </div>
  )
}

export default App
