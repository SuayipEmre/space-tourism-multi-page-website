import React, { useState } from 'react'
import { destination, destinationsItems } from '../constants';
import classNames from 'classnames';



const DestionationContent: React.FC = () => {
  const [content, setContent] = useState<string>('Moon')


  return (
    <div className='lg:mt-12'>



      {
        destination.map(item => item.name == content && (
          <div key={item.name} className='w-screen flex justify-center py-12'>

            <div className='flex items-center md:flex-col lg:flex-row  md:gap-12 lg:gap-0  lg:justify-between   md:w-full lg:w-[70%] '>

              <div className='w-[40%] xl:w-[60%]'>
                <img className='' src={item.images.png} alt="no image" />
              </div>

              <div className='flex flex-col gap-8 lg:gap-0 items-center justify-center lg:block md:w-[80%] xl:w-[40%]'>

                {/*destination items (names)*/}
                <div >

                  <div className='flex items-center w-[40%]  gap-12 '>
                    {
                      destinationsItems.map(destinationsItem => (
                        <p
                          onClick={() => setContent(destinationsItem.item)}
                          className={
                            classNames('text-white text-base hover:border-b-[3px] hover:border-b-white hover:border-opacity-50 h-9 font-normal uppercase tracking-[2.7px]', {
                            'border-b-[3px]': destinationsItem.item == content
                          })}
                          key={destinationsItem.id}>{destinationsItem.item}</p>
                      ))
                    }
                  </div>
                </div>

                {/* name  */}
                <p className='text-white md:text-[80px] lg:text-[100px] uppercase font-normal'>{item.name}</p>
                {/* desc*/}
                <p className=' text-indigo-200   lg:text-lg md:text-center lg:text-start font-normal '>{item.description}</p>

                {/*distanve, travel */}
                <div className='flex items-center justify-between w-[90%] xl:w-full px-12    border-t  border-gray-700 xl:mt-12  md:py-6 xl:py-12 xl:pr-24 '>

                  <div>
                    <p className="text-indigo-200 text-center lg:text-start text-sm font-normal  uppercase tracking-widest">AVG. DISTANCE</p>
                    <div className="text-white text-[28px] font-normal font-['Bellefair'] uppercase">{item.distance}</div>
                  </div>

                  <div>
                    <p className="text-indigo-200 text-center lg:text-start text-sm font-normal  uppercase tracking-widest">Est. travel time</p>
                    <div className="text-white text-[28px] font-normal font-['Bellefair'] uppercase">{item.travel}</div>
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