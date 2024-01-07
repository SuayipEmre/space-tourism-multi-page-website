import React, { useState } from 'react'
import { contentItems, technology } from '../constants'
import classNames from 'classnames'

const TechnologyContent: React.FC = () => {
  const [currentContent, setCurrentContent] = useState<string>('Spaceport')
  return (
    <div>
      {
        technology.map(item => item.name == currentContent && (
          <div className='flex flex-col lg:flex-row items-center  justify-between w-full'>

            {/*left side */}
            <div className='flex flex-col order-2 mt-12 lg:mt-0 gap-12 lg:gap-0 lg:order-1 lg:flex-col w-full  items-center justify-center ml-12'>
              
              <div className='flex flex-row lg:flex-col   gap-8  h-full'>
                {
                  contentItems.map(item => (
                    <div onClick={() => setCurrentContent(item.name)} className={classNames('w-[60px] h-[60px] lg:w-20 lg:h-20 bg-white flex items-center justify-center text-black rounded-full',{'bg-transparent border text-white' : item.name !== currentContent})}>
                      <p className={classNames('',{'text-white': item.name !== currentContent})}>{item.id}</p>
                    </div>
                  ))
                }
              </div>

              <div className='flex-1 flex w- items-center flex-col '>
                <div className='flex  flex-col items-center justify-center lg:block'>
                  <div className="text-indigo-200 text-base font-normal font-barlowCondensed tracking-[2.70px]">THE TERMINOLOGY…</div>
                  <div className="text-white text-[40px] lg:text-[56px] font-normal font-belleFair">{item.name}</div>
                  <div className="w-[444px] text-indigo-200  lg:text-lg font-normal  leading-loose">{item.description}</div>
                </div>
              </div>
            </div>

            {/*right side */}
            <div className='w-full bg-red-400 lg:w-[60%] order-1 lg:order-2 lg:flex lg:items-center lg:justify-end'>
              <img className='w-full  lg:w-[552px] ' src={item.images.portrait} alt="" />

            </div>


          </div>
        ))
      }
    </div>
  )
}

export default TechnologyContent