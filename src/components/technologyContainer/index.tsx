import React from 'react'
import Title from '../title'
import TechnologyContent from './content'

const TechnologyContainer: React.FC = () => {
  return (
    <div className='w-full'>
      <Title number='03' text='SPACE LAUNCH 101' />

        <TechnologyContent />
    </div>
  )
}

export default TechnologyContainer