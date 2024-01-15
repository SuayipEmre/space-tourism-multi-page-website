import React, { useState } from 'react'
import { contentItems, technology } from '../constants'
import classNames from 'classnames'

const TechnologyContent: React.FC = () => {
  const [currentContent, setCurrentContent] = useState<string>('Launch vehicle')
  return (
    <div className='w-full flex items-center justify-end mt-12'>
      <div className='w-full lg:w-[90%]'>

        {
          technology.map(item => item.name == currentContent && (
            <div key={item.name} className='flex flex-col lg:flex-row items-center justify-between w-full'>

              {/*left side */}
              <div className='flex flex-col   order-2 mt-12 lg:mt-0 gap-12 lg:gap-0 lg:order-1 lg:flex-row w-full  items-center justify-center lg:ml-12'>

                <div className='flex flex-row lg:flex-col   gap-8  h-full'>
                  {
                    contentItems.map(item => (
                      <div key={item.id} onClick={() => setCurrentContent(item.name)} className={classNames(' w-10 h-10 md:w-[60px] md:h-[60px] lg:w-20 lg:h-20 bg-white flex items-center justify-center text-black rounded-full', { '!bg-transparent border': item.name !== currentContent })}>
                        <p className={classNames('font-belleFair', { 'text-white': item.name !== currentContent })}>{item.id}</p>
                      </div>
                    ))
                  }
                </div>

                <div className='flex-1 px-12 w-full  lg:w-auto flex mb-12  items-center flex-col '>
                  <div className='flex  flex-col items-center justify-center  lg:block gap-4'>
                    <div className="text-indigo-200 text-[14px] text-base font-normal font-barlowCondensed tracking-[2.70px]">THE TERMINOLOGY…</div>
                    <div className="text-white text-[24px] md:text-[40px] lg:text-[56px] font-normal font-belleFair">{item.name}</div>
                    <div className=" w-[327px] md:w-[458px] lg:w-[444px] text-[15px] md:text-normal text-indigo-200  lg:text-lg font-normal text-center lg:text-start  leading-loose">{item.description}</div>
                  </div>
                </div>
              </div>

              {/*right side */}
              <div className='w-full   lg:w-[60%] order-1 lg:order-2 lg:flex lg:items-center lg:justify-end'>
                <img className=' w-full  lg:w-[552px] ' src={item.images.portrait} alt="" />

              </div>


            </div>
          ))
        }
      </div>
    </div>
  )
}

export default TechnologyContent