import React from 'react'
import Title from '../title'
import DestionationContent from './content'



const DestinationContainer  :React.FC = () => {
 
  return (
    <div>
        <Title number='01' text='PICK YOUR DESTINATION' />
        <DestionationContent />
    </div>
  )
}

export default DestinationContainer