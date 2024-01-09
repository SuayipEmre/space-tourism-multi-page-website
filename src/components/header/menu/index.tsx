import classNames from 'classnames'
import React from 'react'
import { navItems } from '../../constants'
import { CloseIcon } from '../../../SVGs/closeIcon'
import { NavLink } from 'react-router-dom'


type MenuTypes = {
    isModalVisible: boolean,
    setIsModalVisible : (status : boolean) => void
}
const Menu: React.FC<MenuTypes> = ({ isModalVisible, setIsModalVisible }) => {

    return (
        <nav className={classNames('hidden md:w-[450px] z-10 md:z-0  md:flex  md:h-[96px] lg:w-[830px] lg:flex-1  lg:h-24  md:items-center md:justify-evenly lg:px-12 lg:mt-10 bg-white bg-opacity-5 backdrop-blur-[81.55px] ', {
            '!flex flex-col gap-12   !absolute top-0 right-0 m-0  p-6   h-[667px] w-[254px]  ': isModalVisible
        })}>


            {
                isModalVisible && <div className=' flex items-center justify-end' onClick={() => setIsModalVisible(false)}>
                    <CloseIcon />
                </div>
            }
            {
                navItems.map(item => (
                    <div key={item.id} className='flex items-center h-full  relative gap-[11px]'>
                        <p className={classNames('text-white hidden lg:block font-barlowCondensed font-bold',{
                            '!block' : isModalVisible
                        })}>{item.number}</p>
                        
                        
                        <NavLink to={item.to} className='
                        text-sm
                         hover:after:lg:absolute 
                         hover:after:lg:h-[3px]
                         hover:after:lg:w-full
                         hover:after:lg:bg-white 
                         hover:after:lg:bottom-0 
                         hover:after:lg:left-0 
                         hover:after:lg:opacity-50 
                         font-barlowCondensed
                         tracking-[2.70px] md:tracking-widest lg:text-[16px] text-white'>{item.text}</NavLink>
                    </div>
                ))

            }
        </nav>
    )
}
//   left-0
export default Menu

