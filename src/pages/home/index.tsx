import '../../styles/home.css'

const Home = () => {
  return (
    <div className=' h-screen  overflow-hidden flex items-center justify-center'>

      <div className='w-[90%]  flex items-center justify-between'> 

        <div className=' w-[40%]  flex flex-col gap-6'>
          <h5 className="text-indigo-200  text-[28px] font-normal font-['Barlow Condensed'] tracking-[4.72px]">SO, YOU WANT TO TRAVEL TO SPACE</h5>
          <p className='text-[150px] tracking-widest text-white'>SPACE</p>
          <p className='text-[18px] text-[#D0D6F9] w-[70%] '>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>

        <div className='w-[274px] h-[274px] bg-white rounded-full flex items-center justify-center'>
          <p className='text-[32px]'>EXPLORE</p>
        </div>


      </div>

    </div>
  )
}

export default Home