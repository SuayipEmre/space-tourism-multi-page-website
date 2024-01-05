import classNames from 'classnames'
import React from 'react'
import { navItems } from '../../constants'
import { CloseIcon } from '../../../SVGs/closeIcon'


type MenuTypes = {
    isModalVisible: boolean,
}
const Menu: React.FC<MenuTypes> = ({ isModalVisible }) => {

    return (
        <nav className={classNames('hidden md:w-[450px]  md:flex  md:h-[96px] lg:w-[830px] lg:flex-1  lg:h-24  md:items-center md:justify-evenly lg:px-12 lg:mt-10 bg-white bg-opacity-5 backdrop-blur-[81.55px] ', {
            '!flex flex-col gap-12   !absolute top-0 right-0 m-0  p-6   h-[667px] w-[254px]  ': isModalVisible

        })}>


            {
                isModalVisible && <div className=' flex items-center justify-end '>
                    <CloseIcon />
                </div>
            }
            {
                navItems.map(item => (
                    <div key={item.id} className='flex items-center gap-[11px]'>
                        <p className={classNames('text-white hidden lg:block font-bold',{
                            '!block' : isModalVisible
                        })}>{item.number}</p>
                        <p className='text-sm tracking-[2.70px] md:tracking-widest lg:text-[16px] text-white'>{item.text}</p>
                    </div>
                ))

            }
        </nav>
    )
}

export default Menu

