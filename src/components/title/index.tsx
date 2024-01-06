import React from 'react'

type titleTypes = {
    number: string,
    text: string
}
const Title: React.FC<titleTypes>= ({number, text}) => {
    return (
        <div className=' lg:w-[30%] mt-24 flex items-center justify-end gap-7'>
            <span className='text-white w-[26px] text-[28px] h-[34px] opacity-25 font-bold '>{number}</span>
            <span className='text-white text-[28px] h-[34px] font-normal uppercase tracking-[4.72px]'>{text}</span>
        </div>
    )
}

export default Title

