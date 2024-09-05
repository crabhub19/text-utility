import React from 'react'
import creator from './creator.png'
export default function Footer() {
  return (
    <div>
        <div className='d-flex justify-content-center align-items-center p-1 gap-4 bg-dark'>
            <img className="rounded-circle" style="width: 1.5rem; height: 1.5rem;" src={creator} alt="" srcset="" />
            <b>Xlorex Bishal</b>
        </div>
    </div>
  )
}
