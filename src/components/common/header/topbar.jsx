import { config } from '@/helpers/congif'
import React from 'react'
import { Container } from 'react-bootstrap'
import "./topbar.scss"
const Topbar = () => {
  return (
    <div className='topbar'>
        <Container>
        <div className='slogan'>
        📢{config.project.slogan}
        </div>
        <span>Menu</span>
        </Container>
    </div>
  )
}

export default Topbar