import React from 'react'
import user from '../assets/user.png'
const Testimonial = () => {
  return (
    <div class="bg-emerald-700 h-110">
        <div>
        <p class="text-5xl font-bold p-5 ">Testimonials</p></div>
      <div class="flex flex-3 mx-5 justify-between">
       
       <div class="h-40 w-40 bg-blue-700 rounded-sm shadow-2xl">
        <div class="flex "><img src={user} class="h-7 w-7 m-3" alt="" />
       <p class="flex -1 m-3"> User1</p></div>
       </div>
      <div class="h-40 w-40 bg-blue-700 rounded-sm shadow-2xl"><div class="flex "><img src={user} class="h-7 w-7 m-3" alt="" />
       <p class="flex -1 m-3"> User1</p></div></div>
               <div class="h-40 w-40 bg-blue-700 rounded-sm shadow-2xl">
<div class="flex "><img src={user} class="h-7 w-7 m-3" alt="" />
       <p class="flex -1 m-3"> User1</p></div>

               </div>
                      <div class="h-40 w-40 bg-blue-700 rounded-sm shadow-2xl">
                        <div class="flex "><img src={user} class="h-7 w-7 m-3" alt="" />
       <p class="flex -1 m-3"> User1</p></div>
                      </div>
      
      </div>
            <div class="flex flex-3 mx-5 justify-between">
       <div class="h-40 w-40 bg-cyan-950 mt-5 rounded-sm shadow-2xl">
        <div class="flex "><img src={user} class="h-7 w-7 m-3" alt="" />
       <p class="flex -1 m-3"> User1</p></div>
       </div>
            <div class="h-40 w-40 bg-cyan-950 mt-5 rounded-sm shadow-2xl"><div class="flex "><img src={user} class="h-7 w-7 m-3" alt="" />
       <p class="flex -1 m-3"> User1</p></div></div>
                   <div class="h-40 w-40 bg-cyan-950 mt-5 rounded-sm shadow-2xl"><div class="flex "><img src={user} class="h-7 w-7 m-3" alt="" />
       <p class="flex -1 m-3"> User1</p></div></div>      
                    <div class="h-40 w-40 bg-cyan-950 mt-5 rounded-sm shadow-2xl"><div class="flex "><img src={user} class="h-7 w-7 m-3" alt="" />
       <p class="flex -1 m-3"> User1</p></div></div> 
      </div>
    </div>
  )
}

export default Testimonial
