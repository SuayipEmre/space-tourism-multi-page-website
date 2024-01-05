import React from 'react'
import { Logo } from '../../svg/logo'

const Header: React.FC = () => {
    return (
        <header className='lg:flex lg:justify-between lg:items-center'>

            <div className='ml-[55px]  flex  lg:h-24 flex-1 items-center lg:mt-10  relative '>
                <Logo />
                <div className="w-[473px] ml-[167px] h-px opacity-25 absolute -right-10  z-10 bg-white" />
            </div>

            <nav className='lg:w-[830px] flex-1 z-0 lg:h-24 lg:flex lg:items-center justify-evenly lg:px-12 lg:mt-10 bg-white bg-opacity-5 backdrop-blur-[81.55px]    '>

                <div className='lg:flex lg:items-center gap-[11px]'>
                    <p className='text-white font-bold'>00</p>
                    <p className='text-white'>HOME</p>
                </div>

                <div className='flex items-center gap-[11px]'>
                    <p className='text-white font-bold'>01</p>
                    <p className='text-white'>DESTINATION</p>
                </div>
                <div className='flex items-center gap-[11px]'>
                    <p className='text-white font-bold'>02</p>
                    <p className='text-white'>CREW</p>
                </div>

                <div className='flex items-center gap-[11px]'>
                    <p className='text-white font-bold'>03</p>
                    <p className='text-white'>TECHNOLOGY</p>
                </div>

            </nav>
        </header>
    )
}

export default Header