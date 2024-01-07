import React, { useState } from 'react'
import { crew } from './constant'
import { listItems } from './listItems'
import classNames from 'classnames'

const CrewContainer: React.FC = () => {
    const [currentContent, setCurrentContent] = useState<string>('Douglas Hurley')

    return (
        <div className='flex items-center justify-center  '>
            {
                crew.map(item => item.name == currentContent && (
                    <div key={item.id} className='flex items-center justify-between w-[80%]'>

                        {/*Left side */}
                        <div className='flex flex-col  justify-between gap-12'>
                            <p className='opacity-50 text-white text-[32px] font-normal font-belleFair uppercase'>{item.role}</p>
                            <p className='text-white text-[56px] font-normal font-belleFair uppercase'>{item.name}</p>
                            <div className="w-[444px] text-indigo-200 text-lg font-normal font-['Barlow'] leading-loose">{item.bio}</div>

                            <div className='w-full '>
                                <div className="w-[132px] h-[15px] grid grid-cols-4  ">
                                    {
                                        listItems.map(item => (

                                            <div onClick={() => setCurrentContent(item.name)} key={item.id} className={classNames('w-[15px]  col-span-1 mx-4 h-[15px]  bg-white opacity-20  rounded-full', {
                                                "opacity-100": item.name == currentContent
                                            })} />
                                        ))
                                    }

                                </div>
                            </div>
                        </div>
                        {/*Right side */}
                        <div>
                            <img src={item.images.png} alt="" />
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default CrewContainer


/*
    
*/