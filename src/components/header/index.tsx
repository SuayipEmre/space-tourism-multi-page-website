import React, { useState } from 'react'
import { Logo } from '../../SVGs/logo'
import { IconHamburger } from '../../SVGs/iconHamburger'
import Menu from './menu'

const Header: React.FC = () => {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

    return (
        <header className=' flex pt-6 px-4 md:mt-0 md:px-0   justify-between items-center'>

            <div className='md:ml-[55px]  flex  lg:h-24 flex-1 items-center lg:mt-10  relative '>
                <Logo />
                <div className="w-[473px] hidden lg:block ml-[167px] h-px opacity-25 absolute -right-10  z-10 bg-white" />
            </div>

            
            <div className='block md:hidden' onClick={() => setIsModalVisible(true)}>
                <IconHamburger  />
            </div>

           <Menu isModalVisible={isModalVisible}  setIsModalVisible={setIsModalVisible} />


        </header>
    )
}

export default Header






