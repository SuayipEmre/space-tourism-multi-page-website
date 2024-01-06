import React, { useState } from 'react'
import { destination, destinationsItems } from '../constants';
import classNames from 'classnames';



const DestionationContent: React.FC = () => {
  const [content, setContent] = useState<string>('Moon')


  return (
    <div className='lg:mt-12'>



      {
        destination.map(item => item.name == content && (
          <div key={item.name} className='w-screen flex justify-center py-12   px-12'>

            <div className='flex items-center flex-col xl:flex-row  gap-6 md:gap-12 xl:gap-0  lg:justify-between   md:w-full xl:w-[70%] '>

              <div className='w-[40%] xxl:w-[60%]'>
                <img className='' src={item.images.png} alt="no image" />
              </div>

              <div className='flex flex-col gap-8 lg:gap-0 items-center justify-center lg:block md:w-[80%] xl:w-[50%]'>

                {/*destination items (names)*/}
                <div >

                  <div className='flex items-center w-full  gap-12 '>
                    {
                      destinationsItems.map(destinationsItem => (
                        <p
                          onClick={() => setContent(destinationsItem.item)}
                          className={
                            classNames('text-white font-barlowCondensed  text-sm md:text-base hover:border-b-[3px] hover:border-b-white hover:border-opacity-50 h-9 font-normal uppercase tracking-[2.7px]', {
                            'border-b-[3px]': destinationsItem.item == content
                          })}
                          key={destinationsItem.id}>{destinationsItem.item}</p>
                      ))
                    }
                  </div>
                </div>

                {/* name   */}
                <p className='text-white text-[56px] md:text-[80px] lg:text-[100px] uppercase font-belleFair font-normal'>{item.name}</p>
                {/* desc*/}
                <p className=' text-indigo-200 text-[15px]    lg:text-lg text-center lg:text-start font-normal '>{item.description}</p>

                {/*distanve, travel */}
                <div className='flex items-center   gap-4 flex-col md:flex-row justify-between  w-[90%] xl:w-full pr-12    border-t  border-gray-700 xl:mt-12  py-6 xl:py-12 xl:pr-24 '>

                  <div className='flex items-center justify-center flex-col md:block'>
                    <p className="text-indigo-200 text-center lg:text-start text-sm font-normal  uppercase tracking-widest font-barlowCondensed">AVG. DISTANCE</p>
                    <p className="text-white text-[28px] font-normal font-belleFairuppercase">{item.distance}</p>
                  </div>

                  <div className='flex items-center justify-center flex-col md:block'>
                    <p className="text-indigo-200 text-center lg:text-start text-sm font-normal  uppercase tracking-widest font-barlowCondensed">Est. travel time</p>
                    <p className="text-white text-[28px] font-normal font-belleFair uppercase">{item.travel}</p>
                  </div>

                </div>
              </div>
            </div>

          </div>
        ))
      }

    </div>
  )
}

export default DestionationContent