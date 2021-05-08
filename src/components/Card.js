import React from 'react'

import { events } from '../data'
import Event from './Event'

// Invitation card
//
//  -[] accept
//  -[] decline
//  -[] how many people are going with avatars
//  -[] increment and decrement

function Cards() {
  return events.map((event) => <Event key={event.id} {...event} />)
}

export default Cards
