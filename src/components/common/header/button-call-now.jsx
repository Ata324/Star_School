import { config } from '@/helpers/congif'
import React from 'react'

const ButtonCallNow = () => {
  return (
    <div>
        <a className='btn btn-outline-primary' href={`tel:${config.contact.phone1}`}>CALL NOW</a>
    </div>
  )
}

export default ButtonCallNow