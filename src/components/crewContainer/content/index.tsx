import React, { useState } from 'react'
import classNames from 'classnames'
import { crew, listItems } from '../constant'

const CrewContent : React.FC = () => {
    const [currentContent, setCurrentContent] = useState<string>('Douglas Hurley')

  return (
    <div>
        <div className='flex items-center justify-center   w-full     '>
            {
                crew.map(item => item.name == currentContent && (
                    <div key={item.id} className='flex items-center   justify-between w-full   lg:w-[70%]  flex-col  xl:flex-row'>

                        {/*Left side */}
                        <div className='flex flex-col order-2 md:w-[50%]  md:order-1 w-full     justify-between   items-center lg:items-start gap-4 md:gap-6 lg:gap-12 mb-24 md:my-0'>
                            <p className='opacity-50 order-2 md:order-1 text-white  md:text-[24px] lg:text-[32px] font-normal font-belleFair uppercase'>{item.role}</p>
                            <p className='text-white order-3 md:order-2 text-[24px]  md:text-[40px] lg:text-[56px] font-normal font-belleFair uppercase'>{item.name}</p>
                            <div className=" w-[327px] md:w-[444px] order-4 md:order-3 text-indigo-200 text-[15px] md:text-[16px] text-center lg:text-start lg:text-lg font-normal leading-loose">{item.bio}</div>

                            <div className='w-full order-1 md:order-4 mt-12 md:mt-0  flex items-center justify-center lg:block '>
                                <div className="w-[132px] h-[15px] grid grid-cols-4  ">
                                    {
                                        listItems.map(item => (

                                            <div onClick={() => setCurrentContent(item.name)} key={item.id} className={classNames('w-[10px] lg:w-[15px]             col-span-1 mx-4 h-[10px] lg:h-[15px]  bg-white opacity-20  rounded-full', {
                                                "!opacity-100": item.name == currentContent
                                            })} />
                                        ))
                                    }

                                </div>
                            </div>
                        </div>
                        {/*Right side */}
                        <div className='flex w-[327px]  md:w-auto  items-center justify-center  md:block  border-b md:border-none  border-gray-700 order-1 md:order-2  mt-4 md:mt-12 lg:mt-0'>
                            <img src={item.images.png} className='w-[50%] md:w-auto' alt="" />
                        </div>
                    </div>
                ))
            }

        </div>
    </div>
  )
}

export default CrewContent