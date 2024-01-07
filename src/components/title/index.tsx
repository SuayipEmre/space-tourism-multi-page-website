import React from 'react'

type titleTypes = {
    number: string,
    text: string
}
const Title: React.FC<titleTypes>= ({number, text}) => {
    return (
        <div className=' w-full font-barlowCondensed    mt-4  justify-center md:justify-start md:w-[30%] xl:w-[30%]  md:ml-12 lg:ml-0 md:mt-12 lg:mt-24 flex items-center xl:justify-end gap-7'>
            <span className='text-white barlowCondensed w-[19px] lg:w-[26px] md:text-[20px] md:tracking-[3.38px] lg:text-[28px] h-[34px] opacity-25 font-bold '>{number}</span>
            <span className='text-white barlowCondensed md:text-[20px] lg:text-[28px] h-[34px] font-normal uppercase md:tracking-[3.38px] lg:tracking-[4.72px]'>{text}</span>
        </div>
    )
}

export default Title

