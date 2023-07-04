import React from 'react'
import './style.scss'
import TextSlideUp from '../effect/TextSlideUp'

function Info({index,data}) {
  const no = `0${index+1}`

  return (
    <div className='info'>
        <h1>
          <TextSlideUp>
            {no}
          </TextSlideUp>
        </h1>
        <div className="info_description">
            <h2>
                {data.title}
            </h2>
            <p>{data.description}</p>
        </div>
    </div>
  )
}

export default Info