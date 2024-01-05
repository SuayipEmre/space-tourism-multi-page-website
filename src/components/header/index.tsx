import React from 'react'
import { Logo } from '../../SVGs/logo'

const Header: React.FC = () => {
    return (
        <header className='flex justify-between items-center'>

            <div className='ml-[55px]  flex  lg:h-24 flex-1 items-center lg:mt-10  relative '>
                <Logo />
                <div className="w-[473px] hidden lg:block ml-[167px] h-px opacity-25 absolute -right-10  z-10 bg-white" />
            </div>

            <nav className='md:w-[450px]  md:h-[96px] lg:w-[830px] lg:flex-1 z-0 lg:h-24 flex items-center justify-evenly lg:px-12 lg:mt-10 bg-white bg-opacity-5 backdrop-blur-[81.55px]    '>

                <div className='lg:flex lg:items-center gap-[11px]'>
                    <p className='text-white hidden lg:block font-bold'>00</p>
                    <p className='text-sm tracking-widest lg:text-[16px] text-white'>HOME</p>
                </div>

                <div className='flex items-center gap-[11px]'>
                    <p className='text-white font-bold hidden lg:block'>01</p>
                    <p className='text-white text-sm tracking-widest lg:text-[16px]'>DESTINATION</p>
                </div>
                <div className='flex items-center gap-[11px]'>
                    <p className='text-white font-bold hidden lg:block'>02</p>
                    <p className='text-white text-sm tracking-widestlg:text-[16px]'>CREW</p>
                </div>

                <div className='flex items-center gap-[11px]'>
                    <p className='text-white font-bold hidden lg:block'>03</p>
                    <p className='text-white text-sm tracking-widestlg:text-[16px]'>TECHNOLOGY</p>
                </div>

            </nav>
        </header>
    )
}

export default Header