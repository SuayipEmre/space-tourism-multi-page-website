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

            <div className='flex items-center justify-between w-[70%] '>

              <div className='w-[60%]'>
                <img className='' src={item.images.png} alt="no image" />
              </div>

              <div className='w-[40%]'>

                <div className=''>
                  {/*destination items (names)*/}
                  <div className='flex items-center w-[40%]  gap-12 '>
                    {
                      destinationsItems.map(destinationsItem => (
                        <p
                          onClick={() => setContent(destinationsItem.item)}
                          className={classNames('text-white text-base hover:border-b-[3px] hover:border-b-white hover:border-opacity-50 h-9 font-normal uppercase tracking-[2.70px]',{
                            'border-b-[3px]' : destinationsItem.item == content
                          })}
                          key={destinationsItem.id}>{destinationsItem.item}</p>
                      ))
                    }
                  </div>
                </div>

                {/* name  */}
                <p className='text-white text-[100px] uppercase font-normal'>{item.name}</p>
                {/* desc*/}
                <p className=' text-indigo-200 text-lg font-normal '>{item.description}</p>
                
                {/*distanve, travel */}
                <div className='flex items-center justify-between pr-24  lg:border-t  border-gray-700 lg:mt-12 lg:py-12 '>

                  <div>
                    <p className="text-indigo-200 text-sm font-normal font-['Barlow Condensed'] uppercase tracking-widest">AVG. DISTANCE</p>
                    <div className="text-white text-[28px] font-normal font-['Bellefair'] uppercase">{item.distance}</div>
                  </div>

                  <div>
                    <p className="text-indigo-200 text-sm font-normal font-['Barlow Condensed'] uppercase tracking-widest">Est. travel time</p>
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