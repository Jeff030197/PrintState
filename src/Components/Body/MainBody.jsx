import React from 'react'
import Tshirt from "../img/Banner/Tshirt.png"
function MainBody() {
  return (
    <div className='bg-bg1'>
 <div class="grid grid-cols-2 gap-4">
  <div>
    <p className='text-white text-6xl flex justify-center py-5'><strong>Your Ideas, Our Prints:</strong></p>
    <div>
      <p className='text-white text-2xl flex justify-center' >PrintState, Made Just for You!</p>
    </div>
    <div className='gap-1 flex justify-center py-5'>


      <button className='bg-pink-600 text-2xl rounded py-2 px-2 outline outline-1 outline-cyan-400 hover:bg-white text-white hover:text-black'> <strong>Shop</strong></button>


      <button className='bg-slate-950 text-2xl rounded px-2 outline outline-1 outline-cyan-400 text-white hover:bg-white hover:text-black'><strong>Create</strong></button>
    </div>
  </div>
  <div>
    <img src={Tshirt}/>
  </div>
</div>
    </div>
  )
}

export default MainBody