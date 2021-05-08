import React from 'react'

import { events } from '../data'
import Event from './Event'

function Events() {
  return events.map((event) => <Event key={event.id} {...event} />)
}

export default Events
