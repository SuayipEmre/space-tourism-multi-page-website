import Header from '../../components/header'
import '../../styles/home_screen.css'

const Home = () => {
  
  return (
    <div className='' id='home_screen_container'>
           <Header />
      <div className=' h-screen   flex items-center justify-center'>

        <div className=' w-full gap-24 lg:gap-0 lg:w-[90%]  flex flex-col lg:flex-row items-center justify-between'>

          <div className='text-center w-full px-6 md:px-0  md:w-[60%] lg:w-[40%]  flex flex-col items-center gap-6'>
            <h5 className="text-indigo-200  text-[13px] md:text-[20px] lg:text-[28px] font-normal font-['Barlow Condensed'] tracking-[4.72px]">SO, YOU WANT TO TRAVEL TO </h5>
            <p className='text-[80px] md:text-[150px] tracking-widest text-white'>SPACE</p>
            <p className='text-[15px]  md:text-[16px] lg:text-[18px] text-[#D0D6F9] lg:w-[70%] '>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
          </div>

          <div className='w-[150px] h-[150px] md:w-[242px] md:h-[242px] lg:w-[274px] lg:h-[274px] bg-white rounded-full flex items-center justify-center'>
            <p className='text-[32px]'>EXPLORE</p>
          </div>


        </div>

      </div>
    </div>
  )
}

export default Home